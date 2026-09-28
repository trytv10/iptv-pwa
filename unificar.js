const fs = require('fs');
const https = require('https');

// ============================================================
//  Fuentes M3U de Free-TV/IPTV a unificar
// ============================================================
const fuentesUrls = [
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_argentina.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_uruguay.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_chile.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_brazil.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_mexico.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_colombia.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_peru.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_spain.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_usa.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_zz_news_es.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_zz_movies.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_albania.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_andorra.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_armenia.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_australia.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_austria.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_azerbaijan.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_belarus.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_belgium.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_bosnia_and_herzegovina.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_bulgaria.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_canada.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_china.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_costa_rica.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_croatia.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_czech_republic.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_denmark.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_dominican_republic.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_egypt.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_estonia.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_finland.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_france.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_germany.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_greece.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_hong_kong.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_hungary.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_india.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_indonesia.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_ireland.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_israel.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_italy.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_japan.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_korea.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_norway.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_paraguay.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_peru.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_poland.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_portugal.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_romania.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_russia.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_sweden.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_switzerland.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_uk.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_ukraine.m3u8",
  "https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_venezuela.m3u8"
];

// ============================================================
//  Filtros: dominios/esquemas que NO son HLS reproducible
// ============================================================
const DOMINIOS_NO_HLS = [
  'youtube.com',
  'youtu.be',
  'youtube-nocookie.com',
  'twitch.tv',
  'vk.com/video',
  'ok.ru/video',
  'dailymotion.com',
  'facebook.com',
  'instagram.com',
  'tiktok.com',
];

const ESQUEMAS_NO_HLS = [
  'rtmp://',
  'rtmps://',
  'rtsp://',
  'udp://',
  'rtp://',
];

function esUrlReproducible(url) {
  if (!url) return false;
  const u = url.toLowerCase().trim();
  if (ESQUEMAS_NO_HLS.some((s) => u.startsWith(s))) return false;
  if (DOMINIOS_NO_HLS.some((d) => u.includes(d))) return false;
  // Debe ser http/https o terminar en extensión de stream
  const esHttp = u.startsWith('http://') || u.startsWith('https://');
  return esHttp;
}

// Quita marcas Ⓢ Ⓖ Ⓨ Ⓓ Ⓣ Ⓞ Ⓥ y espacios sobrantes del nombre del canal
const MARCAS = /[ⓈⒼⓎⒹⓉⓄⓋ]/g;
function limpiarNombre(nombre) {
  return nombre.replace(MARCAS, '').replace(/\s{2,}/g, ' ').trim();
}

// ============================================================
//  Descarga HTTP con timeout
// ============================================================
function descargar(url, timeoutMs = 20000) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      // Sigue redirecciones 301/302
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
        res.resume();
        return resolve(descargar(res.headers.location, timeoutMs));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return resolve('');
      }
      let datos = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (datos += chunk));
      res.on('end', () => resolve(datos));
    });
    req.on('error', () => resolve(''));
    req.setTimeout(timeoutMs, () => {
      req.destroy();
      resolve('');
    });
  });
}

// Descarga en lotes para no saturar red
async function descargarEnLotes(urls, tamanoLote = 8) {
  const resultados = [];
  for (let i = 0; i < urls.length; i += tamanoLote) {
    const lote = urls.slice(i, i + tamanoLote);
    const parciales = await Promise.all(lote.map((u) => descargar(u)));
    resultados.push(...parciales);
  }
  return resultados;
}

// ============================================================
//  Proceso principal
// ============================================================
async function procesar() {
  console.log(`Descargando ${fuentesUrls.length} fuentes...`);
  const contenidos = await descargarEnLotes(fuentesUrls);

  let salidaM3U = '#EXTM3U\n';
  const urlsVistas = new Set();
  let contador = 0;
  let descartadosNoHls = 0;
  let totalCrudos = 0;

  for (const contenido of contenidos) {
    if (!contenido) continue;

    const lineas = contenido.split(/\r?\n/);
    let extinfActual = '';

    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i].trim();
      if (!linea) continue;

      if (linea.startsWith('#EXTINF')) {
        extinfActual = linea;
      } else if (linea.startsWith('#')) {
        // comentarios/opciones (EXTVLCOPT, EXTHTTP) — los ignoramos por ahora
        continue;
      } else {
        totalCrudos++;
        const streamUrl = linea;

        // Filtro 1: no HLS (YouTube/Twitch/RTMP...)
        if (!esUrlReproducible(streamUrl)) {
          descartadosNoHls++;
          extinfActual = '';
          continue;
        }

        // Filtro 2: duplicado
        if (urlsVistas.has(streamUrl)) {
          extinfActual = '';
          continue;
        }
        urlsVistas.add(streamUrl);

        // Limpia el nombre del #EXTINF
        if (extinfActual) {
          const partes = extinfActual.split(',');
          const nombre = limpiarNombre(partes.pop() || '');
          const cabecera = partes.join(',');
          extinfActual = `${cabecera},${nombre}`;
          salidaM3U += `${extinfActual}\n${streamUrl}\n`;
        } else {
          salidaM3U += `#EXTINF:-1,Canal ${++contador}\n${streamUrl}\n`;
        }
        extinfActual = '';
      }
    }
  }

  fs.writeFileSync('canales.m3u8', salidaM3U, 'utf-8');

  console.log('────────────────────────────────────────');
  console.log(`Canales crudos leídos:        ${totalCrudos}`);
  console.log(`Descartados (no HLS):         ${descartadosNoHls}`);
  console.log(`Canales únicos guardados:     ${urlsVistas.size}`);
  console.log('────────────────────────────────────────');
}

procesar();
