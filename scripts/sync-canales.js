/**
 * Sincronización de canales — Guía de Canales
 * Extrae el país del tvg-id (`.us`, `.ar`, etc.) o lo infiere del nombre/grupo/URL.
 * Uso: node scripts/sync-canales.js
 */
const fs = require('fs');

// ============================================================
// CONFIGURACIÓN
// ============================================================

const FUENTES_IPTV_ORG = ['https://iptv-org.github.io/iptv/index.m3u'];

const FUENTES_DOMS9 = [
  'https://raw.githubusercontent.com/doms9/iptv/default/M3U8/events.m3u8',
  'https://raw.githubusercontent.com/doms9/iptv/default/M3U8/TV.m3u8',
  'https://raw.githubusercontent.com/doms9/iptv/default/M3U8/base.m3u8',
  'https://raw.githubusercontent.com/doms9/iptv/default/M3U8/kodi.m3u8',
];

// Mapa de nombres de países → código ISO (para inferir del nombre o grupo)
const NOMBRES_PAISES = {
  'argentina': 'AR', 'argentino': 'AR',
  'mexico': 'MX', 'mexican': 'MX', 'méxico': 'MX',
  'españa': 'ES', 'espana': 'ES', 'spain': 'ES', 'spanish': 'ES',
  'estados unidos': 'US', 'usa': 'US', 'united states': 'US', 'american': 'US',
  'colombia': 'CO', 'colombian': 'CO',
  'chile': 'CL', 'chilean': 'CL',
  'peru': 'PE', 'perú': 'PE', 'peruvian': 'PE',
  'uruguay': 'UY', 'uruguayan': 'UY',
  'brasil': 'BR', 'brazil': 'BR', 'brazilian': 'BR',
  'paraguay': 'PY', 'bolivia': 'BO', 'ecuador': 'EC', 'venezuela': 'VE',
  'costa rica': 'CR', 'panama': 'PA', 'panamá': 'PA',
  'rep dominicana': 'DO', 'dominican': 'DO',
  'cuba': 'CU', 'cuban': 'CU',
  'puerto rico': 'PR',
  'guatemala': 'GT', 'honduras': 'HN', 'el salvador': 'SV', 'nicaragua': 'NI',
  'reino unido': 'GB', 'united kingdom': 'GB', 'british': 'GB', 'uk': 'GB',
  'francia': 'FR', 'france': 'FR', 'french': 'FR',
  'alemania': 'DE', 'germany': 'DE', 'german': 'DE',
  'italia': 'IT', 'italy': 'IT', 'italian': 'IT',
  'portugal': 'PT', 'portuguese': 'PT',
  'holanda': 'NL', 'netherlands': 'NL', 'dutch': 'NL',
  'belgica': 'BE', 'belgium': 'BE', 'belgian': 'BE',
  'suiza': 'CH', 'switzerland': 'CH', 'swiss': 'CH',
  'austria': 'AT', 'austrian': 'AT',
  'suecia': 'SE', 'sweden': 'SE', 'swedish': 'SE',
  'noruega': 'NO', 'norway': 'NO', 'norwegian': 'NO',
  'dinamarca': 'DK', 'denmark': 'DK', 'danish': 'DK',
  'finlandia': 'FI', 'finland': 'FI', 'finnish': 'FI',
  'irlanda': 'IE', 'ireland': 'IE', 'irish': 'IE',
  'polonia': 'PL', 'poland': 'PL', 'polish': 'PL',
  'rusia': 'RU', 'russia': 'RU', 'russian': 'RU',
  'ucrania': 'UA', 'ukraine': 'UA', 'ukrainian': 'UA',
  'turquia': 'TR', 'turkey': 'TR', 'turkish': 'TR',
  'grecia': 'GR', 'greece': 'GR', 'greek': 'GR',
  'india': 'IN', 'indian': 'IN',
  'china': 'CN', 'chinese': 'CN',
  'japon': 'JP', 'japan': 'JP', 'japanese': 'JP',
  'corea': 'KR', 'korea': 'KR', 'korean': 'KR',
  'australia': 'AU', 'australian': 'AU',
  'nueva zelanda': 'NZ', 'new zealand': 'NZ',
  'sudafrica': 'ZA', 'south africa': 'ZA',
  'egipto': 'EG', 'egypt': 'EG', 'egyptian': 'EG',
  'marruecos': 'MA', 'morocco': 'MA', 'moroccan': 'MA',
  'argelia': 'DZ', 'algeria': 'DZ',
  'nigeria': 'NG', 'nigerian': 'NG',
  'israel': 'IL', 'israeli': 'IL',
  'arabia saudita': 'SA', 'saudi': 'SA',
  'emiratos': 'AE', 'uae': 'AE',
  'iran': 'IR', 'irán': 'IR', 'iranian': 'IR',
  'irak': 'IQ', 'iraq': 'IQ', 'iraqi': 'IQ',
  'pakistan': 'PK', 'pakistani': 'PK',
  'bangladesh': 'BD', 'bangla': 'BD',
  'indonesia': 'ID', 'indonesian': 'ID',
  'filipinas': 'PH', 'philippines': 'PH', 'filipino': 'PH',
  'tailandia': 'TH', 'thailand': 'TH', 'thai': 'TH',
  'vietnam': 'VN', 'vietnamese': 'VN',
  'malasia': 'MY', 'malaysia': 'MY',
  'singapur': 'SG', 'singapore': 'SG',
  'albania': 'AL', 'albanian': 'AL',
  'croacia': 'HR', 'croatia': 'HR', 'croatian': 'HR',
  'serbia': 'RS', 'serbian': 'RS',
  'bulgaria': 'BG', 'bulgarian': 'BG',
  'rumania': 'RO', 'romania': 'RO', 'romanian': 'RO',
  'hungria': 'HU', 'hungary': 'HU', 'hungarian': 'HU',
  'chequia': 'CZ', 'czech': 'CZ',
  'eslovaquia': 'SK', 'slovakia': 'SK', 'slovak': 'SK',
  'eslovenia': 'SI', 'slovenia': 'SI',
  'georgia': 'GE', 'georgian': 'GE',
  'armenia': 'AM', 'armenian': 'AM',
  'azerbaiyan': 'AZ', 'azerbaijan': 'AZ',
  'kazajistan': 'KZ', 'kazakhstan': 'KZ',
  'kurdistan': 'IQ', 'kurdish': 'IQ',
  'libano': 'LB', 'lebanon': 'LB', 'lebanese': 'LB',
  'siria': 'SY', 'syria': 'SY', 'syrian': 'SY',
  'jordania': 'JO', 'jordan': 'JO',
  'tunez': 'TN', 'tunisia': 'TN',
  'camerun': 'CM', 'cameroon': 'CM',
  'ghana': 'GH', 'kenia': 'KE', 'kenya': 'KE',
  'etiopia': 'ET', 'ethiopia': 'ET',
  'taiwan': 'TW', 'taiwanese': 'TW',
  'hong kong': 'HK',
  'mongolia': 'MN', 'mongolian': 'MN',
};

