# Guia de Canales — PWA

Reproductor de senales .m3u8 pensado para funcionar igual en celulares, tablets
y televisores (Smart TV con navegador, Android TV, etc.), sin pasar por una
tienda de aplicaciones.

## Que incluye

- `index.html` / `styles.css` / `app.js` — la aplicacion en si.
- `manifest.json` + `sw.js` — la hacen instalable ("Agregar a pantalla de
  inicio") y con arranque rapido.
- `icons/icon.svg` — icono de la app.
- `ejemplo-lista.m3u8` — un listado de prueba (streams publicos de test) para
  ver el formato esperado y probar que todo funciona antes de cargar tu lista
  real.

## Como cargar tu listado de canales

Dentro de la app, boton **"Cargar lista"**, hay tres formas — usa la que te
resulte mas comoda, ninguna requiere tocar codigo:

1. **URL remota**: pegar la URL de un archivo `.m3u` / `.m3u8` / `.json`
   alojado en algun servidor (asi podes actualizar el listado subiendo un
   archivo nuevo ahi, sin tocar la app).
2. **Archivo**: subir el archivo `.m3u`, `.m3u8` o `.json` directamente desde
   el dispositivo.
3. **Pegar texto**: pegar el contenido M3U o JSON a mano.

El listado elegido queda guardado en el dispositivo (localStorage), asi que
no hace falta volver a cargarlo cada vez que abrís la app — solo cuando
quieras actualizarlo.

### Formato M3U esperado

```
#EXTM3U
#EXTINF:-1 tvg-logo="https://.../logo.png" group-title="Deportes",Nombre del canal
https://servidor.com/canal/index.m3u8
```

- `group-title` se usa para las categorias/filtros de la guia.
- `tvg-logo` es opcional; si falta, se muestran las iniciales del nombre.

### Formato JSON alternativo

```json
[
  { "nombre": "Canal 1", "url": "https://.../stream.m3u8", "logo": "", "grupo": "General" }
]
```

## Como probarla ahora mismo (local)

Cualquier servidor estatico simple sirve. Por ejemplo, con Python instalado:

```bash
cd iptv-pwa
python3 -m http.server 8080
```

Y abrís `http://localhost:8080` desde el navegador del celular/tablet/TV
(deben estar en la misma red que tu PC).

## Como desplegarla para uso real

Se puede subir tal cual a cualquier hosting estatico:

- **Netlify / Vercel**: arrastrar la carpeta o conectar un repo — quedan con
  HTTPS automatico, que es necesario para que la PWA sea instalable.
- **VPS propio con Nginx**: copiar la carpeta a `/var/www/iptv` y servirla con
  un `server{}` basico. Recomendado usar HTTPS (Let's Encrypt) tambien ahí.

## Instalarla en cada tipo de dispositivo

- **Android (Chrome)**: menu → "Agregar a pantalla de inicio" / aparece un
  banner de instalación automático.
- **iOS (Safari)**: boton compartir → "Agregar a pantalla de inicio".
- **Smart TV con navegador (Tizen, webOS, Android TV/Google TV)**: abrir la
  URL desde el navegador de la TV. La navegación por control remoto ya está
  contemplada (flechas arriba/abajo cambian de canal dentro del reproductor,
  foco visible en toda la interfaz).

## Reproduccion HLS

Usa **hls.js** (via CDN) en navegadores que lo necesitan, y el soporte nativo
de HLS en Safari/iOS. No requiere backend propio para reproducir — cada
dispositivo se conecta directo a la URL .m3u8 de cada canal.

## Siguientes pasos posibles (no incluidos todavia)

- EPG / guia de programación con horarios (formato XMLTV).
- Favoritos persistentes.
- Empaquetado nativo para Play Store (Android TV) con Media3/ExoPlayer,
  reutilizando este mismo listado.
- App para Tizen/webOS empaquetando esta misma base con su SDK correspondiente.
