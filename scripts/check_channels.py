#!/usr/bin/env python3
"""
Revisa cada señal de canales.m3u8 y marca las que no responden, en vez de
borrarlas. Un canal marcado como caído no aparece en la app (el marcador
lo convierte en comentario), pero el bloque queda en el archivo por si
vuelve a andar: la próxima corrida lo reintenta solo y lo reactiva
automáticamente si responde de nuevo.

Uso: python scripts/check_channels.py [archivo.m3u8]
"""
import re
import sys
from datetime import datetime, timezone
import requests

ARCHIVO = sys.argv[1] if len(sys.argv) > 1 else "canales.m3u8"
TIMEOUT = 10

HEADERS_NAVEGADOR = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "Accept": "*/*",
    "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
    "Connection": "keep-alive",
}

MARCA_RE = re.compile(r"^# \[CAIDO \d{4}-\d{2}-\d{2}\] ")


def quitar_marca(linea):
    return MARCA_RE.sub("", linea, count=1)


def es_extinf(linea):
    return quitar_marca(linea).lstrip().startswith("#EXTINF")


def es_linea_url(linea):
    limpio = quitar_marca(linea).strip()
    return bool(limpio) and not limpio.startswith("#")


def revisar_url(url):
    # Saltamos la validación en scripts de comandos o canales especiales (ej. YouTube)
    if "youtube.com" in url or "youtu.be" in url:
        return True

    try:
        # Petición inicial ligera
        resp = requests.get(
            url,
            headers=HEADERS_NAVEGADOR,
            timeout=TIMEOUT,
            stream=True,
            allow_redirects=True,
            verify=False
        )
        ok = resp.status_code < 400
        resp.close()
        return ok
    except requests.RequestException:
        # Reintento con fallback si falla la conexión SSL/HTTP inicial
        try:
            resp = requests.head(
                url,
                headers=HEADERS_NAVEGADOR,
                timeout=TIMEOUT,
                allow_redirects=True,
                verify=False
            )
            ok = resp.status_code < 400
            resp.close()
            return ok
        except requests.RequestException:
            return False


def main():
    # Desactivar advertencias de SSL no verificado en el log del runner
    requests.packages.urllib3.disable_warnings()

    with open(ARCHIVO, encoding="utf-8") as f:
        lineas = f.readlines()

    hoy = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    marca_hoy = f"# [CAIDO {hoy}] "

    salida = []
    total = activos = caidos = recuperados = 0
    i = 0
    while i < len(lineas):
        linea = lineas[i]

        if es_extinf(linea):
            j = i + 1
            while j < len(lineas) and lineas[j].strip() == "":
                j += 1
            if j < len(lineas) and es_linea_url(lineas[j]):
                url_linea = lineas[j]
                url = quitar_marca(url_linea).strip()
                estaba_caido = bool(MARCA_RE.match(linea))
                total += 1

                if revisar_url(url):
                    activos += 1
                    if estaba_caido:
                        recuperados += 1
                    salida.append(quitar_marca(linea))
                    salida.extend(lineas[i + 1:j])
                    salida.append(quitar_marca(url_linea))
                else:
                    caidos += 1
                    salida.append(marca_hoy + quitar_marca(linea))
                    salida.extend(lineas[i + 1:j])
                    salida.append(marca_hoy + quitar_marca(url_linea))

                i = j + 1
                continue

        salida.append(linea)
        i += 1

    with open(ARCHIVO, "w", encoding="utf-8") as f:
        f.writelines(salida)

    print(
        f"Revisados: {total} | Activos: {activos} | "
        f"Caidos: {caidos} | Recuperados hoy: {recuperados}"
    )


if __name__ == "__main__":
    main()