// Códigos de 2 letras válidos (ISO 3166-1 alpha-2)
const CODIGOS_VALIDOS = new Set([
  'ad','ae','af','ag','ai','al','am','ao','ar','at','au','aw','az',
  'ba','bb','bd','be','bf','bg','bh','bi','bj','bm','bn','bo','br','bs','bt','bw','by','bz',
  'ca','cd','cf','cg','ch','ci','cl','cm','cn','co','cr','cu','cv','cw','cy','cz',
  'de','dj','dk','dm','do','dz','ec','ee','eg','er','es','et','fi','fj','fm','fo','fr',
  'ga','gb','gd','ge','gh','gi','gl','gm','gn','gp','gq','gr','gt','gu','gw','gy',
  'hk','hn','hr','ht','hu','id','ie','il','in','iq','ir','is','it','jm','jo','jp',
  'ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz','la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly',
  'ma','mc','md','me','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz',
  'na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz','om',
  'pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py','qa','re','ro','rs','ru','rw',
  'sa','sb','sc','sd','se','sg','sh','si','sk','sl','sm','sn','so','sr','ss','st','sv','sx','sy','sz',
  'tc','td','tg','th','tj','tk','tl','tm','tn','to','tr','tt','tv','tw','tz',
  'ua','ug','us','uy','uz','va','vc','ve','vg','vi','vn','vu','wf','ws','ye','yt','za','zm','zw',
]);

// ============================================================
// INFERENCIA DE PAÍS
// ============================================================

