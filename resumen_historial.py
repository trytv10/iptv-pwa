#!/usr/bin/env python3
"""
Resume historial.csv (generado por check_channels.py) y produce:

- resumen.json : agregados por canal, país, fuente y CDN.
- top_caidos.csv : canales con peor tasa de disponibilidad.
- uptime_por_hora.csv : disponibilidad agregada por franja horaria.

Uso:
    python resumen_historial.py [--historial historial.csv] [--salida ./salida]
"""
import argparse
import csv
import json
import re
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse


def cargar_historial(ruta: Path) -> list[dict]:
    if not ruta.exists():
        print(f"No existe {ruta}")
        return []
    with open(ruta, "r", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def dominio(url: str) -> str:
    try:
        return urlparse(url).netloc or "desconocido"
    except Exception:
        return "desconocido"


def normalizar_estado(estado: str) -> str:
    return "ok" if estado == "ok" else "caido"


def calcular_agregados(filas: list[dict]) -> dict:
    # Por canal (URL)
    por_canal: dict[str, dict] = defaultdict(lambda: {
        "nombre": "", "total": 0, "ok": 0, "ms_promedio": 0.0, "_suma_ms": 0,
    })
    # Por dominio
    por_dominio: dict[str, dict] = defaultdict(lambda: {"total": 0, "ok": 0})
    # Por hora (UTC)
    por_hora: dict[str, dict] = defaultdict(lambda: {"total": 0, "ok": 0})

    for fila in filas:
        url = fila.get("url", "")
        nombre = fila.get("nombre", "")
        estado = normalizar_estado(fila.get("estado", ""))
        try:
            ms = int(fila.get("ms", "0") or 0)
        except ValueError:
            ms = 0

        try:
            fecha = datetime.fromisoformat(fila.get("fecha_iso", "").replace("Z", "+00:00"))
            hora = fecha.strftime("%Y-%m-%dT%H")
        except ValueError:
            hora = "desconocida"

        c = por_canal[url]
        c["nombre"] = nombre or c["nombre"]
        c["total"] += 1
        if estado == "ok":
            c["ok"] += 1
            c["_suma_ms"] += ms

        d = por_dominio[dominio(url)]
        d["total"] += 1
        if estado == "ok":
            d["ok"] += 1

        h = por_hora[hora]
        h["total"] += 1
        if estado == "ok":
            h["ok"] += 1

    # Post-proceso: promedios y tasas
    canales = []
    for url, datos in por_canal.items():
        total = datos["total"]
        ok = datos["ok"]
        ms_prom = (datos["_suma_ms"] / ok) if ok else 0
        canales.append({
            "url": url,
            "nombre": datos["nombre"],
            "total": total,
            "ok": ok,
            "uptime": round(ok / total, 4) if total else 0,
            "ms_promedio": round(ms_prom, 1),
            "dominio": dominio(url),
        })

    dominios = [
        {"dominio": d, "total": v["total"], "ok": v["ok"],
         "uptime": round(v["ok"] / v["total"], 4) if v["total"] else 0}
        for d, v in por_dominio.items()
    ]
    dominios.sort(key=lambda x: (-x["uptime"], -x["total"]))

    horas = [
        {"hora": h, "total": v["total"], "ok": v["ok"],
         "uptime": round(v["ok"] / v["total"], 4) if v["total"] else 0}
        for h, v in por_hora.items()
    ]
    horas.sort(key=lambda x: x["hora"])

    # Peores canales (con al menos 2 chequeos para evitar ruido)
    peores = [c for c in canales if c["total"] >= 2]
    peores.sort(key=lambda x: (x["uptime"], -x["total"]))
    peores = peores[:100]

    return {
        "generado_iso": datetime.utcnow().isoformat() + "Z",
        "total_filas": len(filas),
        "total_canales": len(canales),
        "total_dominios": len(dominios),
        "canales": sorted(canales, key=lambda x: x["nombre"].lower()),
        "dominios": dominios,
        "horas": horas,
        "peores": peores,
    }


def escribir_salidas(agregados: dict, carpeta: Path) -> None:
    carpeta.mkdir(parents=True, exist_ok=True)

    # resumen.json (alimenta el dashboard)
    with open(carpeta / "resumen.json", "w", encoding="utf-8") as f:
        json.dump(agregados, f, ensure_ascii=False, indent=2)

    # top_caidos.csv
    with open(carpeta / "top_caidos.csv", "w", encoding="utf-8", newline="") as f:
        campos = ["nombre", "url", "total", "ok", "uptime", "ms_promedio", "dominio"]
        w = csv.DictWriter(f, fieldnames=campos, extrasaction="ignore")
        w.writeheader()
        w.writerows(agregados["peores"])

    # uptime_por_hora.csv
    with open(carpeta / "uptime_por_hora.csv", "w", encoding="utf-8", newline="") as f:
        campos = ["hora", "total", "ok", "uptime"]
        w = csv.DictWriter(f, fieldnames=campos, extrasaction="ignore")
        w.writeheader()
        w.writerows(agregados["horas"])


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--historial", default="historial.csv")
    ap.add_argument("--salida", default="salida")
    args = ap.parse_args()

    filas = cargar_historial(Path(args.historial))
    if not filas:
        print("Histórico vacío o inexistente. Nada que resumir.")
        return

    print(f"Procesando {len(filas)} filas del histórico...")
    agregados = calcular_agregados(filas)
    escribir_salidas(agregados, Path(args.salida))

    print(f"\nResumen generado en ./{args.salida}/")
    print(f"  - resumen.json       ({agregados['total_canales']} canales, "
          f"{agregados['total_dominios']} dominios)")
    print(f"  - top_caidos.csv     (top {len(agregados['peores'])})")
    print(f"  - uptime_por_hora.csv ({len(agregados['horas'])} franjas)")


if __name__ == "__main__":
    main()
