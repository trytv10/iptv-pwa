'use strict';

/* =======================================================
   Idiomas (i18n)
   ======================================================= */

const IDIOMAS = {
  es: {
    marca: 'Guia de Canales',
    buscar_placeholder: 'Buscar canal...',
    cargar_lista: 'Cargar lista',
    restaurar_oficial: 'Usar lista oficial',
    continuar_viendo: 'Continuar viendo',
    reanudar: 'Reanudar',
    por_categoria: 'Categoria',
    por_pais: 'Pais',
    favoritos: 'Favoritos',
    destacados: 'Deportes/Eventos',
    todos: 'Todos',
    sin_pais: 'Sin pais',
    volver_guia: '\u2190 Volver a la guia',
    volver_guia_corto: '\u2190 Guia',
    cargar_titulo: 'Cargar lista de canales',
    cargar_subtitulo: 'Suma tu listado por URL remota, subiendo un archivo .m3u/.m3u8/.json, o pegando el texto directamente. Se guarda en este dispositivo y se puede actualizar cuando quieras.',
    tab_url: 'URL remota',
    tab_archivo: 'Archivo',
    tab_texto: 'Pegar texto',
    etiqueta_url: 'URL del listado (.m3u, .m3u8 o .json)',
    etiqueta_archivo: 'Archivo del listado',
    archivo_arrastrar: 'Arrastra un archivo o',
    archivo_elegir: 'elegilo manualmente',
    etiqueta_texto: 'Contenido M3U o JSON',
    borrar_lista: 'Restaurar lista predeterminada',
    config_info: 'Formato M3U esperado por linea: <code>#EXTINF:-1 tvg-logo="URL_LOGO" tvg-country="AR" group-title="Categoria",Nombre del canal</code> seguido de la URL del stream .m3u8 en la linea siguiente.',
    subtitulos: 'Subtitulos',
    calidad: 'Calidad',
    miniatura: 'Miniatura',
    error_titulo: 'No se pudo reproducir esta senal',
    error_texto: 'Revisa la URL del canal o proba con otro. Podes volver a la guia y elegir otro canal.',
    guia_vacia_titulo: 'Todavia no hay canales cargados',
    guia_vacia_texto: 'Carga tu listado (.m3u, .m3u8 o .json) para empezar a ver la guia.',
    sin_resultados_titulo: 'Sin resultados',
    sin_resultados_texto: 'Proba con otra busqueda o categoria.',
    conectando: 'Conectando...',
    en_vivo: 'EN VIVO',
    subtitulos_off: 'Desactivados',
    calidad_auto: 'Automatica',
    ingresa_url: 'Ingresa una URL valida.',
    elegi_archivo: 'Elegi un archivo primero.',
    pega_contenido: 'Pega el contenido M3U o JSON.',
    sin_canales_validos: 'No se encontraron canales validos en ese contenido.',
    lista_borrada: 'Se restauro la lista oficial predeterminada.',
    cargando: 'Cargando...',
    a_continuacion: 'A continuacion',
    voz_escuchando: 'Escuchando...',
  },
  en: {
    marca: 'Channel Guide',
    buscar_placeholder: 'Search channel...',
    cargar_lista: 'Load list',
    restaurar_oficial: 'Use official list',
    continuar_viendo: 'Continue watching',
    reanudar: 'Resume',
    por_categoria: 'Category',
    por_pais: 'Country',
    favoritos: 'Favorites',
    destacados: 'Sports/Events',
    todos: 'All',
    sin_pais: 'No country',
    volver_guia: '\u2190 Back to guide',
    volver_guia_corto: '\u2190 Guide',
    cargar_titulo: 'Load channel list',
    cargar_subtitulo: 'Add your list via remote URL, uploading a .m3u/.m3u8/.json file, or pasting the text directly.',
    tab_url: 'Remote URL',
    tab_archivo: 'File',
    tab_texto: 'Paste text',
    etiqueta_url: 'List URL (.m3u, .m3u8 or .json)',
    etiqueta_archivo: 'List file',
    archivo_arrastrar: 'Drag a file or',
    archivo_elegir: 'choose it manually',
    etiqueta_texto: 'M3U or JSON content',
    borrar_lista: 'Restore default list',
    config_info: 'Expected M3U format per line: <code>#EXTINF:-1 tvg-logo="LOGO_URL" tvg-country="AR" group-title="Category",Channel name</code> followed by the .m3u8 stream URL.',
    subtitulos: 'Subtitles',
    calidad: 'Quality',
    miniatura: 'PiP',
    error_titulo: 'This channel could not be played',
    error_texto: 'Check the channel URL or try another one.',
    guia_vacia_titulo: 'No channels loaded yet',
    guia_vacia_texto: 'Load your list (.m3u, .m3u8 or .json) to start browsing the guide.',
    sin_resultados_titulo: 'No results',
    sin_resultados_texto: 'Try a different search or category.',
    conectando: 'Connecting...',
    en_vivo: 'LIVE',
    subtitulos_off: 'Off',
    calidad_auto: 'Auto',
    ingresa_url: 'Enter a valid URL.',
    elegi_archivo: 'Choose a file first.',
    pega_contenido: 'Paste the M3U or JSON content.',
    sin_canales_validos: 'No valid channels were found.',
    lista_borrada: 'Restored to default official list.',
    cargando: 'Loading...',
    a_continuacion: 'Up next',
    voz_escuchando: 'Listening...',
  },
};

function t(clave) {
  const dic = IDIOMAS[estado.idioma] || IDIOMAS.es;
  return dic[clave] || IDIOMAS.es[clave] || clave;
}

