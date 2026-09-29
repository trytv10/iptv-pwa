'use strict';

/* =======================================================
   Idiomas (i18n)
   ======================================================= */

const IDIOMAS = {
  es: {
    marca: 'Guia de Canales',
    buscar_placeholder: 'Buscar canal, evento o equipo...',
    cargar_lista: 'Gestionar Listas',
    restaurar_oficial: 'Usar lista oficial',
    continuar_viendo: 'Continuar viendo',
    reanudar: 'Reanudar',
    por_categoria: 'Categoria',
    por_pais: 'Pais',
    favoritos: 'Favoritos',
    destacados: 'Deportes/Eventos',
    solo_activos: 'Solo activos',
    todos: 'Todos',
    sin_pais: 'Sin pais',
    volver_guia: '\u2190 Volver a la guia',
    volver_guia_corto: '\u2190 Guia',
    cargar_titulo: 'Gestionar Listas de Canales',
    cargar_subtitulo: 'Guarda múltiples fuentes (M3U, M3U8 o JSON) y alterna entre ellas fácilmente.',
    tab_url: 'URL remota',
    tab_archivo: 'Archivo',
    tab_texto: 'Pegar texto',
    etiqueta_url: 'URL del listado (.m3u, .m3u8 o .json)',
    etiqueta_archivo: 'Archivo del listado',
    archivo_arrastrar: 'Arrastra un archivo o',
    archivo_elegir: 'elegilo manualmente',
    etiqueta_texto: 'Contenido M3U o JSON',
    borrar_lista: 'Restaurar predeterminadas',
    config_info: 'Formato M3U esperado por linea: <code>#EXTINF:-1 tvg-logo="URL_LOGO" group-title="Categoria",Nombre del canal</code> seguido de la URL .m3u8.',
    subtitulos: 'Subtitulos',
    calidad: 'Calidad',
    miniatura: 'Miniatura',
    error_titulo: 'No se pudo reproducir esta senal',
    error_texto: 'Revisa la URL del canal o proba con otro.',
    guia_vacia_titulo: 'Todavia no hay canales cargados',
    guia_vacia_texto: 'Carga tu listado (.m3u, .m3u8 o .json) para empezar a ver la guia.',
    sin_resultados_titulo: 'Sin resultados',
    sin_resultados_texto: 'Proba con otra busqueda, evento o categoria.',
    conectando: 'Conectando...',
    en_vivo: 'EN VIVO',
    subtitulos_off: 'Desactivados',
    calidad_auto: 'Automatica',
    ingresa_url: 'Ingresa una URL valida.',
    elegi_archivo: 'Elegi un archivo primero.',
    pega_contenido: 'Pega el contenido M3U o JSON.',
    sin_canales_validos: 'No se encontraron canales validos.',
    lista_borrada: 'Se restauraron las listas predeterminadas.',
    cargando: 'Cargando...',
    a_continuacion: 'A continuacion',
    voz_escuchando: 'Escuchando...',
    sin_epg: 'Sin informacion de programacion',
    reintentando: 'Reintentando senal...',
    vista_lista: '☰ Lista',
    vista_grilla: '▦ Grilla',
    nombre_lista_placeholder: 'Nombre para esta lista (ej: Deportes, Argentina...)',
    mis_listas: 'Mis Listas Guardadas',
    control_parental: 'Control Parental (Bloqueo de Categorias)',
    pin_placeholder: 'PIN de 4 digitos (ej: 1234)',
    guardar_pin: 'Guardar PIN y Bloqueos',
    pin_incorrecto: 'PIN incorrecto',
    ingrese_pin: 'Ingrese el PIN de control parental:',
    actualizar_guia: 'Actualizar',
    actualizar_toast: 'Guía actualizada correctamente desde el servidor.',
    canal_caido: 'Canal caído (marcado por admin)',
    // Sincronización
    sync_titulo: 'Sincronizar favoritos entre dispositivos',
    sync_descripcion: 'Generá un código y usá el mismo en todos tus dispositivos (celu, TV, tablet) para compartir favoritos.',
    sync_generar: 'Generar código nuevo',
    sync_vincular: 'Vincular este dispositivo',
    sync_desvincular: 'Desvincular',
    sync_copiar: 'Copiar',
    sync_copiado: '¡Copiado!',
    sync_estado_vinculado: 'Vinculado con el código',
    sync_estado_no_vinculado: 'Sin sincronizar',
    sync_code_placeholder: 'Pegá el código de otro dispositivo',
    sync_error: 'No se pudo sincronizar. Revisá tu conexión.',
    sync_ok_subida: 'Favoritos subidos',
    sync_ok_bajada: 'Favoritos recibidos',
    sync_fusionado: 'Favoritos combinados con los de este dispositivo',
    sync_subiendo: 'Subiendo...',
    sync_bajando: 'Bajando...',
    sync_pedir_codigo: 'Primero generá o pegá un código.',
    sync_borrar_nube: '🗑 Borrar de la nube',
    sync_borrar_nube_confirm: '¿Borrar TODOS los favoritos guardados en la nube con este código?\n\nEsta acción NO se puede deshacer.\n\nLos favoritos locales de este dispositivo NO se borran.',
    sync_borrar_nube_ok: 'Favoritos borrados de la nube. Este dispositivo quedó desvinculado.',
    sync_borrar_nube_error: 'No se pudieron borrar los favoritos de la nube. Revisá tu conexión.',
    sync_borrando: 'Borrando...',
    // Backup
    backup_titulo: 'Backup de configuración',
    backup_desc: 'Guardá toda tu configuración en un archivo (listas, favoritos, PIN, sync ID) o restaurála desde uno existente.',
    backup_exportar: '⬇ Exportar',
    backup_importar: '⬆ Importar',
    backup_export_ok: 'Configuración exportada correctamente.',
    backup_import_confirm: '¿Importar esta configuración? Se va a REEMPLAZAR toda la configuración actual (listas, favoritos, PIN).',
    backup_import_ok: 'Configuración importada correctamente. La app se va a recargar.',
    backup_import_error: 'No se pudo importar. Verificá que el archivo sea un backup válido.',
    backup_archivo_invalido: 'El archivo no parece un backup válido de esta app.',
    // QR
    qr_boton: '📱 Mostrar QR',
    qr_titulo: 'Compartir código por QR',
    qr_ayuda: 'Escaneá este código con la cámara del otro dispositivo, o copiá el link y abrilo ahí.',
    qr_copiar_link: 'Copiar link',
    qr_link_copiado: '¡Link copiado!',
    qr_cerrar: 'Cerrar',
    qr_invitacion_titulo: 'Vinculación por QR',
    qr_invitacion_texto: 'El link tiene el código',
    qr_invitacion_pregunta: '¿Querés vincular este dispositivo a ese código? Los favoritos se van a fusionar.',
    qr_invitacion_si: 'Sí, vincular',
    qr_invitacion_no: 'Ahora no',
    qr_error: 'No se pudo generar el QR. Verificá tu conexión.',
  },
  en: {
    marca: 'Channel Guide',
    buscar_placeholder: 'Search channel, event or team...',
    cargar_lista: 'Manage Lists',
    restaurar_oficial: 'Use official list',
    continuar_viendo: 'Continue watching',
    reanudar: 'Resume',
    por_categoria: 'Category',
    por_pais: 'Country',
    favoritos: 'Favorites',
    destacados: 'Sports/Events',
    solo_activos: 'Only online',
    todos: 'All',
    sin_pais: 'No country',
    volver_guia: '\u2190 Back to guide',
    volver_guia_corto: '\u2190 Guide',
    cargar_titulo: 'Manage Channel Lists',
    cargar_subtitulo: 'Save multiple sources (M3U, M3U8 or JSON) and switch between them easily.',
    tab_url: 'Remote URL',
    tab_archivo: 'File',
    tab_texto: 'Paste text',
    etiqueta_url: 'List URL (.m3u, .m3u8 or .json)',
    etiqueta_archivo: 'List file',
    archivo_arrastrar: 'Drag a file or',
    archivo_elegir: 'choose it manually',
    etiqueta_texto: 'M3U or JSON content',
    borrar_lista: 'Restore defaults',
    config_info: 'Expected M3U format per line: <code>#EXTINF:-1 tvg-logo="LOGO_URL" group-title="Category",Channel name</code>.',
    subtitulos: 'Subtitles',
    calidad: 'Quality',
    miniatura: 'PiP',
    error_titulo: 'This channel could not be played',
    error_texto: 'Check the channel URL or try another one.',
    guia_vacia_titulo: 'No channels loaded yet',
    guia_vacia_texto: 'Load your list (.m3u, .m3u8 or .json) to start browsing.',
    sin_resultados_titulo: 'No results',
    sin_resultados_texto: 'Try a different search, event or category.',
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
    sin_epg: 'No guide information',
    reintentando: 'Retrying stream...',
    vista_lista: '☰ List',
    vista_grilla: '▦ Grid',
    nombre_lista_placeholder: 'List name (e.g. Sports, Local...)',
    mis_listas: 'My Saved Lists',
    control_parental: 'Parental Control (Block Categories)',
    pin_placeholder: '4-digit PIN (e.g. 1234)',
    guardar_pin: 'Save PIN & Blocks',
    pin_incorrecto: 'Incorrect PIN',
    ingrese_pin: 'Enter parental control PIN:',
    actualizar_guia: 'Update',
    actualizar_toast: 'Guide successfully updated from server.',
    canal_caido: 'Channel offline (marked by admin)',
    // Sincronización
    sync_titulo: 'Sync favorites across devices',
    sync_descripcion: 'Generate a code and use the same one on all your devices (phone, TV, tablet) to share favorites.',
    sync_generar: 'Generate new code',
    sync_vincular: 'Link this device',
    sync_desvincular: 'Unlink',
    sync_copiar: 'Copy',
    sync_copiado: 'Copied!',
    sync_estado_vinculado: 'Linked with code',
    sync_estado_no_vinculado: 'Not synced',
    sync_code_placeholder: 'Paste the code from another device',
    sync_error: 'Sync failed. Check your connection.',
    sync_ok_subida: 'Favorites uploaded',
    sync_ok_bajada: 'Favorites received',
    sync_fusionado: 'Favorites merged with this device',
    sync_subiendo: 'Uploading...',
    sync_bajando: 'Downloading...',
    sync_pedir_codigo: 'Generate or paste a code first.',
    sync_borrar_nube: '🗑 Delete from cloud',
    sync_borrar_nube_confirm: 'Delete ALL favorites stored in the cloud with this code?\n\nThis action CANNOT be undone.\n\nLocal favorites on this device are NOT deleted.',
    sync_borrar_nube_ok: 'Favorites deleted from cloud. This device is now unlinked.',
    sync_borrar_nube_error: 'Could not delete favorites from cloud. Check your connection.',
    sync_borrando: 'Deleting...',
    // Backup
    backup_titulo: 'Configuration backup',
    backup_desc: 'Save all your configuration to a file (lists, favorites, PIN, sync ID) or restore it from an existing one.',
    backup_exportar: '⬇ Export',
    backup_importar: '⬆ Import',
    backup_export_ok: 'Configuration exported successfully.',
    backup_import_confirm: 'Import this configuration? It will REPLACE all current configuration (lists, favorites, PIN).',
    backup_import_ok: 'Configuration imported successfully. The app will reload.',
    backup_import_error: 'Could not import. Verify the file is a valid backup.',
    backup_archivo_invalido: 'The file does not look like a valid backup from this app.',
    // QR
    qr_boton: '📱 Show QR',
    qr_titulo: 'Share code via QR',
    qr_ayuda: 'Scan this code with the other device camera, or copy the link and open it there.',
    qr_copiar_link: 'Copy link',
    qr_link_copiado: 'Link copied!',
    qr_cerrar: 'Close',
    qr_invitacion_titulo: 'QR linking',
    qr_invitacion_texto: 'The link has the code',
    qr_invitacion_pregunta: 'Do you want to link this device to that code? Favorites will be merged.',
    qr_invitacion_si: 'Yes, link',
    qr_invitacion_no: 'Not now',
    qr_error: 'Could not generate QR. Check your connection.',
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
  actualizarBotonVista();
  renderFiltros();
  renderGuia();
  actualizarBannerContinuar();
  renderListasGuardadasUI();
  actualizarSelectorListasHeader();
  renderControlParentalUI();
  renderSyncUI();
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

Object.entries({
  AL: ['Albania', 'Albania'], AD: ['Andorra', 'Andorra'], AM: ['Armenia', 'Armenia'],
  AU: ['Australia', 'Australia'], AT: ['Austria', 'Austria'], AZ: ['Azerbaiyán', 'Azerbaijan'],
  BY: ['Bielorrusia', 'Belarus'], BE: ['Bélgica', 'Belgium'],
  BA: ['Bosnia y Herzegovina', 'Bosnia and Herzegovina'], BG: ['Bulgaria', 'Bulgaria'],
  CA: ['Canadá', 'Canada'], TD: ['Chad', 'Chad'], CN: ['China', 'China'],
  HR: ['Croacia', 'Croatia'], CY: ['Chipre', 'Cyprus'], CZ: ['Chequia', 'Czech Republic'],
  DK: ['Dinamarca', 'Denmark'], EG: ['Egipto', 'Egypt'], EE: ['Estonia', 'Estonia'],
  FO: ['Islas Feroe', 'Faroe Islands'], FI: ['Finlandia', 'Finland'], GE: ['Georgia', 'Georgia'],
  GR: ['Grecia', 'Greece'], GL: ['Groenlandia', 'Greenland'], HK: ['Hong Kong', 'Hong Kong'],
  HU: ['Hungría', 'Hungary'], IS: ['Islandia', 'Iceland'], IN: ['India', 'India'],
  ID: ['Indonesia', 'Indonesia'], IR: ['Irán', 'Iran'], IQ: ['Irak', 'Iraq'],
  IE: ['Irlanda', 'Ireland'], IL: ['Israel', 'Israel'], JP: ['Japón', 'Japan'],
  KZ: ['Kazajistán', 'Kazakhstan'], KE: ['Kenia', 'Kenya'], KR: ['Corea del Sur', 'South Korea'],
  XK: ['Kosovo', 'Kosovo'], LV: ['Letonia', 'Latvia'], LB: ['Líbano', 'Lebanon'],
  LT: ['Lituania', 'Lithuania'], LU: ['Luxemburgo', 'Luxembourg'], MO: ['Macao', 'Macao'],
  MT: ['Malta', 'Malta'], MD: ['Moldavia', 'Moldova'], MC: ['Mónaco', 'Monaco'],
  MN: ['Mongolia', 'Mongolia'], ME: ['Montenegro', 'Montenegro'], NL: ['Países Bajos', 'Netherlands'],
  NG: ['Nigeria', 'Nigeria'], KP: ['Corea del Norte', 'North Korea'],
  MK: ['Macedonia del Norte', 'North Macedonia'], NO: ['Noruega', 'Norway'],
  PL: ['Polonia', 'Poland'], QA: ['Catar', 'Qatar'], RO: ['Rumania', 'Romania'],
  RU: ['Rusia', 'Russia'], SM: ['San Marino', 'San Marino'], SA: ['Arabia Saudita', 'Saudi Arabia'],
  RS: ['Serbia', 'Serbia'], SK: ['Eslovaquia', 'Slovakia'], SI: ['Eslovenia', 'Slovenia'],
  SO: ['Somalia', 'Somalia'], SE: ['Suecia', 'Sweden'], CH: ['Suiza', 'Switzerland'],
  TW: ['Taiwán', 'Taiwan'], TT: ['Trinidad y Tobago', 'Trinidad and Tobago'],
  TR: ['Turquía', 'Turkey'], TM: ['Turkmenistán', 'Turkmenistan'],
  UA: ['Ucrania', 'Ukraine'], AE: ['Emiratos Árabes Unidos', 'United Arab Emirates'],
}).forEach(([codigo, [es, en]]) => {
  if (!NOMBRES_PAIS[codigo]) NOMBRES_PAIS[codigo] = { es, en };
});

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
   Estado, Listas y Control Parental
   ======================================================= */

const CLAVE_MULTIPLE_LISTAS = 'iptv:multiple-listas';
const CLAVE_LISTA_ACTIVA_ID = 'iptv:lista-activa-id';
const CLAVE_FAVORITOS = 'iptv:favoritos';
const CLAVE_ULTIMO = 'iptv:ultimo-canal';
const CLAVE_IDIOMA = 'iptv:idioma';
const CLAVE_AGRUPACION = 'iptv:agrupacion';
const CLAVE_MODO_VISTA = 'iptv:modo-vista';
const CLAVE_PARENTAL_PIN = 'iptv:parental-pin';
const CLAVE_PARENTAL_BLOQUEOS = 'iptv:parental-bloqueos';
const CLAVE_SOLO_ACTIVOS = 'iptv:solo-activos';
const CLAVE_SYNC_ID = 'iptv:sync-id';

const URL_CANALES_JSON = './canales.json';
const URL_CANALES_M3U8 = './canales.m3u8';
const URL_FUENTES = './fuentes.json';
const URL_PROXY = 'https://iptv-proxy.eolivera119600.workers.dev';
const URL_WORKER = 'https://iptv-proxy.eolivera119600.workers.dev';

const estado = {
  listasGuardadas: [],
  listaActivaId: localStorage.getItem(CLAVE_LISTA_ACTIVA_ID) || 'oficial',
  canales: [],
  filtro: 'Todos',
  agrupacion: localStorage.getItem(CLAVE_AGRUPACION) || 'categoria',
  modoVista: localStorage.getItem(CLAVE_MODO_VISTA) || (window.innerWidth < 768 ? 'lista' : 'grilla'),
  soloFavoritos: false,
  soloDestacados: false,
  soloActivos: localStorage.getItem(CLAVE_SOLO_ACTIVOS) === '1',
  busqueda: '',
  indiceActual: -1,
  hls: null,
  idioma: localStorage.getItem(CLAVE_IDIOMA) || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es'),
  programacion: {},
  reintentosCanalActual: 0,
  parentalPin: localStorage.getItem(CLAVE_PARENTAL_PIN) || '',
  categoriasBloqueadas: JSON.parse(localStorage.getItem(CLAVE_PARENTAL_BLOQUEOS) || '[]'),
  hayMetadatos: false,
  // Sincronización
  syncId: localStorage.getItem(CLAVE_SYNC_ID) || '',
  syncTimeout: null,
  syncEnProgreso: false,
  // Canales caídos marcados desde el admin (id → true)
  caidosRemotos: {},
};

function cargarListasDeStorage() {
  try {
    const crudo = localStorage.getItem(CLAVE_MULTIPLE_LISTAS);
    return crudo ? JSON.parse(crudo) : [];
  } catch (e) {
    console.error('Error al cargar listas', e);
    return [];
  }
}

function guardarListasEnStorage() {
  localStorage.setItem(CLAVE_MULTIPLE_LISTAS, JSON.stringify(estado.listasGuardadas));
  localStorage.setItem(CLAVE_LISTA_ACTIVA_ID, estado.listaActivaId);
}

function cambiarListaActiva(id) {
  estado.listaActivaId = id;
  const listaEncontrada = estado.listasGuardadas.find(l => l.id === id);
  if (listaEncontrada) {
    estado.canales = listaEncontrada.canales;
  } else {
    estado.canales = [];
  }
  localStorage.setItem(CLAVE_LISTA_ACTIVA_ID, id);
  estado.filtro = 'Todos';
  estado.soloFavoritos = false;
  estado.soloDestacados = false;
  renderFiltros();
  renderGuia();
  actualizarSelectorListasHeader();
  renderListasGuardadasUI();
  renderControlParentalUI();
}

function cargarFavoritos() {
  try {
    const crudo = localStorage.getItem(CLAVE_FAVORITOS);
    const arr = crudo ? JSON.parse(crudo) : [];
    const soloNumericos = arr.length > 0 && arr.every((id) => /^c\d+$/.test(id));
    if (soloNumericos) {
      localStorage.removeItem(CLAVE_FAVORITOS);
      return new Set();
    }
    return new Set(arr);
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
  programarSincronizacionFavoritos();
}

estado.favoritos = cargarFavoritos();

function guardarUltimoVisto(id) {
  localStorage.setItem(CLAVE_ULTIMO, id);
}

function leerUltimoVisto() {
  return localStorage.getItem(CLAVE_ULTIMO);
}

/* =======================================================
   CANALES CAÍDOS (marcados desde el admin)
   ======================================================= */

/**
 * Baja la lista de canales marcados como caídos desde el Worker.
 * Se llama al arrancar la app y cada vez que se refresca.
 */
async function cargarCaidosDelWorker() {
  try {
    const resp = await fetch(`${URL_WORKER}/caidos`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    estado.caidosRemotos = data.caidos || {};
    return true;
  } catch (e) {
    console.warn('No se pudieron cargar los canales caídos del Worker:', e);
    return false;
  }
}

/**
 * Determina si un canal está caído. Combina:
 *  - El campo `estado` (heredado de canales.json / canales.m3u8).
 *  - Los canales marcados como caídos desde el admin (caidosRemotos).
 */
function esCanalCaido(canal) {
  if (!canal) return false;
  if (canal.estado === 'sin_respuesta' || canal.estado === 'dudoso') return true;
  if (estado.caidosRemotos && estado.caidosRemotos[canal.id]) return true;
  return false;
}

/* =======================================================
   EXPORTAR / IMPORTAR CONFIGURACIÓN
   ======================================================= */

const VERSION_BACKUP = 1;

function recolectarConfiguracion() {
  return {
    app: 'guia-de-canales',
    version: VERSION_BACKUP,
    exportado: new Date().toISOString(),
    listasGuardadas: estado.listasGuardadas,
    listaActivaId: estado.listaActivaId,
    favoritos: [...estado.favoritos],
    syncId: estado.syncId,
    parentalPin: estado.parentalPin,
    categoriasBloqueadas: estado.categoriasBloqueadas,
    idioma: estado.idioma,
    agrupacion: estado.agrupacion,
    modoVista: estado.modoVista,
    soloActivos: estado.soloActivos,
    ultimoCanal: leerUltimoVisto(),
  };
}

function exportarConfiguracion() {
  try {
    const config = recolectarConfiguracion();
    const json = JSON.stringify(config, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const fecha = new Date().toISOString().slice(0, 19).replace(/[T:]/g, '-');
    const nombreArchivo = `guia-canales-backup-${fecha}.json`;

    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    a.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);

    mostrarMensajeBackup(t('backup_export_ok'), 'ok');
  } catch (e) {
    console.error(e);
    mostrarMensajeBackup('No se pudo exportar: ' + e.message, 'error');
  }
}

async function importarConfiguracion(file) {
  try {
    const texto = await file.text();
    const datos = JSON.parse(texto);

    if (!datos || datos.app !== 'guia-de-canales') {
      mostrarMensajeBackup(t('backup_archivo_invalido'), 'error');
      return;
    }

    if (!confirm(t('backup_import_confirm'))) {
      return;
    }

    if (Array.isArray(datos.listasGuardadas) && datos.listasGuardadas.length > 0) {
      estado.listasGuardadas = datos.listasGuardadas;
      estado.listaActivaId = datos.listaActivaId || datos.listasGuardadas[0].id;
      guardarListasEnStorage();
    }

    if (Array.isArray(datos.favoritos)) {
      estado.favoritos = new Set(datos.favoritos);
      guardarFavoritos();
    }

    if (typeof datos.syncId === 'string') {
      estado.syncId = datos.syncId;
      if (datos.syncId) {
        localStorage.setItem(CLAVE_SYNC_ID, datos.syncId);
      } else {
        localStorage.removeItem(CLAVE_SYNC_ID);
      }
    }

    if (typeof datos.parentalPin === 'string') {
      estado.parentalPin = datos.parentalPin;
      localStorage.setItem(CLAVE_PARENTAL_PIN, datos.parentalPin);
    }
    if (Array.isArray(datos.categoriasBloqueadas)) {
      estado.categoriasBloqueadas = datos.categoriasBloqueadas;
      localStorage.setItem(CLAVE_PARENTAL_BLOQUEOS, JSON.stringify(datos.categoriasBloqueadas));
    }

    if (typeof datos.idioma === 'string') {
      estado.idioma = datos.idioma;
      localStorage.setItem(CLAVE_IDIOMA, datos.idioma);
    }
    if (typeof datos.agrupacion === 'string') {
      estado.agrupacion = datos.agrupacion;
      localStorage.setItem(CLAVE_AGRUPACION, datos.agrupacion);
    }
    if (typeof datos.modoVista === 'string') {
      estado.modoVista = datos.modoVista;
      localStorage.setItem(CLAVE_MODO_VISTA, datos.modoVista);
    }
    if (typeof datos.soloActivos === 'boolean') {
      estado.soloActivos = datos.soloActivos;
      localStorage.setItem(CLAVE_SOLO_ACTIVOS, datos.soloActivos ? '1' : '0');
    }
    if (typeof datos.ultimoCanal === 'string' && datos.ultimoCanal) {
      localStorage.setItem(CLAVE_ULTIMO, datos.ultimoCanal);
    }

    mostrarMensajeBackup(t('backup_import_ok'), 'ok');
    setTimeout(() => window.location.reload(), 1200);
  } catch (e) {
    console.error(e);
    mostrarMensajeBackup(t('backup_import_error'), 'error');
  }
}

function mostrarMensajeBackup(texto, tipo) {
  const cont = document.getElementById('backup-mensaje');
  if (!cont) return;
  cont.textContent = texto;
  cont.className = 'config__mensaje ' + tipo;
  if (tipo === 'ok') {
    setTimeout(() => {
      cont.className = 'config__mensaje';
    }, 5000);
  }
}

/* =======================================================
   QR PARA COMPARTIR SYNC ID
   ======================================================= */

function urlBaseApp() {
  const url = new URL(window.location.href);
  url.hash = '';
  url.search = '';
  return url.toString();
}

function construirLinkSync(syncId) {
  return `${urlBaseApp()}?sync=${encodeURIComponent(syncId)}`;
}

function urlQR(texto, tamano) {
  const size = tamano || 320;
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=8&data=${encodeURIComponent(texto)}`;
}

function abrirModalQR() {
  if (!estado.syncId) return;

  const previo = document.getElementById('modal-qr');
  if (previo) previo.remove();

  const link = construirLinkSync(estado.syncId);
  const qrUrl = urlQR(link, 320);

  const overlay = document.createElement('div');
  overlay.id = 'modal-qr';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.75);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; padding: 16px;
  `;

  overlay.innerHTML = `
    <div style="background: #111b21; color: #fff; padding: 24px; border-radius: 14px; max-width: 420px; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.6); text-align: center;">
      <h3 style="margin: 0 0 8px; font-size: 18px;">${t('qr_titulo')}</h3>
      <p style="margin: 0 0 16px; font-size: 13px; opacity: 0.75; line-height: 1.4;">${t('qr_ayuda')}</p>

      <div id="qr-contenedor" style="background: #fff; padding: 14px; border-radius: 10px; display: inline-block; margin-bottom: 14px;">
        <img id="qr-imagen" src="${qrUrl}" alt="QR" style="display: block; width: 260px; height: 260px; max-width: 100%;" onerror="this.parentElement.innerHTML='<div style=\\'padding:40px;color:#e50914;font-size:13px;\\'>${t('qr_error')}</div>';">
      </div>

      <div style="font-family: ui-monospace, monospace; font-size: 13px; background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 6px; margin-bottom: 14px; letter-spacing: 1px; word-break: break-all;">
        ${estado.syncId}
      </div>

      <div style="display: flex; gap: 8px; justify-content: center;">
        <button id="qr-copiar-link" class="boton-primario" style="padding: 10px 16px;">${t('qr_copiar_link')}</button>
        <button id="qr-cerrar" class="boton-secundario" style="padding: 10px 16px;">${t('qr_cerrar')}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const btnCopiar = overlay.querySelector('#qr-copiar-link');
  const btnCerrar = overlay.querySelector('#qr-cerrar');

  btnCerrar.addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  btnCopiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(link);
      btnCopiar.textContent = t('qr_link_copiado');
      setTimeout(() => { btnCopiar.textContent = t('qr_copiar_link'); }, 1500);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = link;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      btnCopiar.textContent = t('qr_link_copiado');
      setTimeout(() => { btnCopiar.textContent = t('qr_copiar_link'); }, 1500);
    }
  });
}

async function detectarInvitacionSync() {
  const params = new URLSearchParams(window.location.search);
  const syncIdInvitado = params.get('sync');

  if (!syncIdInvitado || !validarSyncId(syncIdInvitado)) return;

  if (estado.syncId === syncIdInvitado) {
    limpiarParamSync();
    return;
  }

  const aceptar = confirm(
    `${t('qr_invitacion_titulo')}\n\n` +
    `${t('qr_invitacion_texto')}: ${syncIdInvitado}\n\n` +
    `${t('qr_invitacion_pregunta')}`
  );

  if (aceptar) {
    await vincularSyncId(syncIdInvitado);
  }

  limpiarParamSync();
}

function limpiarParamSync() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete('sync');
    const nueva = url.pathname + (url.search ? url.search : '') + url.hash;
    window.history.replaceState({}, '', nueva);
  } catch {
    // Nada
  }
}

/* =======================================================
   SINCRONIZACIÓN DE FAVORITOS CON CLOUDFLARE WORKER
   ======================================================= */

function generarSyncId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  let id = '';
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  for (let i = 0; i < 12; i++) {
    id += chars[bytes[i] % chars.length];
  }
  return id;
}

function validarSyncId(id) {
  return /^[A-Za-z0-9_-]{8,64}$/.test(id);
}

function programarSincronizacionFavoritos() {
  if (!estado.syncId) return;
  if (estado.syncTimeout) clearTimeout(estado.syncTimeout);
  estado.syncTimeout = setTimeout(() => {
    subirFavoritosAlWorker().catch((e) => {
      console.warn('No se pudieron subir los favoritos:', e);
    });
  }, 1500);
}

async function subirFavoritosAlWorker() {
  if (!estado.syncId) return { ok: false, motivo: 'sin_syncid' };
  if (estado.syncEnProgreso) return { ok: false, motivo: 'en_progreso' };
  estado.syncEnProgreso = true;

  try {
    const resp = await fetch(`${URL_WORKER}/fav/${encodeURIComponent(estado.syncId)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ favoritos: [...estado.favoritos] }),
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    actualizarEstadoSyncUI(t('sync_ok_subida'), 'ok');
    return { ok: true, total: data.total };
  } catch (e) {
    actualizarEstadoSyncUI(t('sync_error'), 'error');
    throw e;
  } finally {
    estado.syncEnProgreso = false;
  }
}

async function bajarFavoritosDelWorker() {
  if (!estado.syncId) return { ok: false, motivo: 'sin_syncid' };

  try {
    actualizarEstadoSyncUI(t('sync_bajando'), 'info');
    const resp = await fetch(`${URL_WORKER}/fav/${encodeURIComponent(estado.syncId)}`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    const remotos = Array.isArray(data.favoritos) ? data.favoritos : [];

    if (data.vacio || remotos.length === 0) {
      actualizarEstadoSyncUI('Sin datos remotos, subiendo los locales...', 'info');
      await subirFavoritosAlWorker();
      return { ok: true, nuevos: 0, inicializado: true };
    }

    const antes = estado.favoritos.size;
    remotos.forEach((id) => estado.favoritos.add(id));
    const nuevos = estado.favoritos.size - antes;

    guardarFavoritos();
    renderGuia();

    if (nuevos > 0) {
      actualizarEstadoSyncUI(`${t('sync_ok_bajada')} · ${t('sync_fusionado')} (+${nuevos})`, 'ok');
    } else {
      actualizarEstadoSyncUI(t('sync_ok_bajada'), 'ok');
    }

    if (nuevos > 0) {
      programarSincronizacionFavoritos();
    }

    return { ok: true, nuevos };
  } catch (e) {
    actualizarEstadoSyncUI(t('sync_error'), 'error');
    throw e;
  }
}

async function vincularSyncId(id) {
  if (!validarSyncId(id)) {
    actualizarEstadoSyncUI('Código inválido (8-64 chars alfanuméricos)', 'error');
    return false;
  }
  estado.syncId = id;
  localStorage.setItem(CLAVE_SYNC_ID, id);
  renderSyncUI();
  actualizarEstadoSyncUI(t('sync_bajando'), 'info');
  try {
    await bajarFavoritosDelWorker();
    return true;
  } catch {
    return false;
  }
}

function desvincularSyncId() {
  estado.syncId = '';
  localStorage.removeItem(CLAVE_SYNC_ID);
  renderSyncUI();
}

async function borrarFavoritosDeLaNube() {
  if (!estado.syncId) return false;

  const syncIdABorrar = estado.syncId;

  try {
    actualizarEstadoSyncUI(t('sync_borrando'), 'info');
    const resp = await fetch(`${URL_WORKER}/fav/${encodeURIComponent(syncIdABorrar)}`, {
      method: 'DELETE',
      headers: { 'Accept': 'application/json' },
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);

    estado.syncId = '';
    localStorage.removeItem(CLAVE_SYNC_ID);
    renderSyncUI();
    actualizarEstadoSyncUI(t('sync_borrar_nube_ok'), 'ok');

    return true;
  } catch (e) {
    console.warn('Error al borrar favoritos de la nube:', e);
    actualizarEstadoSyncUI(t('sync_borrar_nube_error'), 'error');
    return false;
  }
}

function actualizarEstadoSyncUI(texto, tipo) {
  const elEstado = document.getElementById('sync-estado');
  if (!elEstado) return;
  elEstado.textContent = texto || '';
  elEstado.className = 'sync-estado' + (tipo ? ' sync-estado--' + tipo : '');
}

function renderSyncUI() {
  const cont = document.getElementById('sync-contenido');
  if (!cont) return;

  const vinculado = !!estado.syncId;

  cont.innerHTML = `
    <p style="font-size:13.5px; opacity:0.85; margin:0 0 12px;">${t('sync_descripcion')}</p>

    ${vinculado ? `
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:10px;">
        <span style="font-size:13px; opacity:0.75;">${t('sync_estado_vinculado')}:</span>
        <code id="sync-codigo-actual" style="font-size:15px; font-weight:600; background:rgba(229,9,20,0.15); padding:6px 10px; border-radius:6px; letter-spacing:1px;">${estado.syncId}</code>
        <button id="sync-copiar" class="boton-secundario" style="padding:6px 12px;">${t('sync_copiar')}</button>
        <button id="sync-qr" class="boton-secundario" style="padding:6px 12px;">${t('qr_boton')}</button>
        <button id="sync-desvincular" class="boton-secundario" style="padding:6px 12px;">${t('sync_desvincular')}</button>
        <button id="sync-borrar-nube" class="boton-secundario" style="padding:6px 12px; color:#ff4d4d; border-color:rgba(255,77,77,0.4);">${t('sync_borrar_nube')}</button>
      </div>
      <div id="sync-estado" class="sync-estado"></div>
    ` : `
      <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:10px;">
        <input id="sync-input" type="text" maxlength="64" placeholder="${t('sync_code_placeholder')}" style="flex:1; min-width:200px; padding:8px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.15); background:rgba(0,0,0,0.25); color:inherit; font-size:14px;">
        <button id="sync-vincular" class="boton-primario" style="padding:8px 14px;">${t('sync_vincular')}</button>
      </div>
      <div style="margin-bottom:8px;">
        <button id="sync-generar" class="boton-secundario" style="padding:8px 14px;">${t('sync_generar')}</button>
      </div>
      <div id="sync-estado" class="sync-estado"></div>
    `}
  `;

  const btnCopiar = document.getElementById('sync-copiar');
  if (btnCopiar) {
    btnCopiar.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(estado.syncId);
        btnCopiar.textContent = t('sync_copiado');
        setTimeout(() => { btnCopiar.textContent = t('sync_copiar'); }, 1500);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = estado.syncId;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        btnCopiar.textContent = t('sync_copiado');
        setTimeout(() => { btnCopiar.textContent = t('sync_copiar'); }, 1500);
      }
    });
  }

  const btnQR = document.getElementById('sync-qr');
  if (btnQR) {
    btnQR.addEventListener('click', abrirModalQR);
  }

  const btnDesvincular = document.getElementById('sync-desvincular');
  if (btnDesvincular) {
    btnDesvincular.addEventListener('click', () => {
      if (confirm('¿Desvincular este dispositivo? Los favoritos seguirán guardados en la nube con el código ' + estado.syncId)) {
        desvincularSyncId();
      }
    });
  }

  const btnBorrarNube = document.getElementById('sync-borrar-nube');
  if (btnBorrarNube) {
    btnBorrarNube.addEventListener('click', async () => {
      if (!confirm(t('sync_borrar_nube_confirm'))) return;
      btnBorrarNube.disabled = true;
      btnBorrarNube.textContent = t('sync_borrando');
      await borrarFavoritosDeLaNube();
    });
  }

  const btnGenerar = document.getElementById('sync-generar');
  if (btnGenerar) {
    btnGenerar.addEventListener('click', async () => {
      const nuevoId = generarSyncId();
      await vincularSyncId(nuevoId);
    });
  }

  const btnVincular = document.getElementById('sync-vincular');
  if (btnVincular) {
    btnVincular.addEventListener('click', async () => {
      const input = document.getElementById('sync-input');
      const id = (input?.value || '').trim();
      if (!id) {
        actualizarEstadoSyncUI(t('sync_pedir_codigo'), 'error');
        return;
      }
      await vincularSyncId(id);
    });
  }

  const input = document.getElementById('sync-input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('sync-vincular')?.click();
      }
    });
  }
}