function inferirPais(tvgId, groupTitle, nombre, url) {
  // 1) Del tvg-id: buscar ".xx" donde xx es un código ISO válido
  //    Formatos: "00sReplay.us@SD", "A.and.E.HD.East.us2", "2M.ma@SD"
  if (tvgId) {
    // Buscar el ÚLTIMO ".xx" antes de @ o dígito o fin
    const matches = tvgId.match(/\.([a-z]{2})(?:\d|@|$)/g);
    if (matches) {
      for (let i = matches.length - 1; i >= 0; i--) {
        const m = matches[i].match(/\.([a-z]{2})/);
        if (m && CODIGOS_VALIDOS.has(m[1])) {
          return m[1].toUpperCase();
        }
      }
    }
    // Fallback: cualquier ".xx" que sea código válido
    const matches2 = tvgId.match(/\.([a-z]{2})/g);
    if (matches2) {
      for (const match of matches2) {
        const codigo = match.replace('.', '').toLowerCase();
        if (CODIGOS_VALIDOS.has(codigo)) {
          return codigo.toUpperCase();
        }
      }
    }
  }

  // 2) Del group-title: si es un nombre de país
  if (groupTitle) {
    const g = groupTitle.toLowerCase().trim();
    if (NOMBRES_PAISES[g]) return NOMBRES_PAISES[g];
    // Buscar substring
    for (const [nombrePais, codigo] of Object.entries(NOMBRES_PAISES)) {
      if (g.includes(nombrePais)) return codigo;
    }
  }

  // 3) Del nombre del canal
  if (nombre) {
    const n = nombre.toLowerCase();
    for (const [nombrePais, codigo] of Object.entries(NOMBRES_PAISES)) {
      // Buscar palabra completa para evitar falsos positivos (ej. "guinea" en "guinea ecuatorial")
      const regex = new RegExp('\\b' + nombrePais.replace(/\s+/g, '\\s+') + '\\b', 'i');
      if (regex.test(n)) return codigo;
    }
  }

  // 4) De la URL
  if (url) {
    const u = url.toLowerCase();
    for (const [nombrePais, codigo] of Object.entries(NOMBRES_PAISES)) {
      if (u.includes('/' + nombrePais.replace(/\s+/g, '') + '/')) return codigo;
    }
  }

  return '';
}

// ============================================================
// PARSER M3U
// ============================================================