function aplicarIdioma() {
  document.documentElement.lang = estado.idioma;
  document.querySelectorAll('[data-i18n]').forEach((elemento) => {
    elemento.innerHTML = t(elemento.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((elemento) => {
    elemento.placeholder = t(elemento.dataset.i18nPlaceholder);
  });
  document.getElementById('boton-idioma').textContent = estado.idioma.toUpperCase();
  renderFiltros();
  renderGuia();
  actualizarBannerContinuar();
}

/* =======================================================
   Paises: banderas y nombres
   ======================================================= */

const NOMBRES_PAIS = {
  AR: { es: 'Argentina', en: 'Argentina' }, MX: { es: 'Mexico', en: 'Mexico' },
  ES: { es: 'Espana', en: 'Spain' }, US: { es: 'Estados Unidos', en: 'United States' },
  CO: { es: 'Colombia', en: 'Colombia' }, CL: { es: 'Chile', en: 'Chile' },
  PE: { es: 'Peru', en: 'Peru' }, UY: { es: 'Uruguay', en: 'Uruguay' },
  BR: { es: 'Brasil', en: 'Brazil' }, PY: { es: 'Paraguay', en: 'Paraguay' },
  BO: { es: 'Bolivia', en: 'Bolivia' }, EC: { es: 'Ecuador', en: 'Ecuador' },
  VE: { es: 'Venezuela', en: 'Venezuela' }, CR: { es: 'Costa Rica', en: 'Costa Rica' },
  PA: { es: 'Panama', en: 'Panama' }, DO: { es: 'Rep. Dominicana', en: 'Dominican Rep.' },
  GB: { es: 'Reino Unido', en: 'United Kingdom' }, FR: { es: 'Francia', en: 'France' },
  DE: { es: 'Alemania', en: 'Germany' }, IT: { es: 'Italia', en: 'Italy' },
  PT: { es: 'Portugal', en: 'Portugal' },
};

function bandera(codigoPais) {
  if (!codigoPais || codigoPais.length !== 2) return '';
  const base = 127397;
  return String.fromCodePoint(...[...codigoPais.toUpperCase()].map((c) => c.charCodeAt(0) + base));
}

function nombrePais(codigoPais) {
  if (!codigoPais) return t('sin_pais');
  const entrada = NOMBRES_PAIS[codigoPais.toUpperCase()];
  return entrada ? entrada[estado.idioma] || entrada.es : codigoPais.toUpperCase();
}

/* =======================================================
   Estado y almacenamiento
   ======================================================= */

const CLAVE_LISTA = 'iptv:lista-canales';
const CLAVE_ORIGEN = 'iptv:origen-lista';
const CLAVE_FAVORITOS = 'iptv:favoritos';
const CLAVE_ULTIMO = 'iptv:ultimo-canal';
const CLAVE_IDIOMA = 'iptv:idioma';
const CLAVE_AGRUPACION = 'iptv:agrupacion';

const URL_LISTA_PREDETERMINADA = './canales.m3u8';
const URL_FUENTES = './fuentes.json';
const URL_PROXY = '';

const estado = {
  canales: [],
  filtro: 'Todos',
  agrupacion: localStorage.getItem(CLAVE_AGRUPACION) || 'categoria',
  soloFavoritos: false,
  soloDestacados: false,
  busqueda: '',
  indiceActual: -1,
  hls: null,
  idioma: localStorage.getItem(CLAVE_IDIOMA) || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es'),
  programacion: {},
};

function cargarListaGuardada() {
  try {
    const crudo = localStorage.getItem(CLAVE_LISTA);
    return crudo ? JSON.parse(crudo) : [];
  } catch (e) {
    console.error('No se pudo leer la lista guardada', e);
    return [];
  }
}

function guardarLista(canales, origen) {
  localStorage.setItem(CLAVE_LISTA, JSON.stringify(canales));
  if (origen) localStorage.setItem(CLAVE_ORIGEN, origen);
}

function cargarFavoritos() {
  try {
    const crudo = localStorage.getItem(CLAVE_FAVORITOS);
    return new Set(crudo ? JSON.parse(crudo) : []);
  } catch {
    return new Set();
  }
}

function guardarFavoritos() {
  localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify([...estado.favoritos]));
}

function esFavorito(id) {
  return estado.favoritos.has(id);
}

function alternarFavorito(id) {
  if (estado.favoritos.has(id)) estado.favoritos.delete(id);
  else estado.favoritos.add(id);
  guardarFavoritos();
}

estado.favoritos = cargarFavoritos();

function guardarUltimoVisto(id) {
  localStorage.setItem(CLAVE_ULTIMO, id);
}

function leerUltimoVisto() {
  return localStorage.getItem(CLAVE_ULTIMO);
}

/* =======================================================
   Parsers: M3U/M3U8 y JSON
   ======================================================= */

function esFuenteM3U(entrada) {
  const ref = ((entrada.tipo || '') + ' ' + (entrada.url || '')).toLowerCase();
  return ref.includes('m3u');
}

async function obtenerListaCombinadaDesdeFuentes() {
  let fuentes = [];
  try {
    const resp = await fetch(URL_FUENTES, { cache: 'no-store' });
    if (resp.ok) {
      const datos = await resp.json();
      fuentes = Array.isArray(datos) ? datos : (datos.fuentes || []);
    }
  } catch (e) {
    console.warn('No se encontro fuentes.json o no se pudo leer.', e);
  }

  if (fuentes.length === 0) {
    try {
      const resp = await fetch(URL_LISTA_PREDETERMINADA, { cache: 'no-store' });
      if (resp.ok) {
        const texto = await resp.text();
        return normalizarCanales(parsearContenido(texto));
      }
    } catch (e) {
      console.warn('No se encontro listado central (canales.m3u8) o no se pudo leer.', e);
    }
    return [];
  }

  const entradas = fuentes.map((f) => (typeof f === 'string' ? { url: f } : f));

  const ordenadas = [
    ...entradas.filter(esFuenteM3U),
    ...entradas.filter((e) => !esFuenteM3U(e)),
  ];

  const combinados = [];
  const urlsVistas = new Set();

  for (const entrada of ordenadas) {
    if (!entrada.url) continue;
    try {
      const resp = await fetch(entrada.url, { cache: 'no-store' });
      if (!resp.ok) continue;
      const texto = await resp.text();
      const crudos = parsearContenido(texto);
      for (const c of crudos) {
        if (!c.url || urlsVistas.has(c.url)) continue;
        urlsVistas.add(c.url);
        combinados.push(c);
      }
    } catch (e) {
      console.warn('No se pudo cargar la fuente', entrada.url, e);
    }
  }

  return normalizarCanales(combinados);
}

function extraerAtributo(linea, clave) {
  const m = linea.match(new RegExp(clave + '="([^"]*)"'));
  return m ? m[1] : '';
}

function parsearM3U(texto) {
  const lineas = texto.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const canales = [];
  let pendiente = null;

  for (const linea of lineas) {
    if (linea.startsWith('#EXTM3U')) continue;

    if (linea.startsWith('#EXTINF')) {
      const nombre = linea.split(',').pop().trim();
      pendiente = {
        nombre: nombre || 'Sin nombre',
        logo: extraerAtributo(linea, 'tvg-logo'),
        grupo: extraerAtributo(linea, 'group-title') || 'General',
        pais: extraerAtributo(linea, 'tvg-country').toUpperCase(),
        tvgId: extraerAtributo(linea, 'tvg-id'),
      };
    } else if (!linea.startsWith('#')) {
      if (pendiente) {
        canales.push({ ...pendiente, url: linea });
        pendiente = null;
      } else {
        canales.push({ nombre: linea, logo: '', grupo: 'General', pais: '', tvgId: '', url: linea });
      }
    }
  }
  return canales;
}

function parsearJSON(texto) {
  const datos = JSON.parse(texto);
  const lista = Array.isArray(datos) ? datos : (datos.canales || []);
  return lista.map((c) => ({
    nombre: c.nombre || c.name || 'Sin nombre',
    url: c.url || c.stream || '',
    logo: c.logo || c.tvg_logo || '',
    grupo: c.grupo || c.group || 'General',
    pais: (c.pais || c.country || '').toUpperCase(),
    tvgId: c.tvgId || c.tvg_id || c['tvg-id'] || '',
  })).filter((c) => c.url);
}

function parsearContenido(texto) {
  const limpio = texto.trim();
  if (limpio.startsWith('#EXTM3U') || limpio.includes('#EXTINF')) {
    return parsearM3U(limpio);
  }
  try {
    return parsearJSON(limpio);
  } catch {
    return parsearM3U(limpio);
  }
}

function normalizarCanales(crudos) {
  return crudos
    .filter((c) => c.url)
    .map((c, i) => ({
      id: 'c' + i,
      numero: String(i + 1).padStart(2, '0'),
      nombre: c.nombre,
      url: c.url,
      logo: c.logo || '',
      grupo: c.grupo || 'General',
      pais: c.pais || '',
      tvgId: c.tvgId || '',
    }));
}

/* =======================================================
   EPG (guia de programacion XMLTV con IndexedDB)
   ======================================================= */

const URL_EPG_FUENTES = './epg.json';
const DB_NAME = 'IPTV_EPG_DB';
const DB_VERSION = 1;
const STORE_NAME = 'epg_cache';
const EPG_CACHE_TTL_MS = 3 * 60 * 60 * 1000;

function abrirDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

function limpiarEntidadesXml(texto) {
  return texto
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function parsearFechaXmltv(cadena) {
  const m = (cadena || '').trim().match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})\s*([+-]\d{4})?$/);
  if (!m) return null;
  const [, anio, mes, dia, hora, min, seg, offset] = m;
  let iso = `${anio}-${mes}-${dia}T${hora}:${min}:${seg}`;
  iso += offset ? `${offset.slice(0, 3)}:${offset.slice(3)}` : 'Z';
  const fecha = new Date(iso);
  return Number.isNaN(fecha.getTime()) ? null : fecha.toISOString();
}

