#!/usr/bin/env python3
import sys
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed

# Configuración de velocidad y tiempos límite
TIMEOUT_FFMPEG_SEG = 12  # Segundos máximos de espera para que el stream responda y emita video
MAX_HILOS = 20           # Hilos concurrentes (FFmpeg consume recursos, 20-30 es un buen balance)

def verificar_stream_real(url):
    """
    Usa FFmpeg para intentar conectar al stream y verificar si es capaz de 
    comenzar a recibir y decodificar video de forma real sin errores.
    """
    cmd = [
        'ffmpeg',
        '-v', 'error',                 # Solo mostrar errores críticos
        '-rw_timeout', '8000000',      # Timeout de lectura de red en microsegundos (8 segundos)
        '-i', url,                     # URL del stream
        '-t', '1',                     # Analizar solo el primer segundo de video válido
        '-f', 'null',                  # Descartar la salida visual (no guarda archivo)
        '-'
    ]
    
    try:
        # Ejecutamos FFmpeg limitando estrictamente el tiempo total de ejecución
        resultado = subprocess.run(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=TIMEOUT_FFMPEG_SEG
        )
        
        # Si el código de retorno es 0, FFmpeg logró leer y procesar video con éxito
        if resultado.returncode == 0:
            return True
    except (subprocess.TimeoutExpired, Exception):
        # Si superó el tiempo límite o dio error de decodificación/red, el canal está caído o lento
        pass

    return False

def procesar_playlist(ruta_archivo):
    print(f"Leyendo canales desde: {ruta_archivo}...")
    
    try:
        with open(ruta_archivo, 'r', encoding='utf-8') as f:
            lineas = f.readlines()
    except FileNotFoundError:
        print(f"Error: No se encontró el archivo {ruta_archivo}")
        sys.exit(1)

    # Extraer bloques de canales estructurados
    canales = []
    i = 0
    while i < len(lineas):
        linea = lineas[i].strip()
        if linea.startswith('#EXTINF:'):
            extinf = lineas[i]
            i += 1
            extras = []
            while i < len(lineas) and lineas[i].strip().startswith('#'):
                extras.append(lineas[i])
                i += 1
            if i < len(lineas):
                url_canal = lineas[i].strip()
                canales.append({
                    'extinf': extinf,
                    'extras': extras,
                    'url': url_canal
                })
        i += 1

    total_canales = len(canales)
    print(f"Iniciando chequeo real de video para {total_canales} canales ({MAX_HILOS} hilos concurrentes)...")

    activos = []
    caidos = 0

    def chequear(canal):
        if verificar_stream_real(canal['url']):
            return canal
        return None

    # Ejecución concurrente ultra-rápida basada en decodificación real
    with ThreadPoolExecutor(max_workers=MAX_HILOS) as executor:
        futuros = {executor.submit(chequear, c): c for c in canales}
        for idx, futuro in enumerate(as_completed(futuros), 1):
            resultado = futuro.result()
            if resultado:
                activos.append(resultado)
                print(f"[{idx}/{total_canales}] [OK] {resultado['url'][:50]}...")
            else:
                caidos += 1
                print(f"[{idx}/{total_canales}] [CAÍDO/LENTO] Eliminado.")

    # Reconstruir el archivo M3U8 limpio de señales rotas o congeladas
    nuevas_lineas = ['#EXTM3U\n']
    for c in activos:
        nuevas_lineas.append(c['extinf'])
        for extra in c['extras']:
            nuevas_lineas.append(extra)
        nuevas_lineas.append(c['url'] + '\n')

    with open(ruta_archivo, 'w', encoding='utf-8') as f:
        f.writelines(nuevas_lineas)

    print("\n==========================================")
    print(f" Chequeo Real de Video Finalizado:")
    print(f" - Canales analizados: {total_canales}")
    print(f" - Canales activos con video: {len(activos)}")
    print(f" - Canales caídos o congelados removidos: {caidos}")
    print("==========================================")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Uso: python check_channels.py <archivo.m3u8>")
        sys.exit(1)
    
    procesar_playlist(sys.argv[1])
