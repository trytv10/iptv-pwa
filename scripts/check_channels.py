#!/usr/bin/env python3
"""
Chequeo real de canales caídos.

- Prueba cada canal con FFmpeg (decodificación real de video).
- Los canales caídos se COMENTAN con `# [CAIDO AAAA-MM-DD]`, no se borran.
- Los canales comentados que vuelven a responder se REACTIVAN.
- Guarda histórico en historial.csv (fecha, url, estado, ms).
- Nunca elimina información: todo queda revisable.

Uso:
    python check_channels.py canales.m3u8
"""
import sys
import re
import csv
import time
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

# ==========================================================
#  Configuración
# ==========================================================
TIMEOUT_FFMPEG_SEG = 12      # segundos máximos de espera por canal
MAX_HILOS = 20               # chequeos concurrentes
ARCHIVO_HISTORIAL = 'historial.csv'

MARCA_CAIDO_RE = re.compile(r'^#\s*\[CAIDO\s+(\d{4}-\d{2}-\d{2})\]\s*(.*)$')


# ==========================================================
#  Prueba real con FFmpeg
# ==========================================================
def verificar_stream_real(url: str) -> tuple[bool, int]:
    """
    Devuelve (ok, ms). ok=True solo si FFmpeg logra decodificar al menos
    1 segundo de video sin errores fatales.
    """
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
        return (resultado.returncode == 0, ms)
    except subprocess.TimeoutExpired:
        return (False, TIMEOUT_FFMPEG_SEG * 1000)
    except Exception:
        return (False, 0)


# ==========================================================
#  Parseo del M3U preservando estado caído
# ==========================================================
def parsear_m3u(lineas: list[str]) -> list[dict]:
    """
    Estructura de cada canal:
    {
        'extinf': str,            # línea #EXTINF (comentada o no)
        'extras': [str, ...],     # #EXTVLCOPT / #EXTHTTP (comentados o no)
        'url': str,               # URL (comentada o no)
        'caido': bool,            # si estaba marcado como caído antes
        'fecha_caido': str|None,  # fecha del comentario original
        'comentario': str,        # texto después de la marca (por si hubiera)
    }
    """
    canales = []
    i = 0
    n = len(lineas)

    while i < n:
        linea = lineas[i].rstrip('\n')

        # ¿Es un #EXTINF directo o comentado con marca CAIDO?
        if linea.startswith('#EXTINF:'):
            canales.append(_bloque_desde(i, lineas, caido=False, fecha_caido=None, comentario=''))
            i = canales[-1]['_fin']
        else:
            m = MARCA_CAIDO_RE.match(linea)
            if m and i + 1 < n and lineas[i + 1].lstrip().startswith('#EXTINF:'):
                # Bloque caído: la línea con la marca precede al #EXTINF
                canales.append(_bloque_desde(
                    i + 1, lineas,
                    caido=True,
                    fecha_caido=m.group(1),
                    comentario=m.group(2).strip()
                ))
                i = canales[-1]['_fin']
            else:
                i += 1

    # Limpia el campo temporal _fin
    for c in canales:
        c.pop('_fin', None)
    return canales


def _bloque_desde(inicio: int, lineas: list[str], caido: bool,
                   fecha_caido: str | None, comentario: str) -> dict:
    """
    Recolecta desde la línea #EXTINF hasta la URL del stream.
    Devuelve el dict del canal + '_fin' (índice siguiente).
    """
    i = inicio
    n = len(lineas)

    extinf = lineas[i].rstrip('\n')
    i += 1

    extras = []
    while i < n:
        s = lineas[i].lstrip()
        # Opciones del canal (#EXTVLCOPT, #EXTHTTP) o comentarios
        if s.startswith('#') and not s.startswith('#EXTINF'):
            # Ojo: si es una marca CAIDO de otro canal, cortamos
            if MARCA_CAIDO_RE.match(s):
                break
            extras.append(lineas[i].rstrip('\n'))
            i += 1
            continue
        break

    url = ''
    if i < n:
        url = lineas[i].strip()
        i += 1

    return {
        'extinf': extinf,
        'extras': extras,
        'url': url,
        'caido': caido,
        'fecha_caido': fecha_caido,
        'comentario': comentario,
        '_fin': i,
    }


