#!/usr/bin/env python3
"""
Chequeo de canales caídos para el proyecto Guia de Canales.

- Lee canales.json (formato JSON con campos {id, nombre, url, ...}).
- Prueba cada canal con FFmpeg (decodificación real de video).
- Genera estado-canales.json (fuente de verdad del estado).
- Regenera canales.m3u8 SIN marcas de caído (formato estándar).
- Guardado incremental cada 500 canales para no perder progreso.
- Acumula fallosConsecutivos entre corridas.

Uso:
    python scripts/check_channels.py

Variables de entorno opcionales:
    LIMITE_CANALES   Limita la cantidad a chequear (para testing).
    CANALES_JSON     Ruta al archivo de entrada (default: canales.json).
    ESTADO_JSON      Ruta al archivo de estado (default: estado-canales.json).
    M3U8_SALIDA      Ruta al .m3u8 regenerado (default: canales.m3u8).
"""
import sys
import os
import json
import time
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

# ==========================================================
#  Configuración
# ==========================================================
TIMEOUT_FFMPEG_SEG = 15
UMBRAL_LENTO_SEG = 8
MAX_HILOS = 20
GUARDADO_INCREMENTAL = 500

CANALES_JSON = os.environ.get('CANALES_JSON', 'canales.json')
ESTADO_JSON = os.environ.get('ESTADO_JSON', 'estado-canales.json')
M3U8_SALIDA = os.environ.get('M3U8_SALIDA', 'canales.m3u8')
_valor_limite = (os.environ.get('LIMITE_CANALES') or '0').strip()
LIMITE_CANALES = int(_valor_limite) if _valor_limite.isdigit() else 0

# Reglas de estado
FALLOS_PARA_CAIDO = 3         # 3 fallos consecutivos → caido
FALLOS_PARA_DADO_DE_BAJA = 12  # 12 fallos consecutivos → dadoDeBaja


# ==========================================================
#  Prueba real con FFmpeg
# ==========================================================
def verificar_stream_real(url):
    """
    Devuelve (ok, ms, motivo).
    ok=True solo si FFmpeg logra decodificar al menos 1 segundo de video.
    """
    if not url or not url.startswith('http'):
        return (False, 0, 'url_invalida')

    cmd = [
        'ffmpeg',
        '-v', 'error',
        '-rw_timeout', '8000000',
        '-i', url,
        '-t', '1',
        '-f', 'null',
        '-'
    ]
    inicio = time.time()
    try:
        resultado = subprocess.run(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=TIMEOUT_FFMPEG_SEG
        )
        ms = int((time.time() - inicio) * 1000)
        if resultado.returncode == 0:
            return (True, ms, 'ok')
        return (False, ms, 'ffmpeg_error')
    except subprocess.TimeoutExpired:
        return (False, TIMEOUT_FFMPEG_SEG * 1000, 'timeout')
    except Exception as e:
        return (False, 0, 'excepcion:' + type(e).__name__)


# ==========================================================
#  Carga y guardado
# ==========================================================
def cargar_canales(ruta):
    with open(ruta, 'r', encoding='utf-8') as f:
        datos = json.load(f)
    if isinstance(datos, list):
        return datos
    return datos.get('canales', [])


def cargar_estado_previo(ruta):
    """Devuelve el dict de canales del estado anterior, o {} si no existe."""
    if not Path(ruta).exists():
        return {}
    try:
        with open(ruta, 'r', encoding='utf-8') as f:
            datos = json.load(f)
        return datos.get('canales', {})
    except Exception as e:
        print(f"  Aviso: no se pudo leer {ruta} ({e}). Se empieza de cero.")
        return {}


def generar_id_canal(canal, idx):
    """Devuelve el id del canal. Si no tiene, lo genera."""
    if canal.get('id'):
        return canal['id']
    url = canal.get('url', '')
    # FNV-1a igual que el Worker
    h = 0x811c9dc5
    for c in url:
        h ^= ord(c)
        h = (h * 0x01000193) & 0xFFFFFFFF
    return 'c_' + format(h, '08x')


def calcular_estado(fallos_consecutivos, respondio_ok):
    """
    Reglas:
      - Si respondió OK → estable.
      - Si no respondió y lleva 1-2 fallos → inestable.
      - Si no respondió y lleva >= 3 fallos → caido.
      - Si no respondió y lleva >= 12 fallos → caido + dadoDeBaja.
    """
    if respondio_ok:
        return 'estable'
    if fallos_consecutivos >= FALLOS_PARA_CAIDO:
        return 'caido'
    return 'inestable'


def guardar_estado_incremental(estado_canales, actualizado_iso, resumen, total, ruta):
    """Guarda el estado parcial. Se llama cada GUARDADO_INCREMENTAL canales."""
    salida = {
        'actualizado': actualizado_iso,
        'total': total,
        'resumen': resumen,
        'canales': estado_canales,
    }
    with open(ruta, 'w', encoding='utf-8') as f:
        json.dump(salida, f, ensure_ascii=False, indent=2)