function parsearXMLTV(texto) {
  const porCanal = {};
  const regexPrograma = /<programme\b([^>]*)>([\s\S]*?)<\/programme>/g;
  let coincidencia;

  while ((coincidencia = regexPrograma.exec(texto))) {
    const atributos = coincidencia[1];
    const contenido = coincidencia[2];

    const idCanal = (atributos.match(/\bchannel="([^"]*)"/) || [])[1];
    const inicioStr = (atributos.match(/\bstart="([^"]*)"/) || [])[1];
    const finStr = (atributos.match(/\bstop="([^"]*)"/) || [])[1];
    if (!idCanal || !inicioStr || !finStr) continue;

    const inicio = parsearFechaXmltv(inicioStr);
    const fin = parsearFechaXmltv(finStr);
    if (!inicio || !fin) continue;

    const tituloMatch = contenido.match(/<title\b[^>]*>([\s\S]*?)<\/title>/);
    const descMatch = contenido.match(/<desc\b[^>]*>([\s\S]*?)<\/desc>/);

    if (!porCanal[idCanal]) porCanal[idCanal] = [];
    porCanal[idCanal].push({
      inicio,
      fin,
      titulo: limpiarEntidadesXml((tituloMatch && tituloMatch[1] || '').trim()) || 'Sin titulo',
      descripcion: limpiarEntidadesXml((descMatch && descMatch[1] || '').trim()),
    });
  }

  Object.values(porCanal).forEach((lista) => lista.sort((a, b) => a.inicio.localeCompare(b.inicio)));
  return porCanal;
}

async function obtenerTextoXMLTV(url) {
  let resp;
  try {
    resp = await fetch(url, { cache: 'no-store' });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
  } catch (e) {
    if (!URL_PROXY) throw e;
    resp = await fetch(URL_PROXY + (URL_PROXY.includes('?') ? '&' : '?') + 'url=' + encodeURIComponent(url), { cache: 'no-store' });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
  }

  if (url.toLowerCase().endsWith('.gz')) {
    if (!window.pako) throw new Error('Falta la libreria de descompresion (pako)');
    const buffer = await resp.arrayBuffer();
    const descomprimido = window.pako.ungzip(new Uint8Array(buffer));
    return new TextDecoder('utf-8').decode(descomprimido);
  }
  return resp.text();
}