/* =======================================================
   Carga de canales oficiales (JSON -> M3U8 -> fuentes.json)
   ======================================================= */

async function cargarCanalesOficiales() {
  try {
    const resp = await fetch(URL_CANALES_JSON, { cache: 'no-store' });
    if (resp.ok) {
      const datos = await resp.json();
      const lista = Array.isArray(datos) ? datos : (datos.canales || []);
      const normalizados = normalizarDesdeJSON(lista);
      if (normalizados.length > 0) {
        console.info(`[canales] Fuente: canales.json (${normalizados.length} canales)`);
        return { canales: normalizados, fuente: 'json' };
      }
    }
  } catch (e) {
    console.warn('No se pudo leer canales.json:', e);
  }

  try {
    const resp = await fetch(URL_CANALES_M3U8, { cache: 'no-store' });
    if (resp.ok) {
      const texto = await resp.text();
      const normalizados = normalizarCanales(parsearM3U(texto));
      if (normalizados.length > 0) {
        console.info(`[canales] Fuente: canales.m3u8 (${normalizados.length} canales)`);
        return { canales: normalizados, fuente: 'm3u8' };
      }
    }
  } catch (e) {
    console.warn('No se pudo leer canales.m3u8:', e);
  }

  try {
    const combinados = await obtenerListaCombinadaDesdeFuentes();
    if (combinados.length > 0) {
      console.info(`[canales] Fuente: fuentes.json (${combinados.length} canales)`);
      return { canales: combinados, fuente: 'fuentes' };
    }
  } catch (e) {
    console.warn('No se pudo leer fuentes.json:', e);
  }

  console.warn('[canales] No se encontró ninguna fuente válida');
  return { canales: [], fuente: null };
}

