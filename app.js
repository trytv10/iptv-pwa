'use strict';

/* =======================================================
   Estado y almacenamiento
   ======================================================= */

const CLAVE_LISTA = 'iptv:lista-canales';
const CLAVE_ORIGEN = 'iptv:origen-lista';

const estado = {
  canales: [],       // [{ id, numero, nombre, url, logo, grupo }]
  filtro: 'Todos',
  busqueda: '',
  indiceActual: -1,  // indice dentro de estado.canales del canal en reproduccion
  hls: null,
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

/* =======================================================
   Parsers: M3U/M3U8 y JSON
   ======================================================= */

// Extrae un atributo tipo clave="valor" de una linea #EXTINF
function extraerAtributo(linea, clave) {
  const m = linea.match(new RegExp(clave + '="([^"]*)"'));
  return m ? m[1] : '';
}

function parsearM3U(texto) {
  const lineas = texto.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
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
      };
    } else if (!linea.startsWith('#')) {
      // Es una URL de stream
      if (pendiente) {
        canales.push({ ...pendiente, url: linea });
        pendiente = null;
      } else {
        // URL suelta sin #EXTINF previo
        canales.push({ nombre: linea, logo: '', grupo: 'General', url: linea });
      }
    }
  }
  return canales;
}

function parsearJSON(texto) {
  const datos = JSON.parse(texto);
  const lista = Array.isArray(datos) ? datos : (datos.canales || []);
  return lista.map(c => ({
    nombre: c.nombre || c.name || 'Sin nombre',
    url: c.url || c.stream || '',
    logo: c.logo || c.tvg_logo || '',
    grupo: c.grupo || c.group || 'General',
  })).filter(c => c.url);
}

function parsearContenido(texto) {
  const limpio = texto.trim();
  if (limpio.startsWith('#EXTM3U') || limpio.includes('#EXTINF')) {
    return parsearM3U(limpio);
  }
  try {
    return parsearJSON(limpio);
  } catch {
    // Como ultimo recurso, intenta como M3U de todas formas
    return parsearM3U(limpio);
  }
}

function normalizarCanales(crudos) {
  return crudos
    .filter(c => c.url)
    .map((c, i) => ({
      id: 'c' + i,
      numero: String(i + 1).padStart(2, '0'),
      nombre: c.nombre,
      url: c.url,
      logo: c.logo || '',
      grupo: c.grupo || 'General',
    }));
}

/* =======================================================
   Render: guia de canales
   ======================================================= */

const el = {
  guia: document.getElementById('guia'),
  filtros: document.getElementById('filtros'),
  busqueda: document.getElementById('campo-busqueda'),
  pantallaGuia: document.getElementById('pantalla-guia'),
  pantallaConfig: document.getElementById('pantalla-config'),
};

function gruposDisponibles() {
  const set = new Set(estado.canales.map(c => c.grupo));
  return ['Todos', ...Array.from(set).sort()];
}

function renderFiltros() {
  const grupos = gruposDisponibles();
  el.filtros.innerHTML = '';
  if (estado.canales.length === 0) return;
  for (const g of grupos) {
    const b = document.createElement('button');
    b.className = 'filtro' + (g === estado.filtro ? ' activo' : '');
    b.textContent = g;
    b.addEventListener('click', () => {
      estado.filtro = g;
      renderFiltros();
      renderGuia();
    });
    el.filtros.appendChild(b);
  }
}

function canalesFiltrados() {
  const q = estado.busqueda.trim().toLowerCase();
  return estado.canales.filter(c => {
    const pasaGrupo = estado.filtro === 'Todos' || c.grupo === estado.filtro;
    const pasaBusqueda = !q || c.nombre.toLowerCase().includes(q);
    return pasaGrupo && pasaBusqueda;
  });
}

