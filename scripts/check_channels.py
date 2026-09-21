#!/usr/bin/env python3
"""
Revisa cada senal de canales.m3u8 y marca las que no responden, en vez de
borrarlas. Un canal marcado como caido no aparece en la app (el marcador
lo convierte en comentario), pero el bloque queda en el archivo por si
vuelve a andar: la proxima corrida lo reintenta solo y lo reactiva
automaticamente si responde de nuevo.

Uso: python scripts/check_channels.py [archivo.m3u8]
"""
import re
import sys
from datetime import datetime, timezone

import requests

ARCHIVO = sys.argv[1] if len(sys.argv) > 1 else "canales.m3u8"
TIMEOUT = 12
USER_AGENT = "Mozilla/5.0 (compatible; IPTV-Guide-Checker/1.0)"
MARCA_RE = re.compile(r"^# \[CAIDO \d{4}-\d{2}-\d{2}\] ")


def quitar_marca(linea):
    return MARCA_RE.sub("", linea, count=1)


def es_extinf(linea):
    return quitar_marca(linea).lstrip().startswith("#EXTINF")


def es_linea_url(linea):
    limpio = quitar_marca(linea).strip()
    return bool(limpio) and not limpio.startswith("#")


def revisar_url(url):
    try:
        resp = requests.get(
            url,
            headers={"User-Agent": USER_AGENT},
            timeout=TIMEOUT,
            stream=True,
            allow_redirects=True,
        )
        ok = resp.status_code < 400
        resp.close()
        return ok
    except requests.RequestException:
        return False


def main():
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