function normalizarDesdeJSON(lista) {
  return lista
    .filter((c) => c && (c.url || c.stream))
    .map((c, i) => {
      const url = c.url || c.stream || '';
      const pais = (c.tvg_country || c.pais || c.country || '').toString().toUpperCase();
      const grupo = c.grupo || c.group || c.group_title || 'General';
      const nombre = c.nombre || c.name || 'Sin nombre';
      const logo = c.tvg_logo || c.logo || '';
      const tvgId = c.tvg_id || c.tvgId || c['tvg-id'] || '';
      const estadoCanal = c.estado || '';
      return {
        id: 'c_' + hashUrl(url),
        numero: String(i + 1).padStart(2, '0'),
        nombre,
        url,
        logo,
        grupo,
        pais,
        tvgId,
        estado: estadoCanal,
        geobloqueado: !!c.geobloqueado,
        inestable: !!c.inestable,
        youtube: !!c.youtube,
      };
    });
}

/* =======================================================
   Parsers
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

  if (fuentes.length === 0) return [];

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
  let caido = false;

  for (const linea of lineas) {
    if (linea.startsWith('#EXTM3U')) continue;

    if (/^#\s*\[CAIDO/.test(linea)) {
      caido = true;
      continue;
    }

    if (linea.startsWith('#EXTINF')) {
      const nombre = linea.split(',').pop().trim();
      pendiente = {
        nombre: nombre || 'Sin nombre',
        logo: extraerAtributo(linea, 'tvg-logo'),
        grupo: extraerAtributo(linea, 'group-title') || 'General',
        pais: extraerAtributo(linea, 'tvg-country').toUpperCase(),
        tvgId: extraerAtributo(linea, 'tvg-id'),
        estado: caido ? 'sin_respuesta' : '',
      };
      caido = false;
    } else if (!linea.startsWith('#')) {
      if (pendiente) {
        canales.push({ ...pendiente, url: linea });
        pendiente = null;
      } else {
        canales.push({ nombre: linea, logo: '', grupo: 'General', pais: '', tvgId: '', url: linea, estado: '' });
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
    estado: c.estado || '',
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

/* =======================================================
   ID estable por hash de URL
   ======================================================= */