async function cargarProgramacionDeCache() {
  try {
    const db = await abrirDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const reqFecha = store.get('fecha');
      const reqDatos = store.get('programacion');

      tx.oncomplete = () => {
        const fecha = reqFecha.result || 0;
        if (!fecha || (Date.now() - fecha) > EPG_CACHE_TTL_MS) {
          resolve(null);
        } else {
          resolve(reqDatos.result || null);
        }
      };
      tx.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

async function guardarProgramacionEnCache(programacion) {
  try {
    const db = await abrirDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(Date.now(), 'fecha');
    store.put(programacion, 'programacion');
  } catch (e) {
    console.warn('No se pudo guardar la cache de EPG en IndexedDB', e);
  }
}

async function cargarProgramacion() {
  const enCache = await cargarProgramacionDeCache();
  if (enCache) return enCache;

  let fuentes = [];
  try {
    const resp = await fetch(URL_EPG_FUENTES, { cache: 'no-store' });
    if (resp.ok) {
      const datos = await resp.json();
      fuentes = Array.isArray(datos) ? datos : (datos.fuentes || []);
    }
  } catch (e) {
    console.warn('No se encontro epg.json o no se pudo leer; la app sigue sin horarios.', e);
  }

  if (fuentes.length === 0) return {};

  const combinado = {};
  for (const url of fuentes) {
    try {
      const texto = await obtenerTextoXMLTV(url);
      Object.assign(combinado, parsearXMLTV(texto));
    } catch (e) {
      console.warn('No se pudo cargar la guia de programacion de', url, e);
    }
  }

  await guardarProgramacionEnCache(combinado);
  return combinado;
}

function programaActual(tvgId) {
  if (!tvgId || !estado.programacion[tvgId]) return null;
  const ahora = Date.now();
  return estado.programacion[tvgId].find((p) => {
    const inicio = new Date(p.inicio).getTime();
    const fin = new Date(p.fin).getTime();
    return inicio <= ahora && ahora < fin;
  }) || null;
}

function programaSiguiente(tvgId) {
  if (!tvgId || !estado.programacion[tvgId]) return null;
  const ahora = Date.now();
  return estado.programacion[tvgId].find((p) => new Date(p.inicio).getTime() > ahora) || null;
}

function formatoHora(iso) {
  try {
    return new Date(iso).toLocaleTimeString(estado.idioma === 'en' ? 'en-US' : 'es-AR', { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

/* =======================================================
   Render: guia de canales
   ======================================================= */

const el = {
  guia: document.getElementById('guia'),
  filtros: document.getElementById('filtros'),
  agrupar: document.getElementById('agrupar'),
  busqueda: document.getElementById('campo-busqueda'),
  pantallaGuia: document.getElementById('pantalla-guia'),
  pantallaConfig: document.getElementById('pantalla-config'),
  continuar: document.getElementById('continuar'),
  continuarNombre: document.getElementById('continuar-nombre'),
  continuarBoton: document.getElementById('continuar-boton'),
};

function hayPaisesEnLista() {
  return estado.canales.some((c) => c.pais);
}

function gruposDisponibles() {
  if (estado.agrupacion === 'pais') {
    const set = new Set(estado.canales.map((c) => c.pais || ''));
    return Array.from(set);
  }
  const set = new Set(estado.canales.map((c) => c.grupo));
  return Array.from(set).sort();
}

function etiquetaGrupo(valor) {
  if (estado.agrupacion === 'pais') {
    return valor ? `${bandera(valor)} ${nombrePais(valor)}` : t('sin_pais');
  }
  return valor;
}

function renderFiltros() {
  el.filtros.innerHTML = '';
  el.agrupar.hidden = !hayPaisesEnLista();

  if (estado.canales.length === 0) return;

  // Filtro Favoritos
  const chipFav = document.createElement('button');
  chipFav.className = 'filtro' + (estado.soloFavoritos ? ' activo' : '');
  chipFav.textContent = '\u2605 ' + t('favoritos');
  chipFav.tabIndex = 0;
  chipFav.addEventListener('click', () => {
    estado.soloFavoritos = !estado.soloFavoritos;
    estado.soloDestacados = false;
    renderFiltros();
    renderGuia();
  });
  el.filtros.appendChild(chipFav);

  // Filtro Deportes / Eventos Destacados
  const chipDestacados = document.createElement('button');
  chipDestacados.className = 'filtro' + (estado.soloDestacados ? ' activo' : '');
  chipDestacados.textContent = '\u26BD ' + t('destacados');
  chipDestacados.tabIndex = 0;
  chipDestacados.addEventListener('click', () => {
    estado.soloDestacados = !estado.soloDestacados;
    estado.soloFavoritos = false;
    renderFiltros();
    renderGuia();
  });
  el.filtros.appendChild(chipDestacados);

  const grupos = gruposDisponibles();
  const chipTodos = document.createElement('button');
  chipTodos.className = 'filtro' + (estado.filtro === 'Todos' && !estado.soloFavoritos && !estado.soloDestacados ? ' activo' : '');
  chipTodos.textContent = t('todos');
  chipTodos.tabIndex = 0;
  chipTodos.addEventListener('click', () => {
    estado.filtro = 'Todos';
    estado.soloFavoritos = false;
    estado.soloDestacados = false;
    renderFiltros();
    renderGuia();
  });
  el.filtros.appendChild(chipTodos);

  for (const g of grupos) {
    const b = document.createElement('button');
    b.className = 'filtro' + (estado.filtro === g && !estado.soloFavoritos && !estado.soloDestacados ? ' activo' : '');
    b.textContent = etiquetaGrupo(g);
    b.tabIndex = 0;
    b.addEventListener('click', () => {
      estado.filtro = g;
      estado.soloFavoritos = false;
      estado.soloDestacados = false;
      renderFiltros();
      renderGuia();
    });
    el.filtros.appendChild(b);
  }
}

document.querySelectorAll('.agrupar__opcion').forEach((boton) => {
  boton.addEventListener('click', () => {
    estado.agrupacion = boton.dataset.agrupar;
    localStorage.setItem(CLAVE_AGRUPACION, estado.agrupacion);
    estado.filtro = 'Todos';
    estado.soloFavoritos = false;
    estado.soloDestacados = false;
    document.querySelectorAll('.agrupar__opcion').forEach((b) => b.classList.toggle('activo', b === boton));
    renderFiltros();
    renderGuia();
  });
});

function esCanalDestacado(c) {
  const g = c.grupo.toLowerCase();
  const n = c.nombre.toLowerCase();
  return g.includes('deportes') || g.includes('sports') || g.includes('eventos') || n.includes('dsports') || n.includes('espn') || n.includes('fox') || n.includes('tyc');
}

function canalesFiltrados() {
  const q = estado.busqueda.trim().toLowerCase();
  return estado.canales.filter((c) => {
    if (estado.soloFavoritos && !esFavorito(c.id)) return false;
    if (estado.soloDestacados && !esCanalDestacado(c)) return false;
    const valorGrupo = estado.agrupacion === 'pais' ? (c.pais || '') : c.grupo;
    const pasaGrupo = estado.filtro === 'Todos' || valorGrupo === estado.filtro || estado.soloFavoritos || estado.soloDestacados;
    const pasaBusqueda = !q || c.nombre.toLowerCase().includes(q);
    return pasaGrupo && pasaBusqueda;
  });
}

function renderGuia() {
  const lista = canalesFiltrados();
  el.guia.innerHTML = '';

  if (estado.canales.length === 0) {
    el.guia.appendChild(vistaVacia(t('guia_vacia_titulo'), t('guia_vacia_texto'), true));
    return;
  }

  if (lista.length === 0) {
    el.guia.appendChild(vistaVacia(t('sin_resultados_titulo'), t('sin_resultados_texto'), false));
    return;
  }

  const frag = document.createDocumentFragment();
  for (const canal of lista) {
    frag.appendChild(filaCanal(canal));
  }
  el.guia.appendChild(frag);
}

function vistaVacia(titulo, texto, mostrarBoton) {
  const div = document.createElement('div');
  div.className = 'guia-vacia';
  div.innerHTML = `
    <div class="guia-vacia__titulo">${titulo}</div>
    <div>${texto}</div>
    ${mostrarBoton ? `<div class="guia-vacia__acciones"><button class="boton-primario" id="boton-vacio-cargar">${t('cargar_lista')}</button></div>` : ''}
  `;
  if (mostrarBoton) {
    div.querySelector('#boton-vacio-cargar').addEventListener('click', irAConfig);
  }
  return div;
}

function filaCanal(canal) {
  const fila = document.createElement('div');
  fila.className = 'fila-canal';
  fila.dataset.id = canal.id;
  fila.setAttribute('role', 'button');
  fila.tabIndex = 0;

  const logoHtml = canal.logo
    ? `<img src="${canal.logo}" alt="" loading="lazy" onerror="this.parentElement.textContent='${canal.nombre.slice(0, 2).toUpperCase()}'">`
    : canal.nombre.slice(0, 2).toUpperCase();

  const banderaHtml = canal.pais ? `<span class="fila-canal__bandera">${bandera(canal.pais)}</span>` : '';

  const enCurso = programaActual(canal.tvgId);
  let programaHtml = '';
  if (enCurso) {
    const inicioMs = new Date(enCurso.inicio).getTime();
    const finMs = new Date(enCurso.fin).getTime();
    const pct = Math.min(100, Math.max(0, ((Date.now() - inicioMs) / (finMs - inicioMs)) * 100));
    programaHtml = `
      <span class="fila-canal__programa">
        <span class="fila-canal__programa-texto">${enCurso.titulo}</span>
        <span class="fila-canal__programa-barra"><span style="width:${pct.toFixed(1)}%"></span></span>
      </span>
    `;
  }

  fila.innerHTML = `
    <span class="fila-canal__numero">${canal.numero}</span>
    <span class="fila-canal__logo">${logoHtml}</span>
    <span class="fila-canal__info">
      <span class="fila-canal__nombre">${canal.nombre}</span>
      <span class="fila-canal__grupo">${banderaHtml}${canal.grupo}</span>
      ${programaHtml}
    </span>
    <button class="fila-canal__favorito ${esFavorito(canal.id) ? 'activo' : ''}" aria-label="Favorito" data-id="${canal.id}" tabIndex="-1">${esFavorito(canal.id) ? '\u2605' : '\u2606'}</button>
    <span class="fila-canal__estado" aria-hidden="true"></span>
  `;

  fila.addEventListener('click', (e) => {
    if (e.target.closest('.fila-canal__favorito')) return;
    reproducirCanalPorId(canal.id);
  });
  fila.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); reproducirCanalPorId(canal.id); }
  });
  fila.querySelector('.fila-canal__favorito').addEventListener('click', (e) => {
    e.stopPropagation();
    alternarFavorito(canal.id);
    renderGuia();
  });

  return fila;
}

/* =======================================================
   Banner: continuar viendo
   ======================================================= */

function actualizarBannerContinuar() {
  const idUltimo = leerUltimoVisto();
  const canal = estado.canales.find((c) => c.id === idUltimo);
  if (!canal) {
    el.continuar.hidden = true;
    return;
  }
  el.continuar.hidden = false;
  el.continuarNombre.textContent = `${canal.numero} \u00b7 ${canal.nombre}`;
  el.continuarBoton.onclick = () => reproducirCanalPorId(canal.id);
}

/* =======================================================
   Reproductor HLS + Zap In Directo
   ======================================================= */

const rp = {
  seccion: document.getElementById('reproductor'),
  video: document.getElementById('video'),
  numero: document.getElementById('rp-numero'),
  nombre: document.getElementById('rp-nombre'),
  programa: document.getElementById('rp-programa'),
  estadoTexto: document.getElementById('rp-estado'),
  botonFavorito: document.getElementById('boton-favorito'),
  botonSubtitulos: document.getElementById('boton-subtitulos'),
  menuSubtitulos: document.getElementById('menu-subtitulos'),
  botonCalidad: document.getElementById('boton-calidad'),
  menuCalidad: document.getElementById('menu-calidad'),
  botonPip: document.getElementById('boton-pip'),
  botonAirplay: document.getElementById('boton-airplay'),
  botonCast: document.getElementById('boton-cast'),
};

let temporizadorPrograma = null;

function actualizarProgramaReproductor(tvgId) {
  const actual = programaActual(tvgId);
  if (!actual) {
    rp.programa.hidden = true;
    rp.programa.innerHTML = '';
    return;
  }
  const siguiente = programaSiguiente(tvgId);
  rp.programa.hidden = false;
  rp.programa.innerHTML = `<strong>${actual.titulo}</strong> (${formatoHora(actual.inicio)}\u2013${formatoHora(actual.fin)})`
    + (siguiente ? ` \u00b7 ${t('a_continuacion')}: ${siguiente.titulo}` : '');
}

function reproducirCanalPorId(id) {
  const canal = estado.canales.find((c) => c.id === id);
  if (!canal) return;
  estado.indiceActual = estado.canales.findIndex((c) => c.id === id);
  guardarUltimoVisto(id);
  abrirReproductor();
  cargarStream(canal);
}

function abrirReproductor() {
  rp.seccion.classList.add('activo');
  rp.seccion.classList.remove('con-error');
}

function cerrarReproductor() {
  rp.seccion.classList.remove('activo');
  detenerStream();
  renderGuia();
  actualizarBannerContinuar();
}

function detenerStream() {
  if (temporizadorPrograma) {
    clearInterval(temporizadorPrograma);
    temporizadorPrograma = null;
  }
  if (estado.hls) {
    estado.hls.destroy();
    estado.hls = null;
  }
  rp.video.removeAttribute('src');
  rp.video.load();
}

function ocultarMenusFlotantes() {
  rp.menuSubtitulos.hidden = true;
  rp.menuCalidad.hidden = true;
}

function actualizarBotonFavoritoReproductor(canalId) {
  const activo = esFavorito(canalId);
  rp.botonFavorito.classList.toggle('activo', activo);
  rp.botonFavorito.textContent = activo ? '\u2605' : '\u2606';
}

function construirMenuSubtitulosHls(hls) {
  const pistas = hls.subtitleTracks || [];
  rp.menuSubtitulos.innerHTML = '';
  rp.botonSubtitulos.hidden = pistas.length === 0;
  if (pistas.length === 0) return;

  const opcionOff = document.createElement('button');
  opcionOff.className = 'menu-flotante__opcion' + (hls.subtitleTrack === -1 ? ' activo' : '');
  opcionOff.textContent = t('subtitulos_off');
  opcionOff.addEventListener('click', () => {
    hls.subtitleTrack = -1;
    construirMenuSubtitulosHls(hls);
    rp.menuSubtitulos.hidden = true;
  });
  rp.menuSubtitulos.appendChild(opcionOff);

  pistas.forEach((pista, i) => {
    const op = document.createElement('button');
    op.className = 'menu-flotante__opcion' + (hls.subtitleTrack === i ? ' activo' : '');
    op.textContent = pista.name || pista.lang || ('Track ' + (i + 1));
    op.addEventListener('click', () => {
      hls.subtitleTrack = i;
      construirMenuSubtitulosHls(hls);
      rp.menuSubtitulos.hidden = true;
    });
    rp.menuSubtitulos.appendChild(op);
  });
}

function construirMenuCalidadHls(hls) {
  const niveles = hls.levels || [];
  rp.menuCalidad.innerHTML = '';
  rp.botonCalidad.hidden = niveles.length <= 1;
  if (niveles.length <= 1) return;

  const opcionAuto = document.createElement('button');
  opcionAuto.className = 'menu-flotante__opcion' + (hls.currentLevel === -1 ? ' activo' : '');
  opcionAuto.textContent = t('calidad_auto');
  opcionAuto.addEventListener('click', () => {
    hls.currentLevel = -1;
    construirMenuCalidadHls(hls);
    rp.menuCalidad.hidden = true;
  });
  rp.menuCalidad.appendChild(opcionAuto);

  niveles
    .map((nivel, i) => ({ nivel, i }))
    .sort((a, b) => (b.nivel.height || 0) - (a.nivel.height || 0))
    .forEach(({ nivel, i }) => {
      const op = document.createElement('button');
      op.className = 'menu-flotante__opcion' + (hls.currentLevel === i ? ' activo' : '');
      op.textContent = nivel.height ? nivel.height + 'p' : (Math.round((nivel.bitrate || 0) / 1000) + ' kbps');
      op.addEventListener('click', () => {
        hls.currentLevel = i;
        construirMenuCalidadHls(hls);
        rp.menuCalidad.hidden = true;
      });
      rp.menuCalidad.appendChild(op);
    });
}

function cargarStream(canal, intentarProxy) {
  detenerStream();
  ocultarMenusFlotantes();
  rp.seccion.classList.remove('con-error');
  rp.numero.textContent = canal.numero;
  rp.nombre.textContent = canal.nombre;
  rp.estadoTexto.textContent = t('cargando');
  rp.botonSubtitulos.hidden = true;
  rp.botonCalidad.hidden = true;
  actualizarBotonFavoritoReproductor(canal.id);
  actualizarProgramaReproductor(canal.tvgId);
  if (temporizadorPrograma) clearInterval(temporizadorPrograma);
  temporizadorPrograma = setInterval(() => actualizarProgramaReproductor(canal.tvgId), 30000);

  const urlEfectiva = (intentarProxy && URL_PROXY)
    ? URL_PROXY + (URL_PROXY.includes('?') ? '&' : '?') + 'url=' + encodeURIComponent(canal.url)
    : canal.url;

  const marcarEnVivo = () => { rp.estadoTexto.textContent = t('en_vivo'); };
  const marcarError = () => { rp.seccion.classList.add('con-error'); };
  const reintentarConProxySiCorresponde = () => {
    if (!intentarProxy && URL_PROXY) {
      cargarStream(canal, true);
      return true;
    }
    return false;
  };

  if (window.Hls && Hls.isSupported()) {
    const hls = new Hls({ enableWorker: true });
    estado.hls = hls;
    hls.loadSource(urlEfectiva);
    hls.attachMedia(rp.video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      rp.video.play().catch(() => {});
      marcarEnVivo();
      construirMenuSubtitulosHls(hls);
      construirMenuCalidadHls(hls);
    });
    hls.on(Hls.Events.ERROR, (_evt, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            if (!reintentarConProxySiCorresponde()) hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError();
            break;
          default:
            if (!reintentarConProxySiCorresponde()) marcarError();
            break;
        }
      }
    });
  } else if (rp.video.canPlayType('application/vnd.apple.mpegurl')) {
    rp.video.src = urlEfectiva;
    rp.video.addEventListener('loadedmetadata', () => {
      rp.video.play().catch(() => {});
      marcarEnVivo();
    }, { once: true });
    rp.video.addEventListener('error', () => {
      if (!reintentarConProxySiCorresponde()) marcarError();
    }, { once: true });
  } else {
    marcarError();
  }
}

