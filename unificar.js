const fs = require('fs');
const https = require('https');

// Lista de URLs de los países y temáticas que indicaste
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

function descargar(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let datos = '';
      res.on('data', (chunk) => datos += chunk);
      res.on('end', () => resolve(datos));
    }).on('error', () => resolve(''));
  });
}

async function procesar() {
  let salidaM3U = '#EXTM3U\n';
  const urlsVistas = new Set();
  let contador = 0;

  for (const urlFuente of fuentesUrls) {
    const contenido = await descargar(urlFuente);
    if (!contenido) continue;

    const lineas = contenido.split(/\r?\n/);
    let extinfActual = '';

    for (let i = 0; i < lineas.length; i++) {
      const linea = lineas[i].trim();
      if (linea.startsWith('#EXTINF')) {
        extinfActual = linea;
      } else if (linea && !linea.startsWith('#')) {
        const streamUrl = linea;
        if (!urlsVistas.has(streamUrl)) {
          urlsVistas.add(streamUrl);
          if (extinfActual) {
            salidaM3U += `${extinfActual}\n${streamUrl}\n`;
          } else {
            salidaM3U += `#EXTINF:-1,Canal ${++contador}\n${streamUrl}\n`;
          }
        }
        extinfActual = '';
      }
    }
  }

  fs.writeFileSync('canales.m3u8', salidaM3U, 'utf-8');
  console.log(`¡Actualización completa! Se unificaron ${urlsVistas.size} canales únicos en canales.m3u8.`);
}

procesar();