function hashUrl(url) {
  let h = 0x811c9dc5;
  for (let i = 0; i < url.length; i++) {
    h ^= url.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

function normalizarCanales(crudos) {
  return crudos
    .filter((c) => c.url)
    .map((c, i) => ({
      id: 'c_' + hashUrl(c.url),
      numero: String(i + 1).padStart(2, '0'),
      nombre: c.nombre,
      url: c.url,
      logo: c.logo || '',
      grupo: c.grupo || 'General',
      pais: c.pais || '',
      tvgId: c.tvgId || '',
      estado: c.estado || '',
      geobloqueado: !!c.geobloqueado,
      inestable: !!c.inestable,
      youtube: !!c.youtube,
    }));
}

/* =======================================================
   EPG
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
    resp = await fetch(URL_PROXY + '/proxy?url=' + encodeURIComponent(url), { cache: 'no-store' });
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
   Render
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

function agrupacionEfectiva() {
  return estado.agrupacion === 'pais' && hayPaisesEnLista() ? 'pais' : 'categoria';
}

function gruposDisponibles() {
  if (agrupacionEfectiva() === 'pais') {
    const set = new Set(estado.canales.map((c) => c.pais || ''));
    const codigos = Array.from(set)
      .filter(Boolean)
      .sort((a, b) => nombrePais(a).localeCompare(nombrePais(b), estado.idioma));
    return set.has('') ? [...codigos, ''] : codigos;
  }
  const set = new Set(estado.canales.map((c) => c.grupo));
  return Array.from(set).sort();
}

function etiquetaGrupo(valor) {
  if (agrupacionEfectiva() === 'pais') {
    return valor ? `${bandera(valor)} ${nombrePais(valor)}` : t('sin_pais');
  }
  return valor;
}

function renderFiltros() {
  el.filtros.innerHTML = '';
  el.agrupar.hidden = !hayPaisesEnLista();

  if (estado.canales.length === 0) return;

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

  if (estado.hayMetadatos) {
    const chipActivos = document.createElement('button');
    chipActivos.className = 'filtro' + (estado.soloActivos ? ' activo' : '');
    chipActivos.textContent = '\u2713 ' + t('solo_activos');
    chipActivos.tabIndex = 0;
    chipActivos.addEventListener('click', () => {
      estado.soloActivos = !estado.soloActivos;
      localStorage.setItem(CLAVE_SOLO_ACTIVOS, estado.soloActivos ? '1' : '0');
      renderFiltros();
      renderGuia();
    });
    el.filtros.appendChild(chipActivos);
  }

  const grupos = gruposDisponibles().filter(g => !estado.categoriasBloqueadas.includes(g));
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
    if (estado.categoriasBloqueadas.includes(c.grupo)) return false;

    if (estado.soloActivos && esCanalCaido(c)) return false;
    if (estado.soloFavoritos && !esFavorito(c.id)) return false;
    if (estado.soloDestacados && !esCanalDestacado(c)) return false;

    const valorGrupo = agrupacionEfectiva() === 'pais' ? (c.pais || '') : c.grupo;
    const pasaGrupo = estado.filtro === 'Todos' || valorGrupo === estado.filtro || estado.soloFavoritos || estado.soloDestacados;

    if (!q) return pasaGrupo;

    const coincideCanal = c.nombre.toLowerCase().includes(q) || c.grupo.toLowerCase().includes(q);
    const actual = programaActual(c.tvgId);
    const siguiente = programaSiguiente(c.tvgId);

    const coincidePrograma = (actual && (actual.titulo.toLowerCase().includes(q) || actual.descripcion.toLowerCase().includes(q))) ||
                             (siguiente && (siguiente.titulo.toLowerCase().includes(q) || siguiente.descripcion.toLowerCase().includes(q)));

    return pasaGrupo && (coincideCanal || coincidePrograma);
  });
}

function renderGuia() {
  const lista = canalesFiltrados();
  el.guia.innerHTML = '';
  el.guia.className = 'guia-contenedor modo-' + estado.modoVista;

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
    frag.appendChild(estado.modoVista === 'grilla' ? filaCanalGrid(canal) : filaCanalLista(canal));
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

function filaCanalLista(canal) {
  const fila = document.createElement('div');
  fila.className = 'fila-canal modo-lista';
  if (esCanalCaido(canal)) fila.classList.add('canal-caido');
  fila.dataset.id = canal.id;
  fila.setAttribute('role', 'button');
  fila.tabIndex = 0;

  const logoHtml = canal.logo
    ? `<img src="${canal.logo}" alt="" loading="lazy" onerror="this.parentElement.textContent='${canal.nombre.slice(0, 2).toUpperCase()}'">`
    : canal.nombre.slice(0, 2).toUpperCase();

  const banderaHtml = canal.pais ? `<span class="fila-canal__bandera">${bandera(canal.pais)}</span>` : '';
  const enCurso = programaActual(canal.tvgId);
  const marcaCaido = esCanalCaido(canal) ? `<span class="fila-canal__caido" title="${t('canal_caido')}">⚠</span>` : '';

  fila.innerHTML = `
    <span class="fila-canal__numero">${canal.numero}</span>
    <span class="fila-canal__logo">${logoHtml}</span>
    <span class="fila-canal__info">
      <span class="fila-canal__nombre">${canal.nombre} ${marcaCaido}</span>
      <span class="fila-canal__grupo">${banderaHtml}${canal.grupo} ${enCurso ? '\u00b7 ' + enCurso.titulo : ''}</span>
    </span>
    <button class="fila-canal__favorito ${esFavorito(canal.id) ? 'activo' : ''}" aria-label="Favorito" data-id="${canal.id}" tabIndex="-1">${esFavorito(canal.id) ? '\u2605' : '\u2606'}</button>
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

function filaCanalGrid(canal) {
  const fila = document.createElement('div');
  fila.className = 'fila-canal modo-grilla';
  if (esCanalCaido(canal)) fila.classList.add('canal-caido');
  fila.dataset.id = canal.id;
  fila.setAttribute('role', 'button');
  fila.tabIndex = 0;

  const logoHtml = canal.logo
    ? `<img src="${canal.logo}" alt="" loading="lazy" onerror="this.parentElement.textContent='${canal.nombre.slice(0, 2).toUpperCase()}'">`
    : canal.nombre.slice(0, 2).toUpperCase();

  const banderaHtml = canal.pais ? `<span class="fila-canal__bandera">${bandera(canal.pais)}</span>` : '';

  const enCurso = programaActual(canal.tvgId);
  const siguiente = programaSiguiente(canal.tvgId);

  let epgGridHtml = '';
  if (enCurso) {
    const inicioMs = new Date(enCurso.inicio).getTime();
    const finMs = new Date(enCurso.fin).getTime();
    const pct = Math.min(100, Math.max(0, ((Date.now() - inicioMs) / (finMs - inicioMs)) * 100));

    epgGridHtml = `
      <div class="fila-canal__grid">
        <div class="programa-bloque actual">
          <span class="programa-titulo">${enCurso.titulo}</span>
          <span class="programa-horario">${formatoHora(enCurso.inicio)} - ${formatoHora(enCurso.fin)}</span>
          <span class="fila-canal__programa-barra"><span style="width:${pct.toFixed(1)}%"></span></span>
        </div>
        ${siguiente ? `
          <div class="programa-bloque siguiente">
            <span class="programa-titulo">${siguiente.titulo}</span>
            <span class="programa-horario">${formatoHora(siguiente.inicio)}</span>
          </div>
        ` : ''}
      </div>
    `;
  } else {
    epgGridHtml = `<span class="fila-canal__sin-epg">${t('sin_epg')}</span>`;
  }

  const marcaCaido = esCanalCaido(canal) ? `<span class="fila-canal__caido" title="${t('canal_caido')}">⚠</span>` : '';

  fila.innerHTML = `
    <span class="fila-canal__numero">${canal.numero}</span>
    <span class="fila-canal__logo">${logoHtml}</span>
    <span class="fila-canal__info">
      <span class="fila-canal__nombre">${canal.nombre} ${marcaCaido}</span>
      <span class="fila-canal__grupo">${banderaHtml}${canal.grupo}</span>
      ${epgGridHtml}
    </span>
    <button class="fila-canal__favorito ${esFavorito(canal.id) ? 'activo' : ''}" aria-label="Favorito" data-id="${canal.id}" tabIndex="-1">${esFavorito(canal.id) ? '\u2605' : '\u2606'}</button>
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
   Selector de Vista
   ======================================================= */

function actualizarBotonVista() {
  const btn = document.getElementById('boton-vista');
  if (btn) {
    btn.textContent = estado.modoVista === 'grilla' ? t('vista_grilla') : t('vista_lista');
  }
}

function alternarModoVista() {
  estado.modoVista = estado.modoVista === 'lista' ? 'grilla' : 'lista';
  localStorage.setItem(CLAVE_MODO_VISTA, estado.modoVista);
  actualizarBotonVista();
  renderGuia();
}

/* =======================================================
   Selector de Listas y Control Parental UI
   ======================================================= */

function actualizarSelectorListasHeader() {
  const selectHeader = document.getElementById('select-lista-header');
  if (!selectHeader) return;

  selectHeader.innerHTML = '';
  estado.listasGuardadas.forEach((l) => {
    const opt = document.createElement('option');
    opt.value = l.id;
    opt.textContent = `${l.nombre} (${l.canales.length})`;
    opt.selected = l.id === estado.listaActivaId;
    selectHeader.appendChild(opt);
  });

  selectHeader.hidden = estado.listasGuardadas.length <= 1;
}

function renderListasGuardadasUI() {
  const cont = document.getElementById('listas-guardadas-lista');
  if (!cont) return;

  cont.innerHTML = '';
  if (estado.listasGuardadas.length === 0) return;

  estado.listasGuardadas.forEach((l) => {
    const item = document.createElement('div');
    item.style.cssText = 'display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.05); padding:10px 14px; margin-top:8px; border-radius:6px;';

    item.innerHTML = `
      <div>
        <strong>${l.nombre}</strong> <span style="font-size:12px; opacity:0.7;">(${l.canales.length} canales)</span>
      </div>
      <div>
        <button class="boton-secundario" style="margin-right:6px;" ${l.id === estado.listaActivaId ? 'disabled' : ''}>${l.id === estado.listaActivaId ? 'Activa' : 'Usar'}</button>
        ${l.id !== 'oficial' ? '<button class="boton-secundario" style="color:#ff4d4d;">\u2715</button>' : ''}
      </div>
    `;

    const btns = item.querySelectorAll('button');
    if (l.id !== estado.listaActivaId) {
      btns[0].addEventListener('click', () => cambiarListaActiva(l.id));
    }
    if (l.id !== 'oficial') {
      const btnBorrar = btns[1] || btns[0];
      btnBorrar.addEventListener('click', () => {
        estado.listasGuardadas = estado.listasGuardadas.filter(itemL => itemL.id !== l.id);
        if (estado.listaActivaId === l.id) {
          estado.listaActivaId = estado.listasGuardadas[0]?.id || 'oficial';
        }
        guardarListasEnStorage();
        cambiarListaActiva(estado.listaActivaId);
      });
    }

    cont.appendChild(item);
  });
}

function renderControlParentalUI() {
  const cont = document.getElementById('parental-categorias');
  const inputPin = document.getElementById('campo-pin-parental');
  if (!cont || !inputPin) return;

  inputPin.value = estado.parentalPin;
  cont.innerHTML = '';

  const gruposUnicos = Array.from(new Set(estado.canales.map(c => c.grupo))).sort();
  if (gruposUnicos.length === 0) {
    cont.innerHTML = '<div style="font-size:12.5px; opacity:0.6;">Carga canales para configurar bloqueos.</div>';
    return;
  }

  gruposUnicos.forEach(g => {
    const block = document.createElement('label');
    block.style.cssText = 'display:flex; align-items:center; gap:8px; margin-top:6px; font-size:13.5px; cursor:pointer;';

    const isChecked = estado.categoriasBloqueadas.includes(g);
    block.innerHTML = `
      <input type="checkbox" value="${g}" ${isChecked ? 'checked' : ''} style="width:16px; height:16px; accent-color:#e50914;">
      <span>${g}</span>
    `;
    cont.appendChild(block);
  });
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
   Reproductor HLS
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
  botonReportar: document.getElementById('boton-reportar'),
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

  if (estado.categoriasBloqueadas.includes(canal.grupo) && estado.parentalPin) {
    const pinIngresado = prompt(t('ingrese_pin'));
    if (pinIngresado !== estado.parentalPin) {
      alert(t('pin_incorrecto'));
      return;
    }
  }

  estado.indiceActual = estado.canales.findIndex((c) => c.id === id);
  estado.reintentosCanalActual = 0;
  guardarUltimoVisto(id);
  abrirReproductor();
  cargarStream(canal);
}

function buscarCanalRespaldo(canalFallido) {
  const nombreLimpio = canalFallido.nombre.replace(/Opci[oó]n\s*\d+/i, '').trim().toLowerCase();
  return estado.canales.find((c) => c.id !== canalFallido.id && c.nombre.toLowerCase().includes(nombreLimpio));
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
  rp.botonReportar.hidden = false;
  actualizarBotonFavoritoReproductor(canal.id);
  actualizarProgramaReproductor(canal.tvgId);
  if (temporizadorPrograma) clearInterval(temporizadorPrograma);
  temporizadorPrograma = setInterval(() => actualizarProgramaReproductor(canal.tvgId), 30000);

  const urlEfectiva = (intentarProxy && URL_PROXY)
    ? URL_PROXY + '/proxy?url=' + encodeURIComponent(canal.url)
    : canal.url;

  const marcarEnVivo = (res) => {
    rp.estadoTexto.textContent = `${t('en_vivo')} ${res ? '\u00b7 ' + res + 'p' : ''}`;
  };

  const manejarFalloStream = () => {
    const canalRespaldo = buscarCanalRespaldo(canal);
    if (canalRespaldo && estado.reintentosCanalActual === 0) {
      estado.reintentosCanalActual++;
      rp.estadoTexto.textContent = t('reintentando');
      reproducirCanalPorId(canalRespaldo.id);
    } else {
      rp.seccion.classList.add('con-error');
    }
  };

  if (window.Hls && Hls.isSupported()) {
    const hls = new Hls({ enableWorker: true });
    estado.hls = hls;
    hls.loadSource(urlEfectiva);
    hls.attachMedia(rp.video);

    hls.on(Hls.Events.LEVEL_SWITCHED, (_evt, data) => {
      const nivel = hls.levels[data.level];
      if (nivel && nivel.height) marcarEnVivo(nivel.height);
    });

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
            if (!intentarProxy && URL_PROXY) {
              cargarStream(canal, true);
            } else {
              manejarFalloStream();
            }
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            hls.recoverMediaError();
            break;
          default:
            manejarFalloStream();
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
      manejarFalloStream();
    }, { once: true });
  } else {
    manejarFalloStream();
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
   Reportar canal caído
   ======================================================= */

function abrirDialogoReporte() {
  const canal = estado.canales[estado.indiceActual];
  if (!canal) return;

  const previo = document.getElementById('dialogo-reporte');
  if (previo) previo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'dialogo-reporte';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.7);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; padding: 16px;
  `;

  overlay.innerHTML = `
    <div style="background: #1a1a1a; color: #fff; padding: 20px; border-radius: 12px; max-width: 420px; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
      <h3 style="margin: 0 0 12px; font-size: 18px;">⚠ Reportar problema</h3>
      <p style="margin: 0 0 16px; font-size: 13px; opacity: 0.75;">
        Canal: <strong>${canal.nombre}</strong>
      </p>

      <label style="display:block; font-size: 13px; margin-bottom: 6px;">Motivo</label>
      <select id="reporte-motivo" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #222; color: #fff; font-size: 14px; margin-bottom: 12px;">
        <option value="caido">No funciona / caído</option>
        <option value="lento">Va lento / se corta</option>
        <option value="sin_audio">Sin audio</option>
        <option value="sin_video">Sin video</option>
        <option value="calidad_mala">Calidad mala</option>
        <option value="otro">Otro</option>
      </select>

      <label style="display:block; font-size: 13px; margin-bottom: 6px;">Comentario (opcional)</label>
      <textarea id="reporte-comentario" maxlength="500" rows="3"
        style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: #222; color: #fff; font-size: 14px; resize: vertical; margin-bottom: 16px;"
        placeholder="Ej: desde ayer no carga..."></textarea>

      <div id="reporte-mensaje" style="font-size: 13px; min-height: 18px; margin-bottom: 12px;"></div>

      <div style="display: flex; gap: 10px; justify-content: flex-end;">
        <button id="reporte-cancelar" style="padding: 10px 16px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); background: transparent; color: #fff; cursor: pointer; font-size: 14px;">
          Cancelar
        </button>
        <button id="reporte-enviar" style="padding: 10px 16px; border-radius: 6px; border: none; background: #e50914; color: #fff; cursor: pointer; font-size: 14px; font-weight: 600;">
          Enviar reporte
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const selMotivo = overlay.querySelector('#reporte-motivo');
  const txtComentario = overlay.querySelector('#reporte-comentario');
  const mensaje = overlay.querySelector('#reporte-mensaje');
  const btnCancelar = overlay.querySelector('#reporte-cancelar');
  const btnEnviar = overlay.querySelector('#reporte-enviar');

  btnCancelar.addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  btnEnviar.addEventListener('click', async () => {
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Enviando...';
    mensaje.textContent = '';
    mensaje.style.color = '#60a5fa';

    try {
      const resp = await fetch(`${URL_WORKER}/reportes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          canalId: canal.id,
          canalNombre: canal.nombre,
          canalUrl: canal.url,
          motivo: selMotivo.value,
          comentario: txtComentario.value.trim(),
        }),
      });
      const data = await resp.json();

      if (data.ok) {
        mensaje.style.color = '#4ade80';
        mensaje.textContent = data.duplicado
          ? '✓ Ya habías reportado este canal hace poco.'
          : '✓ ¡Gracias! Reporte enviado.';
        setTimeout(() => overlay.remove(), 1500);
      } else {
        throw new Error(data.error || 'Error desconocido');
      }
    } catch (e) {
      console.error(e);
      mensaje.style.color = '#ff6b6b';
      mensaje.textContent = '✗ No se pudo enviar. Revisá tu conexión.';
      btnEnviar.disabled = false;
      btnEnviar.textContent = 'Enviar reporte';
    }
  });
}

if (rp.botonReportar) {
  rp.botonReportar.addEventListener('click', abrirDialogoReporte);
}

/* =======================================================
   Navegacion entre pantallas
   ======================================================= */

function irAConfig() {
  el.pantallaGuia.classList.remove('activa');
  el.pantallaConfig.classList.add('activa');
  renderControlParentalUI();
  renderSyncUI();
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
  nombreLista: document.getElementById('campo-nombre-lista'),
  mensaje: document.getElementById('config-mensaje'),
  botonCargar: document.getElementById('boton-cargar'),
  botonLimpiar: document.getElementById('boton-limpiar'),
  campoPinParental: document.getElementById('campo-pin-parental'),
  botonGuardarParental: document.getElementById('boton-guardar-parental'),
  botonExportar: document.getElementById('boton-exportar'),
  botonImportar: document.getElementById('boton-importar'),
  campoImportar: document.getElementById('campo-importar'),
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
    if (tabActiva === 'url') {
      const url = cfg.url.value.trim();
      if (!url) { mostrarMensaje(t('ingresa_url'), 'error'); return; }
      cfg.botonCargar.textContent = t('cargando');
      const resp = await fetch(url);
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      texto = await resp.text();
    } else if (tabActiva === 'archivo') {
      if (!contenidoArchivo) { mostrarMensaje(t('elegi_archivo'), 'error'); return; }
      texto = contenidoArchivo;
    } else {
      texto = cfg.texto.value.trim();
      if (!texto) { mostrarMensaje(t('pega_contenido'), 'error'); return; }
    }

    const crudos = parsearContenido(texto);
    const canales = normalizarCanales(crudos);

    if (canales.length === 0) {
      mostrarMensaje(t('sin_canales_validos'), 'error');
      return;
    }

    const idLista = 'lista_' + Date.now();
    const nombrePers = (cfg.nombreLista && cfg.nombreLista.value.trim()) || (`Lista ${estado.listasGuardadas.length + 1}`);

    estado.listasGuardadas.push({ id: idLista, nombre: nombrePers, canales });
    guardarListasEnStorage();
    cambiarListaActiva(idLista);

    if (cfg.nombreLista) cfg.nombreLista.value = '';
    mostrarMensaje(`${canales.length} canales guardados en "${nombrePers}" \u2713`, 'ok');
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
  localStorage.removeItem(CLAVE_MULTIPLE_LISTAS);
  localStorage.removeItem(CLAVE_LISTA_ACTIVA_ID);

  const { canales: oficiales } = await cargarCanalesOficiales();
  estado.listasGuardadas = [{ id: 'oficial', nombre: 'Oficial', canales: oficiales }];
  estado.listaActivaId = 'oficial';

  guardarListasEnStorage();
  cambiarListaActiva('oficial');
  mostrarMensaje(t('lista_borrada'), 'ok');
});

if (cfg.botonExportar) {
  cfg.botonExportar.addEventListener('click', exportarConfiguracion);
}

if (cfg.botonImportar && cfg.campoImportar) {
  cfg.botonImportar.addEventListener('click', () => {
    cfg.campoImportar.value = '';
    cfg.campoImportar.click();
  });

  cfg.campoImportar.addEventListener('change', async () => {
    const f = cfg.campoImportar.files[0];
    if (!f) return;
    await importarConfiguracion(f);
  });
}

if (cfg.botonGuardarParental) {
  cfg.botonGuardarParental.addEventListener('click', () => {
    estado.parentalPin = cfg.campoPinParental.value.trim();
    localStorage.setItem(CLAVE_PARENTAL_PIN, estado.parentalPin);

    const checkboxes = document.querySelectorAll('#parental-categorias input[type="checkbox"]');
    const bloqueadas = [];
    checkboxes.forEach(cb => {
      if (cb.checked) bloqueadas.push(cb.value);
    });

    estado.categoriasBloqueadas = bloqueadas;
    localStorage.setItem(CLAVE_PARENTAL_BLOQUEOS, JSON.stringify(bloqueadas));

    renderFiltros();
    renderGuia();
    mostrarMensaje('Configuracion parental guardada \u2713', 'ok');
  });
}

/* =======================================================
   Actualización Rápida
   ======================================================= */

async function forzarActualizacionServidor() {
  const btnActualizar = document.getElementById('boton-actualizar-guia');
  if (btnActualizar) {
    btnActualizar.textContent = '⏳ Actualizando...';
    btnActualizar.disabled = true;
  }

  try {
    localStorage.removeItem(CLAVE_MULTIPLE_LISTAS);
    localStorage.removeItem(CLAVE_LISTA_ACTIVA_ID);

    const { canales: canalesOficiales } = await cargarCanalesOficiales();
    estado.listasGuardadas = [{ id: 'oficial', nombre: 'Oficial', canales: canalesOficiales }];
    estado.listaActivaId = 'oficial';

    guardarListasEnStorage();
    cambiarListaActiva('oficial');

    // Refresca también los caídos desde el Worker
    await cargarCaidosDelWorker();
    renderGuia();

    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
    }

    alert(t('actualizar_toast'));
  } catch (e) {
    console.error('Error al actualizar la guía:', e);
    alert('No se pudo actualizar. Revisa tu conexión a internet.');
  } finally {
    if (btnActualizar) {
      btnActualizar.textContent = '🔄 ' + t('actualizar_guia');
      btnActualizar.disabled = false;
    }
  }
}

const btnActualizarGuia = document.getElementById('boton-actualizar-guia');
if (btnActualizarGuia) {
  btnActualizarGuia.addEventListener('click', forzarActualizacionServidor);
}

/* =======================================================
   Eventos generales y Control Remoto
   ======================================================= */

document.getElementById('boton-config').addEventListener('click', irAConfig);
document.getElementById('boton-volver').addEventListener('click', irAGuia);
document.getElementById('boton-cerrar-reproductor').addEventListener('click', cerrarReproductor);
document.getElementById('boton-canal-anterior').addEventListener('click', () => cambiarCanal(-1));
document.getElementById('boton-canal-siguiente').addEventListener('click', () => cambiarCanal(1));

const selectHeader = document.getElementById('select-lista-header');
if (selectHeader) {
  selectHeader.addEventListener('change', (e) => cambiarListaActiva(e.target.value));
}

const btnVista = document.getElementById('boton-vista');
if (btnVista) btnVista.addEventListener('click', alternarModoVista);

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
   Arranque e Inicialización
   ======================================================= */

async function iniciar() {
  document.querySelectorAll('.agrupar__opcion').forEach((b) => {
    b.classList.toggle('activo', b.dataset.agrupar === estado.agrupacion);
  });

  const listasLocales = cargarListasDeStorage();
  if (listasLocales.length > 0) {
    estado.listasGuardadas = listasLocales;
    estado.hayMetadatos = listasLocales.some(l => l.canales.some(c => 'estado' in c));
  } else {
    const { canales: canalesOficiales, fuente } = await cargarCanalesOficiales();
    estado.listasGuardadas = [{ id: 'oficial', nombre: 'Oficial', canales: canalesOficiales }];
    estado.hayMetadatos = fuente === 'json';
    guardarListasEnStorage();
  }

  cambiarListaActiva(estado.listaActivaId);

  if (!localStorage.getItem(CLAVE_AGRUPACION) && hayPaisesEnLista()) {
    estado.agrupacion = 'pais';
  }
  document.querySelectorAll('.agrupar__opcion').forEach((b) => {
    b.classList.toggle('activo', b.dataset.agrupar === agrupacionEfectiva());
  });

  aplicarIdioma();

  // Baja canales caídos del Worker (independiente de sync de favoritos)
  cargarCaidosDelWorker().then(() => renderGuia());

  // Detectar invitación por QR (?sync=XXXX) antes de bajar favoritos
  detectarInvitacionSync().then(() => {
    if (estado.syncId) {
      bajarFavoritosDelWorker().catch((e) => {
        console.warn('No se pudieron bajar los favoritos al arrancar:', e);
      });
    }
  });

  cargarProgramacion()
    .then((programacion) => {
      estado.programacion = programacion;
      renderGuia();
    })
    .catch((e) => console.warn('No se pudo cargar la EPG', e));
}

iniciar();