function renderGuia() {
  const lista = canalesFiltrados();
  el.guia.innerHTML = '';

  if (estado.canales.length === 0) {
    el.guia.appendChild(vistaVacia(
      'Todavia no hay canales cargados',
      'Cargá tu listado (.m3u, .m3u8 o .json) para empezar a ver la guia.',
      true
    ));
    return;
  }

  if (lista.length === 0) {
    el.guia.appendChild(vistaVacia('Sin resultados', 'Probá con otra busqueda o categoria.', false));
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
    ${mostrarBoton ? '<div class="guia-vacia__acciones"><button class="boton-primario" id="boton-vacio-cargar">Cargar lista</button></div>' : ''}
  `;
  if (mostrarBoton) {
    div.querySelector('#boton-vacio-cargar').addEventListener('click', irAConfig);
  }
  return div;
}

function filaCanal(canal) {
  const fila = document.createElement('button');
  fila.className = 'fila-canal';
  fila.type = 'button';
  fila.dataset.id = canal.id;

  const logoHtml = canal.logo
    ? `<img src="${canal.logo}" alt="" loading="lazy" onerror="this.parentElement.textContent='${canal.nombre.slice(0,2).toUpperCase()}'">`
    : canal.nombre.slice(0, 2).toUpperCase();

  fila.innerHTML = `
    <span class="fila-canal__numero">${canal.numero}</span>
    <span class="fila-canal__logo">${logoHtml}</span>
    <span class="fila-canal__info">
      <span class="fila-canal__nombre">${canal.nombre}</span>
      <span class="fila-canal__grupo">${canal.grupo}</span>
    </span>
    <span class="fila-canal__estado" aria-hidden="true"></span>
  `;
  fila.addEventListener('click', () => reproducirCanalPorId(canal.id));
  return fila;
}

/* =======================================================
   Reproductor HLS
   ======================================================= */

const rp = {
  seccion: document.getElementById('reproductor'),
  video: document.getElementById('video'),
  numero: document.getElementById('rp-numero'),
  nombre: document.getElementById('rp-nombre'),
  estadoTexto: document.getElementById('rp-estado'),
};

function reproducirCanalPorId(id) {
  const lista = canalesFiltrados();
  const indiceEnLista = lista.findIndex(c => c.id === id);
  if (indiceEnLista === -1) return;
  estado.indiceActual = estado.canales.findIndex(c => c.id === id);
  abrirReproductor();
  cargarStream(estado.canales[estado.indiceActual]);
}

function abrirReproductor() {
  rp.seccion.classList.add('activo');
  rp.seccion.classList.remove('con-error');
}

function cerrarReproductor() {
  rp.seccion.classList.remove('activo');
  detenerStream();
}

function detenerStream() {
  if (estado.hls) {
    estado.hls.destroy();
    estado.hls = null;
  }
  rp.video.removeAttribute('src');
  rp.video.load();
}

function cargarStream(canal) {
  detenerStream();
  rp.seccion.classList.remove('con-error');
  rp.numero.textContent = canal.numero;
  rp.nombre.textContent = canal.nombre;
  rp.estadoTexto.textContent = 'Conectando...';

  const marcarEnVivo = () => { rp.estadoTexto.textContent = 'EN VIVO'; };
  const marcarError = () => { rp.seccion.classList.add('con-error'); };

  if (window.Hls && Hls.isSupported()) {
    const hls = new Hls({ enableWorker: true });
    estado.hls = hls;
    hls.loadSource(canal.url);
    hls.attachMedia(rp.video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      rp.video.play().catch(() => {});
      marcarEnVivo();
    });
    hls.on(Hls.Events.ERROR, (_evt, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError();
            break;
          default:
            marcarError();
            break;
        }
      }
    });
  } else if (rp.video.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari / iOS: soporte nativo de HLS
    rp.video.src = canal.url;
    rp.video.addEventListener('loadedmetadata', () => {
      rp.video.play().catch(() => {});
      marcarEnVivo();
    }, { once: true });
    rp.video.addEventListener('error', marcarError, { once: true });
  } else {
    marcarError();
  }
}

function cambiarCanal(paso) {
  const lista = canalesFiltrados();
  if (lista.length === 0) return;
  const idActual = estado.canales[estado.indiceActual]?.id;
  let pos = lista.findIndex(c => c.id === idActual);
  pos = (pos + paso + lista.length) % lista.length;
  reproducirCanalPorId(lista[pos].id);
}

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

cfg.tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabActiva = tab.dataset.tab;
    cfg.tabs.forEach(t => t.classList.toggle('activo', t === tab));
    cfg.campos.forEach(c => c.classList.toggle('activo', c.dataset.campo === tabActiva));
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
      if (!url) { mostrarMensaje('Ingresá una URL valida.', 'error'); return; }
      cfg.botonCargar.textContent = 'Cargando...';
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      texto = await resp.text();
      origen = url;
    } else if (tabActiva === 'archivo') {
      if (!contenidoArchivo) { mostrarMensaje('Elegí un archivo primero.', 'error'); return; }
      texto = contenidoArchivo;
      origen = 'archivo:' + (cfg.archivo.files[0]?.name || '');
    } else {
      texto = cfg.texto.value.trim();
      if (!texto) { mostrarMensaje('Pegá el contenido M3U o JSON.', 'error'); return; }
      origen = 'texto-pegado';
    }

    const crudos = parsearContenido(texto);
    const canales = normalizarCanales(crudos);

    if (canales.length === 0) {
      mostrarMensaje('No se encontraron canales validos en ese contenido.', 'error');
      return;
    }

    guardarLista(canales, origen);
    estado.canales = canales;
    estado.filtro = 'Todos';
    renderFiltros();
    renderGuia();
    mostrarMensaje(`Se cargaron ${canales.length} canales correctamente.`, 'ok');
    setTimeout(irAGuia, 900);
  } catch (e) {
    console.error(e);
    mostrarMensaje('No se pudo cargar la lista: ' + e.message, 'error');
  } finally {
    cfg.botonCargar.textContent = 'Cargar lista';
  }
}

cfg.botonCargar.addEventListener('click', manejarCarga);

cfg.botonLimpiar.addEventListener('click', () => {
  localStorage.removeItem(CLAVE_LISTA);
  localStorage.removeItem(CLAVE_ORIGEN);
  estado.canales = [];
  renderFiltros();
  renderGuia();
  mostrarMensaje('Se borro la lista guardada en este dispositivo.', 'ok');
});

/* =======================================================
   Eventos generales
   ======================================================= */

document.getElementById('boton-config').addEventListener('click', irAConfig);
document.getElementById('boton-volver').addEventListener('click', irAGuia);
document.getElementById('boton-cerrar-reproductor').addEventListener('click', cerrarReproductor);
document.getElementById('boton-canal-anterior').addEventListener('click', () => cambiarCanal(-1));
document.getElementById('boton-canal-siguiente').addEventListener('click', () => cambiarCanal(1));

el.busqueda.addEventListener('input', (e) => {
  estado.busqueda = e.target.value;
  renderGuia();
});

// Navegacion con control remoto / teclado
document.addEventListener('keydown', (e) => {
  const reproductorAbierto = rp.seccion.classList.contains('activo');
  if (reproductorAbierto) {
    if (e.key === 'Escape' || e.key === 'Backspace') { cerrarReproductor(); }
    if (e.key === 'ArrowUp') { cambiarCanal(-1); }
    if (e.key === 'ArrowDown') { cambiarCanal(1); }
  }
});

/* =======================================================
   Service worker (instalable / uso sin conexion de la interfaz)
   ======================================================= */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

/* =======================================================
   Arranque
   ======================================================= */

(function iniciar() {
  estado.canales = cargarListaGuardada();
  renderFiltros();
  renderGuia();
})();