function cambiarCanal(paso) {
  const lista = canalesFiltrados();
  if (lista.length === 0) return;
  const idActual = estado.canales[estado.indiceActual]?.id;
  let pos = lista.findIndex((c) => c.id === idActual);
  pos = (pos + paso + lista.length) % lista.length;
  reproducirCanalPorId(lista[pos].id);
}

rp.botonFavorito.addEventListener('click', () => {
  const canal = estado.canales[estado.indiceActual];
  if (!canal) return;
  alternarFavorito(canal.id);
  actualizarBotonFavoritoReproductor(canal.id);
});

rp.botonSubtitulos.addEventListener('click', () => {
  const abierto = !rp.menuSubtitulos.hidden;
  ocultarMenusFlotantes();
  rp.menuSubtitulos.hidden = abierto;
});
rp.botonCalidad.addEventListener('click', () => {
  const abierto = !rp.menuCalidad.hidden;
  ocultarMenusFlotantes();
  rp.menuCalidad.hidden = abierto;
});

if (document.pictureInPictureEnabled) {
  rp.botonPip.hidden = false;
  rp.botonPip.addEventListener('click', async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await rp.video.requestPictureInPicture();
      }
    } catch (e) {
      console.warn('Picture-in-Picture no disponible', e);
    }
  });
}

