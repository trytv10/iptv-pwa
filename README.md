# Guia de Canales — PWA

Reproductor de señales `.m3u8` pensado para funcionar igual en celulares, tablets y televisores (Smart TV con navegador, Android TV, etc.), sin pasar por una tienda de aplicaciones.

**Demo:** https://trytv10.github.io/iptv-pwa/

---

## Que incluye

- `index.html` / `styles.css` / `app.js` — la aplicación en sí.
- `manifest.json` + `sw.js` — la hacen instalable ("Agregar a pantalla de inicio") y con arranque rápido.
- `icons/icon.svg` — ícono de la app.
- `ejemplo-lista.m3u8` — un listado de prueba (streams públicos de test) para ver el formato esperado y probar que todo funciona antes de cargar tu lista real.

---

## Como cargar tu listado de canales

Dentro de la app, botón **"Gestionar Listas"**, hay tres formas — usá la que te resulte más cómoda, ninguna requiere tocar código:

1. **URL remota**: pegar la URL de un archivo `.m3u` / `.m3u8` / `.json` alojado en algún servidor.
2. **Archivo**: subir el archivo `.m3u`, `.m3u8` o `.json` directamente desde el dispositivo.
3. **Pegar texto**: pegar el contenido M3U o JSON a mano.

Cada lista cargada se guarda con un nombre propio en el dispositivo. Podés tener **varias listas guardadas** y alternar entre ellas desde el selector del encabezado.

### Formato M3U esperado

```m3u
#EXTM3U
#EXTINF:-1 tvg-logo="https://.../logo.png" group-title="Deportes" tvg-id="Canal.ar" tvg-country="AR",Nombre del canal
https://servidor.com/canal/index.m3u8