function parseM3U(m3uContent, fuente) {
  const lineas = m3uContent.split(/\r?\n/);
  const canales = [];
  let canalActual = null;
  let headersPendientes = [];

  for (const linea of lineas) {
    const l = linea.trim();
    if (!l) continue;

    if (l.startsWith('#EXTINF:')) {
      const tvgLogo = (l.match(/tvg-logo="([^"]*)"/) || [])[1] || '';
      const groupTitle = (l.match(/group-title="([^"]*)"/) || [])[1] || '';
      const tvgId = (l.match(/tvg-id="([^"]*)"/) || [])[1] || '';
      const tvgCountry = (l.match(/tvg-country="([^"]*)"/) || [])[1] || '';

      // Capturar headers inline del #EXTINF (algunos canales los tienen acá)
      const uaInline = (l.match(/http-user-agent="([^"]*)"/) || [])[1] || '';
      const refererInline = (l.match(/http-referrer="([^"]*)"/) || [])[1] || '';

      // Extraer el nombre: todo lo que está DESPUÉS de la última coma
      // que NO esté dentro de comillas. Usamos un parser manual.
      let nombre = '';
      let enComillas = false;
      let ultimaComaFuera = -1;
      for (let k = 0; k < l.length; k++) {
        const c = l[k];
        if (c === '"') enComillas = !enComillas;
        else if (c === ',' && !enComillas) ultimaComaFuera = k;
      }
      if (ultimaComaFuera !== -1) {
        nombre = l.slice(ultimaComaFuera + 1).trim();
      } else {
        // Fallback: usar el split por coma (comportamiento viejo)
        nombre = l.split(',').slice(1).join(',').trim();
      }

      // Limpiar nombre de posibles headers pegados (por si acaso)
      if (nombre.includes('group-title=')) {
        const partes = nombre.split('group-title="');
        if (partes.length > 1) {
          const resto = partes[1];
          const cierre = resto.indexOf('",');
          if (cierre !== -1) {
            nombre = resto.slice(cierre + 2).trim();
          }
        }
      }
      if (nombre.includes('"') && nombre.startsWith('"')) {
        nombre = nombre.replace(/^"+|"+$/g, '').trim();
      }

      canalActual = {
        name: nombre,
        logo: tvgLogo,
        group: groupTitle,
        tvgId: tvgId,
        tvgCountryExplicito: tvgCountry.toUpperCase().slice(0, 2),
        url: '',
        headers: {},
        fuente: fuente,
      };
      headersPendientes = [];

      // Agregar headers inline si existen
      if (uaInline) headersPendientes.push({ key: 'http-user-agent', value: uaInline });
      if (refererInline) headersPendientes.push({ key: 'http-referrer', value: refererInline });
    } else if (l.startsWith('#EXTVLCOPT:')) {
      const match = l.match(/#EXTVLCOPT:(http-[^=]+)=(.+)/);
      if (match) headersPendientes.push({ key: match[1], value: match[2] });
    } else if (l.startsWith('#')) {
      continue;
    } else if (canalActual && (l.startsWith('http://') || l.startsWith('https://'))) {
      let urlLimpia = l;
      let headersEmbebidos = {};

      if (l.includes('|')) {
        const partes = l.split('|');
        urlLimpia = partes[0];
        if (partes[1]) {
          partes[1].split('&').forEach(p => {
            const idx = p.indexOf('=');
            if (idx > 0) {
              const k = p.slice(0, idx).toLowerCase();
              const v = p.slice(idx + 1);
              try { headersEmbebidos[k] = decodeURIComponent(v); }
              catch { headersEmbebidos[k] = v; }
            }
          });
        }
      }

      canalActual.url = urlLimpia;

      headersPendientes.forEach(h => {
        const keyNorm = h.key.replace('http-referrer', 'referer').replace('http-user-agent', 'user-agent');
        canalActual.headers[keyNorm] = h.value;
      });
      Object.assign(canalActual.headers, headersEmbebidos);

      canales.push(canalActual);
      canalActual = null;
      headersPendientes = [];
    }
  }

  return canales;
}

// ============================================================
// NORMALIZAR GRUPOS
// ============================================================

const MAPEO_GRUPOS = {
  'Deportes': ['Sports', 'Deportes', 'Sport', 'ESPN', 'Fox Sports', 'Bein Sports'],
  'Noticias': ['News', 'Noticias', 'Noticieros', 'Information'],
  'Películas': ['Movies', 'Películas', 'Peliculas', 'Cinema', 'Filmes', 'Movie'],
  'Series': ['Series', 'TV Shows', 'Novelas'],
  'Música': ['Music', 'Música', 'Musica', 'Concerts'],
  'Infantil': ['Kids', 'Infantil', 'Children', 'Cartoon'],
  'Documentales': ['Documentary', 'Documentales'],
  'Entretenimiento': ['Entertainment', 'Entretenimiento', 'General'],
  'Religión': ['Religious', 'Religión', 'Religion'],
  'Cocina': ['Cooking', 'Food', 'Cocina'],
  'Viajes': ['Travel', 'Viajes'],
  'Compras': ['Shopping', 'Compras'],
  'Auto': ['Auto', 'Cars', 'Motor'],
  'Cultura': ['Culture', 'Cultura'],
  'Ciencia': ['Science', 'Ciencia'],
  'Clima': ['Weather', 'Clima'],
  'Legislativo': ['Legislative', 'Legislativo'],
  'Educación': ['Education', 'Educación', 'Educativo'],
  'Animación': ['Animation', 'Anime', 'Animación'],
  'Comedia': ['Comedy', 'Comedia'],
};

function normalizarGrupo(grupo) {
  const g = (grupo || '').trim();
  for (const [categoria, alias] of Object.entries(MAPEO_GRUPOS)) {
    if (alias.some(a => g.toLowerCase() === a.toLowerCase())) return categoria;
  }
  // Si el grupo es un país, mantenerlo como país
  if (NOMBRES_PAISES[g.toLowerCase()]) return 'País: ' + NOMBRES_PAISES[g.toLowerCase()];
  return g || 'General';
}

// ============================================================
// DESCARGA
// ============================================================

async function descargar(url) {
  try {
    const resp = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; IPTVSync/2.0)' },
    });
    if (!resp.ok) { console.warn(`  ✗ ${url} → HTTP ${resp.status}`); return ''; }
    return await resp.text();
  } catch (e) {
    console.warn(`  ✗ ${url} → ${e.message}`);
    return '';
  }
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  console.log('🔄 Iniciando sincronización...\n');
  let todosLosCanales = [];

  console.log('📡 iptv-org...');
  for (const url of FUENTES_IPTV_ORG) {
    const contenido = await descargar(url);
    if (contenido) {
      const canales = parseM3U(contenido, 'iptv-org');
      console.log(`  ✓ ${canales.length} canales`);
      todosLosCanales.push(...canales);
    }
  }

  console.log('\n📡 doms9...');
  for (const url of FUENTES_DOMS9) {
    const contenido = await descargar(url);
    if (contenido) {
      const nombreFuente = url.split('/').pop().replace('.m3u8', '');
      const canales = parseM3U(contenido, `doms9/${nombreFuente}`);
      console.log(`  ✓ ${nombreFuente}: ${canales.length} canales`);
      todosLosCanales.push(...canales);
    }
  }

  console.log(`\n📊 Total bruto: ${todosLosCanales.length} canales`);

  console.log('\n🧹 Limpiando y normalizando...');

  const limpios = todosLosCanales
    .filter(c => {
      if (!c.url || !c.url.startsWith('http')) return false;
      if (!c.name || c.name.length < 2) return false;
      if (c.url.includes('youtube.com') || c.url.includes('youtu.be')) return false;
      if (c.url.includes('/test/') || c.url.includes('sample')) return false;
      return true;
    })
    .map(c => {
      // Prioridad del país:
      // 1. Si el #EXTINF trae tvg-country explícito, usarlo.
      // 2. Si no, inferirlo del tvg-id, group-title, nombre o URL.
      const paisFinal = c.tvgCountryExplicito || inferirPais(c.tvgId, c.group, c.name, c.url);

      // Sanitizar nombre: eliminar headers pegados por error y caracteres raros
      let nombreLimpio = (c.name || '').trim();
      // Eliminar bloques tipo 'http-user-agent="..."' o 'group-title="..."' pegados
      nombreLimpio = nombreLimpio.replace(/\s*http-user-agent="[^"]*"/gi, '');
      nombreLimpio = nombreLimpio.replace(/\s*http-referrer="[^"]*"/gi, '');
      nombreLimpio = nombreLimpio.replace(/\s*group-title="[^"]*"/gi, '');
      nombreLimpio = nombreLimpio.replace(/\s*tvg-logo="[^"]*"/gi, '');
      nombreLimpio = nombreLimpio.replace(/\s*tvg-id="[^"]*"/gi, '');
      nombreLimpio = nombreLimpio.replace(/\s*tvg-country="[^"]*"/gi, '');
      // Eliminar prefijos tipo "like Gecko) Chrome/XXX Safari/XXX"
      nombreLimpio = nombreLimpio.replace(/^like Gecko\)[^,]*,\s*/i, '');
      nombreLimpio = nombreLimpio.replace(/^[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]+/, '');
      // Colapsar espacios múltiples
      nombreLimpio = nombreLimpio.replace(/\s+/g, ' ').trim();
      // Si quedó vacío o muy corto, descartar
      if (nombreLimpio.length < 2) return null;

      const canalLimpio = {
        name: nombreLimpio.slice(0, 200),
        logo: (c.logo || '').trim(),
        group: normalizarGrupo(c.group),
        url: c.url.trim(),
        pais: paisFinal,
        tvgId: c.tvgId || '',
      };
      if (Object.keys(c.headers).length > 0) canalLimpio.headers = c.headers;
      return canalLimpio;
    });

  console.log(`  Después de limpieza: ${limpios.length}`);

  const urlsVistas = new Set();
  const deduplicados = limpios.filter(c => {
    if (urlsVistas.has(c.url)) return false;
    urlsVistas.add(c.url);
    return true;
  });

  console.log(`  Después de deduplicar: ${deduplicados.length}`);

  const conPais = deduplicados.filter(c => c.pais && c.pais.length === 2);
  console.log(`\n🌎 Canales con país: ${conPais.length} (${((conPais.length/deduplicados.length)*100).toFixed(1)}%)`);

  fs.writeFileSync('./canales.json', JSON.stringify(deduplicados, null, 2));

  let m3u = '#EXTM3U\n';
  for (const c of deduplicados) {
    const attrs = [`tvg-logo="${c.logo}"`, `group-title="${c.group}"`];
    if (c.pais) attrs.push(`tvg-country="${c.pais}"`);
    if (c.tvgId) attrs.push(`tvg-id="${c.tvgId}"`);
    m3u += `#EXTINF:-1 ${attrs.join(' ')},${c.name}\n`;
    if (c.headers) {
      if (c.headers['referer']) m3u += `#EXTVLCOPT:http-referrer=${c.headers['referer']}\n`;
      if (c.headers['user-agent']) m3u += `#EXTVLCOPT:http-user-agent=${c.headers['user-agent']}\n`;
    }
    m3u += `${c.url}\n`;
  }
  fs.writeFileSync('./canales.m3u8', m3u);

  console.log(`\n✅ Guardado canales.json (${deduplicados.length} canales)`);
  console.log(`✅ Guardado canales.m3u8 (${deduplicados.length} canales)`);

  const porPais = {};
  conPais.forEach(c => { porPais[c.pais] = (porPais[c.pais] || 0) + 1; });
  console.log('\n📈 Top 15 países:');
  Object.entries(porPais)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .forEach(([p, n]) => console.log(`  ${n.toString().padStart(5)}  ${p}`));
}

main().catch(console.error);