if (typeof rp.video.webkitShowPlaybackTargetPicker === 'function') {
  rp.botonAirplay.hidden = false;
  rp.botonAirplay.addEventListener('click', () => {
    rp.video.webkitShowPlaybackTargetPicker();
  });
}

window['__onGCastApiAvailable'] = function (esDisponible) {
  if (!esDisponible || !window.cast || !window.chrome || !window.chrome.cast) return;
  try {
    cast.framework.CastContext.getInstance().setOptions({
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
    });
    rp.botonCast.hidden = false;
  } catch (e) {
    console.warn('No se pudo inicializar Chromecast', e);
  }
};

function enviarACast() {
  const canal = estado.canales[estado.indiceActual];
  if (!canal || !window.cast) return;

  const contexto = cast.framework.CastContext.getInstance();
  const sesion = contexto.getCurrentSession();

  const cargarMedia = (s) => {
    const info = new chrome.cast.media.MediaInfo(canal.url, 'application/x-mpegurl');
    info.metadata = new chrome.cast.media.GenericMediaMetadata();
    info.metadata.title = canal.nombre;
    const solicitud = new chrome.cast.media.LoadRequest(info);
    s.loadMedia(solicitud).catch((e) => console.warn('Error al castear', e));
  };

  if (sesion) {
    cargarMedia(sesion);
  } else {
    contexto.requestSession().then((s) => cargarMedia(s)).catch((e) => console.warn('Sesion de cast cancelada', e));
  }
}

