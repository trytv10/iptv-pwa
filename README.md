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

## Multiples fuentes combinadas

En vez de un solo `canales.m3u8`, la app lee `fuentes.json` en la raiz del
repo: un indice con tantas URLs de listas como quieras (por pais, region o
proveedor), y las combina todas en una sola guia.

```json
[
  "./canales.m3u8",
  "https://otro-servidor.com/lista-mexico.m3u8",
  "https://otro-servidor.com/lista-espana.json"
]
```

- Si el mismo canal (misma URL de stream) aparece en mas de una fuente,
  **siempre gana la version que vino de una fuente .m3u8** sobre una JSON,
  sin importar el orden en que esten listadas.
- Si una fuente falla (esta caida o tarda), la app sigue con el resto —
  no se cae toda la guia por una sola fuente rota.
- Si `fuentes.json` no existe o esta vacio, la app usa `canales.m3u8` como
  unica fuente (retrocompatible con como funcionaba antes).
- El boton "Cargar lista" (carga manual en un dispositivo puntual) sigue
  teniendo prioridad por sobre `fuentes.json` cuando esta presente.

## Chequeo automatico de canales caidos

Un workflow de GitHub Actions (`.github/workflows/check-channels.yml`) corre
cada 6 horas y prueba cada URL de `canales.m3u8`:

- Si un canal no responde, comenta sus 2 lineas con `# [CAIDO AAAA-MM-DD]`
  al principio. Como quedan como comentario, la app deja de mostrarlo solo
  (no hace falta borrar nada a mano).
- Si un canal que estaba marcado como caido vuelve a responder en una
  corrida posterior, se reactiva solo (le saca la marca).
- Nada se borra nunca de forma permanente — todo queda revisable en el
  archivo, y si queres eliminar un canal caido definitivamente, buscas la
  linea con `# [CAIDO ...]` y la borras vos.

Para activarlo (una sola vez):

1. Subi las carpetas `.github/workflows/check-channels.yml` y
   `scripts/check_channels.py` al repositorio (mismo metodo de "Add file"
   que usaste para los demas archivos, respetando esas rutas con carpetas).
2. En GitHub, pestana **Actions** del repo: si es la primera vez, puede
   pedir que confirmes habilitarlas.
3. Repo → **Settings** → **Actions** → **General** → en "Workflow
   permissions" elegi **"Read and write permissions"** y guarda — sin esto,
   el workflow no puede subir los cambios que detecta.
4. Para probarlo ya sin esperar 6 horas: pestana **Actions** → click en
   "Chequeo automatico de canales caidos" → **Run workflow**.

## Reproduccion HLS

Usa **hls.js** (via CDN) en navegadores que lo necesitan, y el soporte nativo
de HLS en Safari/iOS. No requiere backend propio para reproducir — cada
dispositivo se conecta directo a la URL .m3u8 de cada canal.

## Funciones agregadas

- **Favoritos**: estrella en cada fila y en el reproductor. Se guardan por
  dispositivo y hay un filtro "★ Favoritos" en la guia.
- **Continuar viendo**: banner arriba de la guia que recuerda el ultimo canal
  visto en ese dispositivo, con boton de reanudar directo.
- **Agrupar por pais**: si tu listado incluye el atributo `tvg-country`
  (M3U) o el campo `"pais"` (JSON) con un codigo ISO de 2 letras (AR, MX, ES,
  US, etc.), aparece un selector "Categoria / Pais" arriba de los filtros,
  con bandera y nombre de cada pais. Si ningun canal trae ese dato, el
  selector queda oculto y todo sigue agrupado por categoria como antes.
- **Idioma**: boton ES/EN arriba a la derecha, cambia toda la interfaz.
  Se puede sumar mas idiomas ampliando el objeto `IDIOMAS` en `app.js`.
- **Subtitulos**: si el stream trae pistas de subtitulos, aparece el boton
  correspondiente en el reproductor con la lista de pistas disponibles.
- **Calidad**: si el stream ofrece multiples resoluciones (HLS adaptativo),
  aparece un selector de calidad manual ademas del modo automatico.
- **Picture-in-Picture**: boton dedicado, disponible en navegadores que lo
  soportan.
- **AirPlay**: boton dedicado, visible solo en Safari/iOS/macOS.
- **Chromecast**: boton dedicado; envia el canal actual a cualquier
  dispositivo Chromecast en la misma red.

## Siguientes pasos posibles (no incluidos todavia)

- Chequeo automatico de disponibilidad de canales (ej. via GitHub Actions),
  para quitar de `fuentes.json`/canales caidos sin intervencion manual.
- Registro de fuentes confiables con su origen y estabilidad.
- Proxy para streams bloqueados por CORS.
- Cuentas de usuario con sincronizacion de favoritos entre dispositivos.
- EPG / guia de programación con horarios (formato XMLTV).
- Empaquetado nativo para Play Store (Android TV) con Media3/ExoPlayer,
  reutilizando este mismo listado.
- App para Tizen/webOS empaquetando esta misma base con su SDK correspondiente.