# ==========================================================
#  Reconstrucción del M3U
# ==========================================================
def reconstruir_m3u(canales: list[dict]) -> str:
    hoy = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    salida = ['#EXTM3U\n']

    for c in canales:
        if c['caido']:
            # Mantiene la fecha original del comentario si existe; si no, pone hoy
            fecha = c.get('fecha_caido') or hoy
            sufijo = f" {c['comentario']}" if c.get('comentario') else ''
            salida.append(f"# [CAIDO {fecha}]{sufijo}\n")
        salida.append(c['extinf'] + '\n')
        for ex in c['extras']:
            salida.append(ex + '\n')
        if c['url']:
            salida.append(c['url'] + '\n')

    return ''.join(salida)


# ==========================================================
#  Histórico
# ==========================================================
def escribir_historial(filas: list[dict]) -> None:
    existe = Path(ARCHIVO_HISTORIAL).exists()
    with open(ARCHIVO_HISTORIAL, 'a', newline='', encoding='utf-8') as f:
        campos = ['fecha_iso', 'url', 'estado', 'ms', 'nombre']
        w = csv.DictWriter(f, fieldnames=campos)
        if not existe:
            w.writeheader()
        w.writerows(filas)


# ==========================================================
#  Main
# ==========================================================
def procesar_playlist(ruta_archivo: str) -> None:
    print(f"Leyendo canales desde: {ruta_archivo}...")
    try:
        with open(ruta_archivo, 'r', encoding='utf-8') as f:
            lineas = f.readlines()
    except FileNotFoundError:
        print(f"Error: no se encontró {ruta_archivo}")
        sys.exit(1)

    canales = parsear_m3u(lineas)
    total = len(canales)
    print(f"Canales detectados: {total} "
          f"({sum(1 for c in canales if c['caido'])} venían marcados como caídos)")

    # Chequear todos con FFmpeg
    print(f"Chequeando con FFmpeg ({MAX_HILOS} hilos)...")
    resultados: dict[int, tuple[bool, int]] = {}

    def chequear(idx_canal):
        idx, canal = idx_canal
        if not canal['url']:
            return (idx, (False, 0))
        return (idx, verificar_stream_real(canal['url']))

    with ThreadPoolExecutor(max_workers=MAX_HILOS) as ex:
        futuros = [ex.submit(chequear, (i, c)) for i, c in enumerate(canales)]
        for j, fut in enumerate(as_completed(futuros), 1):
            idx, res = fut.result()
            resultados[idx] = res
            estado = 'OK' if res[0] else 'CAÍDO'
            url_corta = (canales[idx]['url'] or '')[:60]
            print(f"[{j}/{total}] [{estado}] {url_corta}")

    # Aplicar resultado: marcar/reactivar y recolectar histórico
    hoy = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    fecha_iso = datetime.now(timezone.utc).isoformat()
    historial: list[dict] = []

    nuevos_caidos = 0
    reactivados = 0
    siguen_caidos = 0
    siguen_ok = 0

    for i, c in enumerate(canales):
        ok, ms = resultados.get(i, (False, 0))
        historial.append({
            'fecha_iso': fecha_iso,
            'url': c['url'],
            'estado': 'ok' if ok else 'caido',
            'ms': ms,
            'nombre': _nombre_de_extinf(c['extinf']),
        })

        if ok and c['caido']:
            c['caido'] = False
            c['fecha_caido'] = None
            c['comentario'] = ''
            reactivados += 1
        elif ok and not c['caido']:
            siguen_ok += 1
        elif not ok and not c['caido']:
            c['caido'] = True
            c['fecha_caido'] = hoy
            c['comentario'] = ''
            nuevos_caidos += 1
        else:
            siguen_caidos += 1

    # Escribir M3U reconstruido
    with open(ruta_archivo, 'w', encoding='utf-8') as f:
        f.write(reconstruir_m3u(canales))

    # Escribir histórico
    escribir_historial(historial)

    print("\n==========================================")
    print(" Resumen del chequeo")
    print("==========================================")
    print(f" Canales analizados:            {total}")
    print(f" Siguen OK:                     {siguen_ok}")
    print(f" Nuevos caídos (comentados):    {nuevos_caidos}")
    print(f" Reactivados:                   {reactivados}")
    print(f" Siguen caídos:                 {siguen_caidos}")
    print(f" Histórico acumulado en:        {ARCHIVO_HISTORIAL}")
    print("==========================================")


def _nombre_de_extinf(extinf: str) -> str:
    if ',' in extinf:
        return extinf.split(',', 1)[1].strip()
    return extinf.strip()


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Uso: python check_channels.py <archivo.m3u8>")
        sys.exit(1)
    procesar_playlist(sys.argv[1])