rp.botonCast.addEventListener('click', enviarACast);

/* =======================================================
   Navegacion entre pantallas
   ======================================================= */

function irAConfig() {
  el.pantallaGuia.classList.remove('activa');
  el.pantallaConfig.classList.add('activa');
}

function irAGuia() {
  el.pantallaConfig.classList.remove('activa');
  el.pantallaGuia.classList.add('activa');
}

/* =======================================================
   Pantalla: cargar lista de canales
   ======================================================= */

const cfg = {
  tabs: document.querySelectorAll('.config__tab'),
  campos: document.querySelectorAll('.config__campo'),
  url: document.getElementById('campo-url'),
  archivo: document.getElementById('campo-archivo'),
  nombreArchivo: document.getElementById('nombre-archivo'),
  texto: document.getElementById('campo-texto'),
  mensaje: document.getElementById('config-mensaje'),
  botonCargar: document.getElementById('boton-cargar'),
  botonLimpiar: document.getElementById('boton-limpiar'),
};

let tabActiva = 'url';
let contenidoArchivo = '';

cfg.tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabActiva = tab.dataset.tab;
    cfg.tabs.forEach((tb) => tb.classList.toggle('activo', tb === tab));
    cfg.campos.forEach((c) => c.classList.toggle('activo', c.dataset.campo === tabActiva));
    ocultarMensaje();
  });
});

cfg.archivo.addEventListener('change', async () => {
  const f = cfg.archivo.files[0];
  if (!f) return;
  contenidoArchivo = await f.text();
  cfg.nombreArchivo.textContent = f.name;
});

function mostrarMensaje(texto, tipo) {
  cfg.mensaje.textContent = texto;
  cfg.mensaje.className = 'config__mensaje ' + tipo;
}
function ocultarMensaje() {
  cfg.mensaje.className = 'config__mensaje';
}