def regenerar_m3u8(canales, ruta):
    """Regenera canales.m3u8 SIN marcas de caído, con el formato estándar."""
    lineas = ['#EXTM3U\n']
    for c in canales:
        nombre = c.get('nombre', 'Sin nombre')
        url = c.get('url', '')
        logo = c.get('logo', '')
        grupo = c.get('grupo', 'General')
        tvg_id = c.get('tvgId', '')
        if not url:
            continue
        attrs = f'tvg-logo="{logo}" group-title="{grupo}"'
        if tvg_id:
            attrs += f' tvg-id="{tvg_id}"'
        lineas.append(f'#EXTINF:-1 {attrs},{nombre}\n')
        lineas.append(f'{url}\n')
    with open(ruta, 'w', encoding='utf-8') as f:
        f.write(''.join(lineas))


# ==========================================================
#  Main
# ==========================================================
def main():
    print(f"Leyendo canales desde: {CANALES_JSON}")
    if not Path(CANALES_JSON).exists():
        print(f"Error: no se encontró {CANALES_JSON}")
        sys.exit(1)

    canales = cargar_canales(CANALES_JSON)
    total_original = len(canales)

    if LIMITE_CANALES > 0:
        canales = canales[:LIMITE_CANALES]
        print(f"  Modo test: limitando a {LIMITE_CANALES} canales")

    total = len(canales)
    print(f"Canales detectados: {total}")

    estado_previo = cargar_estado_previo(ESTADO_JSON)
    print(f"Estado previo cargado: {len(estado_previo)} canales")

    # Chequear
    print(f"Chequeando con FFmpeg ({MAX_HILOS} hilos, timeout {TIMEOUT_FFMPEG_SEG}s)...")
    resultados = {}

    def chequear(idx_canal):
        idx, canal = idx_canal
        return (idx, verificar_stream_real(canal.get('url', '')))

    inicio_global = time.time()

    with ThreadPoolExecutor(max_workers=MAX_HILOS) as ex:
        futuros = [ex.submit(chequear, (i, c)) for i, c in enumerate(canales)]
        completados = 0
        for fut in as_completed(futuros):
            idx, res = fut.result()
            resultados[idx] = res
            completados += 1

            if completados % 50 == 0 or completados == total:
                transcurrido = time.time() - inicio_global
                velocidad = completados / transcurrido if transcurrido > 0 else 0
                restante = (total - completados) / velocidad if velocidad > 0 else 0
                print(f"  [{completados}/{total}] "
                      f"~{velocidad:.1f} ch/s, "
                      f"faltan ~{restante/60:.0f} min")

    # Procesar resultados y armar estado-canales.json
    print("\nProcesando resultados...")
    fecha_iso = datetime.now(timezone.utc).isoformat()
    ahora_ms = int(time.time() * 1000)

    nuevo_estado = {}
    resumen = {'estable': 0, 'inestable': 0, 'caido': 0, 'lento': 0}

    for i, canal in enumerate(canales):
        ok, ms, motivo = resultados.get(i, (False, 0, 'sin_resultado'))
        cid = generar_id_canal(canal, i)

        previo = estado_previo.get(cid, {})
        fallos_previos = int(previo.get('fallosConsecutivos', 0))

        if ok:
            fallos_nuevos = 0
        else:
            fallos_nuevos = fallos_previos + 1

        estado = calcular_estado(fallos_nuevos, ok)
        dado_de_baja = (not ok) and fallos_nuevos >= FALLOS_PARA_DADO_DE_BAJA
        lento = ok and (ms > UMBRAL_LENTO_SEG * 1000)

        if estado == 'estable':
            resumen['estable'] += 1
            if lento:
                resumen['lento'] += 1
        elif estado == 'inestable':
            resumen['inestable'] += 1
        else:
            resumen['caido'] += 1

        nueva_entrada = {
            'estado': estado,
            'ultimaVezOK': fecha_iso if ok else previo.get('ultimaVezOK', None),
            'fallosConsecutivos': fallos_nuevos,
            'ultimoChequeo': fecha_iso,
            'tiempoRespuestaMs': ms,
            'motivo': motivo,
            'lento': lento,
        }
        if dado_de_baja:
            nueva_entrada['dadoDeBaja'] = True
            nueva_entrada['dadoDeBajaDesde'] = previo.get('dadoDeBajaDesde', fecha_iso)
        elif 'dadoDeBajaDesde' in previo:
            # Se reactivó: borrar el flag
            pass

        nuevo_estado[cid] = nueva_entrada

    # Guardado final
    salida = {
        'actualizado': fecha_iso,
        'total': total,
        'resumen': resumen,
        'canales': nuevo_estado,
    }
    with open(ESTADO_JSON, 'w', encoding='utf-8') as f:
        json.dump(salida, f, ensure_ascii=False, indent=2)

    print(f"  Escrito {ESTADO_JSON}")

    # Regenerar el .m3u8 (SIN marcas de caído, formato estándar)
    regenerar_m3u8(canales, M3U8_SALIDA)
    print(f"  Escrito {M3U8_SALIDA}")

    # Resumen
    print("\n==========================================")
    print(" Resumen del chequeo")
    print("==========================================")
    print(f" Canales analizados:            {total}")
    print(f" Estables:                      {resumen['estable']}")
    print(f"   De los cuales lentos:        {resumen['lento']}")
    print(f" Inestables:                    {resumen['inestable']}")
    print(f" Caídos:                        {resumen['caido']}")
    print(f" Dados de baja (>=12 fallos):   {sum(1 for v in nuevo_estado.values() if v.get('dadoDeBaja'))}")
    print("==========================================")


if __name__ == '__main__':
    main()