async function manejarCarga() {
  ocultarMensaje();
  try {
    let texto = '';
    let origen = '';

    if (tabActiva === 'url') {
      const url = cfg.url.value.trim();
      if (!url) { mostrarMensaje(t('ingresa_url'), 'error'); return; }
      cfg.botonCargar.textContent = t('cargando');
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      texto = await resp.text();
      origen = url;
    } else if (tabActiva === 'archivo') {
      if (!contenidoArchivo) { mostrarMensaje(t('elegi_archivo'), 'error'); return; }
      texto = contenidoArchivo;
      origen = 'archivo:' + (cfg.archivo.files[0]?.name || '');
    } else {
      texto = cfg.texto.value.trim();
      if (!texto) { mostrarMensaje(t('pega_contenido'), 'error'); return; }
      origen = 'texto-pegado';
    }

    const crudos = parsearContenido(texto);
    const canales = normalizarCanales(crudos);

    if (canales.length === 0) {
      mostrarMensaje(t('sin_canales_validos'), 'error');
      return;
    }

    guardarLista(canales, origen);
    estado.canales = canales;
    estado.filtro = 'Todos';
    estado.soloFavoritos = false;
    estado.soloDestacados = false;
    renderFiltros();
    renderGuia();
    actualizarBannerContinuar();
    mostrarMensaje(canales.length + ' \u2713', 'ok');
    setTimeout(irAGuia, 900);
  } catch (e) {
    console.error(e);
    mostrarMensaje(e.message, 'error');
  } finally {
    cfg.botonCargar.textContent = t('cargar_lista');
  }
}

cfg.botonCargar.addEventListener('click', manejarCarga);

cfg.botonLimpiar.addEventListener('click', async () => {
  localStorage.removeItem(CLAVE_LISTA);
  localStorage.removeItem(CLAVE_ORIGEN);
  estado.canales = await obtenerListaCombinadaDesdeFuentes();
  renderFiltros();
  renderGuia();
  actualizarBannerContinuar();
  mostrarMensaje(t('lista_borrada'), 'ok');
});

/* =======================================================
   Búsqueda por Voz (Web Speech API)
   ======================================================= */

function iniciarBusquedaVoz() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Tu navegador no soporta búsqueda por voz.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = estado.idioma === 'en' ? 'en-US' : 'es-ES';
  recognition.interimResults = false;

  el.busqueda.placeholder = t('voz_escuchando');

  recognition.onresult = (e) => {
    const texto = e.results[0][0].transcript;
    el.busqueda.value = texto;
    estado.busqueda = texto;
    renderGuia();
    el.busqueda.placeholder = t('buscar_placeholder');
  };

  recognition.onerror = () => {
    el.busqueda.placeholder = t('buscar_placeholder');
  };

  recognition.onend = () => {
    el.busqueda.placeholder = t('buscar_placeholder');
  };

  recognition.start();
}

/* =======================================================
   Eventos generales y Control Remoto
   ======================================================= */

document.getElementById('boton-config').addEventListener('click', irAConfig);
document.getElementById('boton-volver').addEventListener('click', irAGuia);
document.getElementById('boton-cerrar-reproductor').addEventListener('click', cerrarReproductor);
document.getElementById('boton-canal-anterior').addEventListener('click', () => cambiarCanal(-1));
document.getElementById('boton-canal-siguiente').addEventListener('click', () => cambiarCanal(1));

document.getElementById('boton-idioma').addEventListener('click', () => {
  estado.idioma = estado.idioma === 'es' ? 'en' : 'es';
  localStorage.setItem(CLAVE_IDIOMA, estado.idioma);
  aplicarIdioma();
});

el.busqueda.addEventListener('input', (e) => {
  estado.busqueda = e.target.value;
  renderGuia();
});

document.addEventListener('keydown', (e) => {
  const reproductorAbierto = rp.seccion.classList.contains('activo');

  if (reproductorAbierto) {
    if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'GoBack') {
      cerrarReproductor();
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      cambiarCanal(-1);
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      cambiarCanal(1);
      e.preventDefault();
    } else if (e.key === ' ' || e.key === 'MediaPlayPause') {
      if (rp.video.paused) rp.video.play().catch(() => {});
      else rp.video.pause();
      e.preventDefault();
    }
    return;
  }

  if (el.pantallaGuia.classList.contains('activa')) {
    const filas = Array.from(document.querySelectorAll('.fila-canal'));
    if (filas.length === 0) return;

    const actualFocus = document.activeElement;
    let index = filas.indexOf(actualFocus);

    if (e.key === 'ArrowDown') {
      if (index === -1) {
        filas[0].focus();
      } else if (index < filas.length - 1) {
        filas[index + 1].focus();
        filas[index + 1].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      if (index > 0) {
        filas[index - 1].focus();
        filas[index - 1].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else if (index === 0) {
        document.getElementById('campo-busqueda').focus();
      }
      e.preventDefault();
    }
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.menu-flotante-cont')) ocultarMenusFlotantes();
});

/* =======================================================
   Service worker
   ======================================================= */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

/* =======================================================
   Arranque con Zap In Directo
   ======================================================= */

async function iniciar() {
  document.querySelectorAll('.agrupar__opcion').forEach((b) => {
    b.classList.toggle('activo', b.dataset.agrupar === estado.agrupacion);
  });

  const guardadaManualmente = cargarListaGuardada();
  if (guardadaManualmente.length > 0) {
    estado.canales = guardadaManualmente;
  } else {
    estado.canales = await obtenerListaCombinadaDesdeFuentes();
  }

  aplicarIdioma();
  actualizarBannerContinuar();

  if (estado.canales.length > 0) {
    const idUltimo = leerUltimoVisto();
    const canalInicial = estado.canales.find((c) => c.id === idUltimo) || estado.canales[0];
    if (canalInicial) {
      reproducirCanalPorId(canalInicial.id);
    }
  }

  cargarProgramacion()
    .then((programacion) => {
      estado.programacion = programacion;
      renderGuia();
      if (rp.seccion.classList.contains('activo')) {
        const canalActual = estado.canales[estado.indiceActual];
        if (canalActual) actualizarProgramaReproductor(canalActual.tvgId);
      }
    })
    .catch((e) => console.warn('No se pudo cargar la EPG', e));
}

iniciar();
