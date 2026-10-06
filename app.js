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
    canal_caido: 'Canal caído',
    limpiar_filtros: '🧹 Limpiar filtros',
    ver_mas_canales: 'Ver más canales',
    cargando_mas: 'Cargando más...',
    no_hay_mas: 'No hay más canales',
    sync_titulo: 'Sincronizar favoritos entre dispositivos',
    sync_descripcion: 'Generá un código y usá el mismo en todos tus dispositivos (celu, TV, tablet) para compartir favoritos.',
    sync_generar: 'Generar código nuevo',
    sync_vincular: 'Vincular este dispositivo',
    sync_desvincular: 'Desvincular',
    sync_copiar: 'Copiar',
    sync_copiado: '¡Copiado!',
    sync_estado_vinculado: 'Vinculado con el código',
    sync_code_placeholder: 'Pegá el código de otro dispositivo',
    sync_error: 'No se pudo sincronizar. Revisá tu conexión.',
    sync_ok_subida: 'Favoritos subidos',
    sync_ok_bajada: 'Favoritos recibidos',
    sync_fusionado: 'Favoritos combinados',
    sync_bajando: 'Bajando...',
    sync_pedir_codigo: 'Primero generá o pegá un código.',
    sync_borrar_nube: '🗑 Borrar de la nube',
    sync_borrar_nube_confirm: '¿Borrar TODOS los favoritos guardados en la nube con este código?\n\nEsta acción NO se puede deshacer.',
    sync_borrar_nube_ok: 'Favoritos borrados de la nube. Este dispositivo quedó desvinculado.',
    sync_borrar_nube_error: 'No se pudieron borrar los favoritos de la nube.',
    sync_borrando: 'Borrando...',
    backup_titulo: 'Backup de configuración',
    backup_desc: 'Guardá toda tu configuración en un archivo.',
    backup_exportar: '⬇ Exportar',
    backup_importar: '⬆ Importar',
    backup_export_ok: 'Configuración exportada correctamente.',
    backup_import_confirm: '¿Importar esta configuración? Se va a REEMPLAZAR todo.',
    backup_import_ok: 'Configuración importada. Recargando...',
    backup_import_error: 'No se pudo importar.',
    backup_archivo_invalido: 'El archivo no parece un backup válido.',
    qr_boton: '📱 Mostrar QR',
    qr_titulo: 'Compartir código por QR',
    qr_ayuda: 'Escaneá este código con la cámara del otro dispositivo.',
    qr_copiar_link: 'Copiar link',
    qr_link_copiado: '¡Link copiado!',
    qr_cerrar: 'Cerrar',
    qr_invitacion_titulo: 'Vinculación por QR',
    qr_invitacion_texto: 'El link tiene el código',
    qr_invitacion_pregunta: '¿Querés vincular este dispositivo a ese código?',
    qr_error: 'No se pudo generar el QR.',
    historial_titulo: '📺 Recientes',
    historial_vacio: 'Todavía no viste ningún canal.',
    historial_borrar: '🗑 Borrar historial',
    historial_borrar_confirm: '¿Borrar todo el historial de reproducción?',
    historial_borrado: 'Historial borrado',
    historial_cerrar: 'Cerrar',
    historial_contador: 'canales en el historial',
    perfil_boton: '👤 Perfil',
    perfil_titulo: 'Cambiar perfil',
    perfil_actual: 'Perfil actual',
    perfil_nuevo: '+ Nuevo perfil',
    perfil_editar: 'Editar',
    perfil_borrar: 'Borrar',
    perfil_cerrar: 'Cerrar',
    perfil_nombre_placeholder: 'Nombre del perfil',
    perfil_emoji_label: 'Elegí un ícono',
    perfil_guardar: 'Guardar',
    perfil_cancelar: 'Cancelar',
    perfil_borrar_confirm: '¿Borrar el perfil "%s"? Se van a perder sus favoritos, historial y configuración.',
    perfil_no_borrar_ultimo: 'No podés borrar el último perfil.',
    perfil_cambiado: 'Perfil cambiado a "%s"',
    perfil_creado: 'Perfil "%s" creado',
    perfil_eliminado: 'Perfil "%s" eliminado',
    perfil_nombre_vacio: 'Poné un nombre al perfil.',
    perfil_nombre_duplicado: 'Ya existe un perfil con ese nombre.',
    perfil_editar_titulo: 'Editar perfil',
    rec_titulo: '🔔 Recordatorios',
    rec_boton_recordar: '🔔 Recordar',
    rec_boton_grabado: '✓ Programado',
    rec_aviso_antes: 'Avisame 10 min antes',
    rec_aviso_ahora: 'Avisame cuando empiece',
    rec_vacio: 'No tenés recordatorios guardados.',
    rec_borrar: 'Borrar',
    rec_borrar_todos: '🗑 Borrar todos',
    rec_borrar_confirm: '¿Borrar todos los recordatorios?',
    rec_cerrar: 'Cerrar',
    rec_contador: 'recordatorios activos',
    rec_guardado: 'Recordatorio guardado',
    rec_borrado: 'Recordatorio borrado',
    rec_ya_paso: 'Ese programa ya empezó',
    rec_duplicado: 'Ya tenés un recordatorio para este programa',
    rec_empezando: 'Empieza ahora',
    rec_en_minutos: 'Empieza en %s min',
    rec_notif_titulo: '🔔 %s',
    rec_notif_cuerpo: '%s - %s',
    rec_permiso_titulo: 'Notificaciones del navegador',
    rec_permiso_texto: 'Permitir que la app te avise cuando empiecen los programas que marcaste.',
    rec_permiso_activar: 'Activar notificaciones',
    rec_permiso_estado_granted: '✓ Notificaciones activadas',
    rec_permiso_estado_denied: '✗ Bloqueadas en el navegador.',
    rec_permiso_estado_default: 'Sin activar',
    rec_permiso_estado_unsupported: 'Este navegador no soporta notificaciones',
    rec_programa_sin_info: 'Sin información del programa',
    rec_actual: 'Ahora',
    rec_a_continuacion: 'A continuación',
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
    sin_resultados_texto: 'Try a different search.',
    conectando: 'Connecting...',
    en_vivo: 'LIVE',
    subtitulos_off: 'Off',
    calidad_auto: 'Auto',
    ingresa_url: 'Enter a valid URL.',
    elegi_archivo: 'Choose a file first.',
    pega_contenido: 'Paste the M3U or JSON content.',
    sin_canales_validos: 'No valid channels were found.',
    lista_borrada: 'Restored to default list.',
    cargando: 'Loading...',
    a_continuacion: 'Up next',
    voz_escuchando: 'Listening...',
    sin_epg: 'No guide information',
    reintentando: 'Retrying stream...',
    vista_lista: '☰ List',
    vista_grilla: '▦ Grid',
    nombre_lista_placeholder: 'List name',
    mis_listas: 'My Saved Lists',
    control_parental: 'Parental Control',
    pin_placeholder: '4-digit PIN',
    guardar_pin: 'Save PIN & Blocks',
    pin_incorrecto: 'Incorrect PIN',
    ingrese_pin: 'Enter PIN:',
    actualizar_guia: 'Update',
    actualizar_toast: 'Guide successfully updated.',
    canal_caido: 'Channel offline',
    limpiar_filtros: '🧹 Clear filters',
    ver_mas_canales: 'Load more channels',
    cargando_mas: 'Loading more...',
    no_hay_mas: 'No more channels',
    sync_titulo: 'Sync favorites across devices',
    sync_descripcion: 'Generate a code and use the same one on all your devices.',
    sync_generar: 'Generate new code',
    sync_vincular: 'Link this device',
    sync_desvincular: 'Unlink',
    sync_copiar: 'Copy',
    sync_copiado: 'Copied!',
    sync_estado_vinculado: 'Linked with code',
    sync_code_placeholder: 'Paste the code from another device',
    sync_error: 'Sync failed.',
    sync_ok_subida: 'Favorites uploaded',
    sync_ok_bajada: 'Favorites received',
    sync_fusionado: 'Favorites merged',
    sync_bajando: 'Downloading...',
    sync_pedir_codigo: 'Generate or paste a code first.',
    sync_borrar_nube: '🗑 Delete from cloud',
    sync_borrar_nube_confirm: 'Delete ALL favorites stored in the cloud?',
    sync_borrar_nube_ok: 'Favorites deleted from cloud. Device unlinked.',
    sync_borrar_nube_error: 'Could not delete favorites.',
    sync_borrando: 'Deleting...',
    backup_titulo: 'Configuration backup',
    backup_desc: 'Save all your configuration to a file.',
    backup_exportar: '⬇ Export',
    backup_importar: '⬆ Import',
    backup_export_ok: 'Configuration exported successfully.',
    backup_import_confirm: 'Import this configuration? It will REPLACE everything.',
    backup_import_ok: 'Configuration imported. Reloading...',
    backup_import_error: 'Could not import.',
    backup_archivo_invalido: 'The file does not look like a valid backup.',
    qr_boton: '📱 Show QR',
    qr_titulo: 'Share code via QR',
    qr_ayuda: 'Scan this code with the other device camera.',
    qr_copiar_link: 'Copy link',
    qr_link_copiado: 'Link copied!',
    qr_cerrar: 'Close',
    qr_invitacion_titulo: 'QR linking',
    qr_invitacion_texto: 'The link has the code',
    qr_invitacion_pregunta: 'Do you want to link this device?',
    qr_error: 'Could not generate QR.',
    historial_titulo: '📺 Recent',
    historial_vacio: 'You haven\'t watched any channel yet.',
    historial_borrar: '🗑 Clear history',
    historial_borrar_confirm: 'Clear all watch history?',
    historial_borrado: 'History cleared',
    historial_cerrar: 'Close',
    historial_contador: 'channels in history',
    perfil_boton: '👤 Profile',
    perfil_titulo: 'Switch profile',
    perfil_actual: 'Current profile',
    perfil_nuevo: '+ New profile',
    perfil_editar: 'Edit',
    perfil_borrar: 'Delete',
    perfil_cerrar: 'Close',
    perfil_nombre_placeholder: 'Profile name',
    perfil_emoji_label: 'Pick an icon',
    perfil_guardar: 'Save',
    perfil_cancelar: 'Cancel',
    perfil_borrar_confirm: 'Delete profile "%s"? Its favorites, history and config will be lost.',
    perfil_no_borrar_ultimo: 'You cannot delete the last profile.',
    perfil_cambiado: 'Profile switched to "%s"',
    perfil_creado: 'Profile "%s" created',
    perfil_eliminado: 'Profile "%s" deleted',
    perfil_nombre_vacio: 'Give the profile a name.',
    perfil_nombre_duplicado: 'A profile with that name already exists.',
    perfil_editar_titulo: 'Edit profile',
    rec_titulo: '🔔 Reminders',
    rec_boton_recordar: '🔔 Remind me',
    rec_boton_grabado: '✓ Scheduled',
    rec_aviso_antes: 'Alert 10 min before',
    rec_aviso_ahora: 'Alert when it starts',
    rec_vacio: 'You have no reminders saved.',
    rec_borrar: 'Delete',
    rec_borrar_todos: '🗑 Delete all',
    rec_borrar_confirm: 'Delete all reminders?',
    rec_cerrar: 'Close',
    rec_contador: 'active reminders',
    rec_guardado: 'Reminder saved',
    rec_borrado: 'Reminder deleted',
    rec_ya_paso: 'That show already started',
    rec_duplicado: 'You already have a reminder for this show',
    rec_empezando: 'Starting now',
    rec_en_minutos: 'Starts in %s min',
    rec_notif_titulo: '🔔 %s',
    rec_notif_cuerpo: '%s - %s',
    rec_permiso_titulo: 'Browser notifications',
    rec_permiso_texto: 'Allow the app to alert you when your scheduled shows start.',
    rec_permiso_activar: 'Enable notifications',
    rec_permiso_estado_granted: '✓ Notifications enabled',
    rec_permiso_estado_denied: '✗ Blocked in browser.',
    rec_permiso_estado_default: 'Not enabled',
    rec_permiso_estado_unsupported: 'This browser does not support notifications',
    rec_programa_sin_info: 'No show information',
    rec_actual: 'Now',
    rec_a_continuacion: 'Up next',
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
  actualizarBotonPerfil();
  renderNotificacionesUI();
}

/* =======================================================
   Paises
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
   Claves
   ======================================================= */

const CLAVE_MULTIPLE_LISTAS = 'iptv:multiple-listas';
const CLAVE_LISTA_ACTIVA_ID = 'iptv:lista-activa-id';
const CLAVE_IDIOMA = 'iptv:idioma';
const CLAVE_AGRUPACION = 'iptv:agrupacion';
const CLAVE_MODO_VISTA = 'iptv:modo-vista';
const CLAVE_SOLO_ACTIVOS = 'iptv:solo-activos';

const CLAVE_PERFILES = 'iptv:perfiles';
const CLAVE_PERFIL_ACTIVO = 'iptv:perfil-activo';

const PREFIJO_PERFIL = 'iptv:perfil:';
const SUFIJO_FAVORITOS = ':favoritos';
const SUFIJO_HISTORIAL = ':historial';
const SUFIJO_ULTIMO = ':ultimo-canal';
const SUFIJO_PIN = ':parental-pin';
const SUFIJO_BLOQUEOS = ':parental-bloqueos';
const SUFIJO_SYNC = ':sync-id';
const SUFIJO_RECORDATORIOS = ':recordatorios';

const CLAVE_VIEJA_FAVORITOS = 'iptv:favoritos';
const CLAVE_VIEJA_HISTORIAL = 'iptv:historial';
const CLAVE_VIEJA_ULTIMO = 'iptv:ultimo-canal';
const CLAVE_VIEJA_PIN = 'iptv:parental-pin';
const CLAVE_VIEJA_BLOQUEOS = 'iptv:parental-bloqueos';
const CLAVE_VIEJA_SYNC = 'iptv:sync-id';

const EMOJIS_PERFIL = [
  '👤', '👨', '👩', '👦', '👧', '👶', '🧑', '👴', '👵',
  '🐱', '🐶', '🦊', '🐼', '🦁', '🐯', '🐨', '🦄', '🐢',
  '🎮', '📺', '⚽', '🎬', '🎵', '🍿', '🚀', '⭐', '🌟',
];

const URL_CANALES_JSON = './canales.json';
const URL_CANALES_M3U8 = './canales.m3u8';
const URL_FUENTES = './fuentes.json';
const URL_PROXY = 'https://iptv-proxy.eolivera119600.workers.dev';
const URL_WORKER = 'https://iptv-proxy.eolivera119600.workers.dev';

const HISTORIAL_MAX = 30;

// --- Paginación server-side ---
const PAGINA_TAMANO = 75;

/* =======================================================
   Estado
   ======================================================= */

const estado = {
  listasGuardadas: [],
  listaActivaId: localStorage.getItem(CLAVE_LISTA_ACTIVA_ID) || 'oficial',
  canales: [],
  idioma: localStorage.getItem(CLAVE_IDIOMA) || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'es'),
  agrupacion: localStorage.getItem(CLAVE_AGRUPACION) || 'categoria',
  modoVista: localStorage.getItem(CLAVE_MODO_VISTA) || (window.innerWidth < 768 ? 'lista' : 'grilla'),
  soloActivos: localStorage.getItem(CLAVE_SOLO_ACTIVOS) === '1',

  filtro: 'Todos',
  soloFavoritos: false,
  soloDestacados: false,
  busqueda: '',
  indiceActual: -1,
  hls: null,
  programacion: {},
  reintentosCanalActual: 0,
  hayMetadatos: false,
    caidosRemotos: {},
  estadoCanales: {},
  estadoCanalesResumen: null,

  perfiles: [],
  perfilActivoId: '',

  favoritos: new Set(),
  historial: [],
  ultimoCanal: '',
  parentalPin: '',
  categoriasBloqueadas: [],
  syncId: '',
  recordatorios: [],

  syncTimeout: null,
  syncEnProgreso: false,

  // --- Paginación server-side ---
  paginacion: {
    offset: 0,          // offset actual (para la siguiente request)
    total: 0,           // total de canales en el Worker
    cargando: false,    // flag para no duplicar requests
    hayMas: true,       // si quedan canales por traer
    modoServidor: false, // true cuando se está usando paginación del Worker
    q: '',              // búsqueda actual en el servidor
    grupo: '',          // filtro de grupo en el servidor
  },

  // Timer para debounce del buscador
  debounceBusqueda: null,
};

/* =======================================================
   Perfiles
   ======================================================= */

function generarIdPerfil() {
  return 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
}

function cargarPerfilesDeStorage() {
  try {
    const crudo = localStorage.getItem(CLAVE_PERFILES);
    if (!crudo) return null;
    const arr = JSON.parse(crudo);
    return Array.isArray(arr) ? arr : null;
  } catch {
    return null;
  }
}

function guardarPerfilesEnStorage() {
  localStorage.setItem(CLAVE_PERFILES, JSON.stringify(estado.perfiles));
  localStorage.setItem(CLAVE_PERFIL_ACTIVO, estado.perfilActivoId);
}

function migrarDatosViejos() {
  const perfilesExistentes = cargarPerfilesDeStorage();
  if (perfilesExistentes && perfilesExistentes.length > 0) return false;

  const idPerfil = generarIdPerfil();
  const perfil = { id: idPerfil, nombre: 'Yo', emoji: '👤' };

  const favoritosViejos = localStorage.getItem(CLAVE_VIEJA_FAVORITOS);
  const historialViejo = localStorage.getItem(CLAVE_VIEJA_HISTORIAL);
  const ultimoViejo = localStorage.getItem(CLAVE_VIEJA_ULTIMO);
  const pinViejo = localStorage.getItem(CLAVE_VIEJA_PIN);
  const bloqueosViejos = localStorage.getItem(CLAVE_VIEJA_BLOQUEOS);
  const syncViejo = localStorage.getItem(CLAVE_VIEJA_SYNC);

  if (favoritosViejos) localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_FAVORITOS, favoritosViejos);
  if (historialViejo) localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_HISTORIAL, historialViejo);
  if (ultimoViejo) localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_ULTIMO, ultimoViejo);
  if (pinViejo) localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_PIN, pinViejo);
  if (bloqueosViejos) localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_BLOQUEOS, bloqueosViejos);
  if (syncViejo) localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_SYNC, syncViejo);

  localStorage.removeItem(CLAVE_VIEJA_FAVORITOS);
  localStorage.removeItem(CLAVE_VIEJA_HISTORIAL);
  localStorage.removeItem(CLAVE_VIEJA_ULTIMO);
  localStorage.removeItem(CLAVE_VIEJA_PIN);
  localStorage.removeItem(CLAVE_VIEJA_BLOQUEOS);
  localStorage.removeItem(CLAVE_VIEJA_SYNC);

  estado.perfiles = [perfil];
  estado.perfilActivoId = idPerfil;
  guardarPerfilesEnStorage();

  console.info('[perfiles] Migración completada. Perfil "Yo" creado.');
  return true;
}

function inicializarPerfiles() {
  const migrado = migrarDatosViejos();
  if (migrado) return;

  const perfilesGuardados = cargarPerfilesDeStorage();
  if (perfilesGuardados && perfilesGuardados.length > 0) {
    estado.perfiles = perfilesGuardados;
  } else {
    const idPerfil = generarIdPerfil();
    estado.perfiles = [{ id: idPerfil, nombre: 'Yo', emoji: '👤' }];
    estado.perfilActivoId = idPerfil;
    guardarPerfilesEnStorage();
  }

  let idActivo = localStorage.getItem(CLAVE_PERFIL_ACTIVO);
  if (!idActivo || !estado.perfiles.find(p => p.id === idActivo)) {
    idActivo = estado.perfiles[0].id;
  }
  estado.perfilActivoId = idActivo;
}

function cargarDatosPerfilActivo() {
  const id = estado.perfilActivoId;
  if (!id) return;

  try {
    const crudo = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_FAVORITOS);
    const arr = crudo ? JSON.parse(crudo) : [];
    const soloNumericos = arr.length > 0 && arr.every((x) => /^c\d+$/.test(x));
    estado.favoritos = soloNumericos ? new Set() : new Set(arr);
  } catch {
    estado.favoritos = new Set();
  }

  try {
    const crudo = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_HISTORIAL);
    const arr = crudo ? JSON.parse(crudo) : [];
    estado.historial = Array.isArray(arr) ? arr : [];
  } catch {
    estado.historial = [];
  }

  estado.ultimoCanal = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_ULTIMO) || '';
  estado.parentalPin = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_PIN) || '';

  try {
    const crudo = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_BLOQUEOS);
    estado.categoriasBloqueadas = crudo ? JSON.parse(crudo) : [];
  } catch {
    estado.categoriasBloqueadas = [];
  }

  estado.syncId = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_SYNC) || '';

  try {
    const crudo = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_RECORDATORIOS);
    const arr = crudo ? JSON.parse(crudo) : [];
    estado.recordatorios = Array.isArray(arr) ? arr : [];
  } catch {
    estado.recordatorios = [];
  }
}

function guardarDatosPerfilActivo() {
  const id = estado.perfilActivoId;
  if (!id) return;

  localStorage.setItem(PREFIJO_PERFIL + id + SUFIJO_FAVORITOS, JSON.stringify([...estado.favoritos]));
  localStorage.setItem(PREFIJO_PERFIL + id + SUFIJO_HISTORIAL, JSON.stringify(estado.historial.slice(0, HISTORIAL_MAX)));
  if (estado.ultimoCanal) {
    localStorage.setItem(PREFIJO_PERFIL + id + SUFIJO_ULTIMO, estado.ultimoCanal);
  } else {
    localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_ULTIMO);
  }
  if (estado.parentalPin) {
    localStorage.setItem(PREFIJO_PERFIL + id + SUFIJO_PIN, estado.parentalPin);
  } else {
    localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_PIN);
  }
  localStorage.setItem(PREFIJO_PERFIL + id + SUFIJO_BLOQUEOS, JSON.stringify(estado.categoriasBloqueadas));
  if (estado.syncId) {
    localStorage.setItem(PREFIJO_PERFIL + id + SUFIJO_SYNC, estado.syncId);
  } else {
    localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_SYNC);
  }
  localStorage.setItem(PREFIJO_PERFIL + id + SUFIJO_RECORDATORIOS, JSON.stringify(estado.recordatorios));
}

function perfilActivo() {
  return estado.perfiles.find(p => p.id === estado.perfilActivoId) || estado.perfiles[0];
}

async function cambiarPerfil(id) {
  if (id === estado.perfilActivoId) return;

  const perfil = estado.perfiles.find(p => p.id === id);
  if (!perfil) return;

  guardarDatosPerfilActivo();

  estado.perfilActivoId = id;
  localStorage.setItem(CLAVE_PERFIL_ACTIVO, id);

  cargarDatosPerfilActivo();

  actualizarBotonPerfil();
  renderFiltros();
  renderGuia();
  actualizarBannerContinuar();
  renderControlParentalUI();
  renderSyncUI();
  renderNotificacionesUI();

  mostrarToastSimple(t('perfil_cambiado').replace('%s', perfil.nombre));

  if (estado.syncId) {
    bajarFavoritosDelWorker().catch((e) => {
      console.warn('No se pudieron bajar los favoritos del nuevo perfil:', e);
    });
  }
}

function crearPerfil(nombre, emoji) {
  const id = generarIdPerfil();
  const perfil = { id, nombre, emoji: emoji || '👤' };
  estado.perfiles.push(perfil);
  guardarPerfilesEnStorage();
  return perfil;
}

function editarPerfil(id, nombre, emoji) {
  const perfil = estado.perfiles.find(p => p.id === id);
  if (!perfil) return false;
  perfil.nombre = nombre;
  perfil.emoji = emoji;
  guardarPerfilesEnStorage();
  if (id === estado.perfilActivoId) actualizarBotonPerfil();
  return true;
}

function borrarPerfil(id) {
  if (estado.perfiles.length <= 1) {
    mostrarToastSimple(t('perfil_no_borrar_ultimo'));
    return false;
  }

  const perfil = estado.perfiles.find(p => p.id === id);
  if (!perfil) return false;

  localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_FAVORITOS);
  localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_HISTORIAL);
  localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_ULTIMO);
  localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_PIN);
  localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_BLOQUEOS);
  localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_SYNC);
  localStorage.removeItem(PREFIJO_PERFIL + id + SUFIJO_RECORDATORIOS);

  estado.perfiles = estado.perfiles.filter(p => p.id !== id);

  if (estado.perfilActivoId === id) {
    estado.perfilActivoId = estado.perfiles[0].id;
    guardarPerfilesEnStorage();
    cargarDatosPerfilActivo();
  } else {
    guardarPerfilesEnStorage();
  }

  actualizarBotonPerfil();
  renderFiltros();
  renderGuia();
  actualizarBannerContinuar();
  renderControlParentalUI();
  renderSyncUI();
  renderNotificacionesUI();

  return true;
}

function actualizarBotonPerfil() {
  const btn = document.getElementById('boton-perfil');
  if (!btn) return;
  const p = perfilActivo();
  if (p) {
    btn.textContent = `${p.emoji} ${p.nombre}`;
  } else {
    btn.textContent = '👤 Perfil';
  }
}

function abrirModalPerfiles() {
  const previo = document.getElementById('modal-perfiles');
  if (previo) previo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-perfiles';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.75);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; padding: 16px;
  `;

  const renderContenido = () => {
    const lista = estado.perfiles.map((p) => {
      const esActivo = p.id === estado.perfilActivoId;
      return `
        <div class="perfil-item" data-id="${p.id}" style="
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 10px;
          background: ${esActivo ? 'rgba(229, 9, 20, 0.15)' : 'rgba(255,255,255,0.04)'};
          border: 1px solid ${esActivo ? 'rgba(229, 9, 20, 0.4)' : 'rgba(255,255,255,0.06)'};
          cursor: pointer; transition: background 0.15s;
        ">
          <div style="font-size: 28px; line-height: 1;">${p.emoji || '👤'}</div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 600; font-size: 1rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${escapeHtml(p.nombre)} ${esActivo ? '✅' : ''}
            </div>
          </div>
          <button class="btn-edit-perfil" data-id="${p.id}" title="${t('perfil_editar')}"
            style="padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.15); background: transparent; color: inherit; cursor: pointer; font-size: 0.8rem;">
            ✏️
          </button>
          ${estado.perfiles.length > 1 ? `
            <button class="btn-del-perfil" data-id="${p.id}" title="${t('perfil_borrar')}"
              style="padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(255,107,107,0.3); background: transparent; color: #ff6b6b; cursor: pointer; font-size: 0.8rem;">
              🗑
            </button>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <div style="background: #111b21; color: #fff; padding: 22px; border-radius: 14px; max-width: 480px; width: 100%; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; gap: 8px; flex-wrap: wrap;">
          <h3 style="margin: 0; font-size: 1.1rem;">${t('perfil_titulo')}</h3>
          <button id="perfil-cerrar-x" class="boton-secundario" style="padding: 6px 12px;">✕</button>
        </div>

        <div style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 4px;">
          ${lista}
        </div>

        <div style="display: flex; gap: 8px; justify-content: space-between; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08);">
          <button id="perfil-nuevo" class="boton-primario" style="padding: 10px 16px;">${t('perfil_nuevo')}</button>
          <button id="perfil-cerrar" class="boton-secundario" style="padding: 10px 16px;">${t('perfil_cerrar')}</button>
        </div>
      </div>
    `;
  };

  overlay.innerHTML = renderContenido();
  document.body.appendChild(overlay);

  const refrescar = () => {
    overlay.innerHTML = renderContenido();
    bindEventos();
  };

  const bindEventos = () => {
    overlay.querySelector('#perfil-cerrar-x').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#perfil-cerrar').addEventListener('click', () => overlay.remove());

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    overlay.querySelector('#perfil-nuevo').addEventListener('click', () => {
      abrirEditorPerfil(null, () => {
        overlay.remove();
        abrirModalPerfiles();
      });
    });

    overlay.querySelectorAll('.perfil-item').forEach((item) => {
      item.addEventListener('click', async (e) => {
        if (e.target.closest('.btn-edit-perfil') || e.target.closest('.btn-del-perfil')) return;
        const id = item.dataset.id;
        await cambiarPerfil(id);
        overlay.remove();
      });
    });

    overlay.querySelectorAll('.btn-edit-perfil').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        abrirEditorPerfil(id, () => {
          overlay.remove();
          abrirModalPerfiles();
        });
      });
    });

    overlay.querySelectorAll('.btn-del-perfil').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const perfil = estado.perfiles.find(p => p.id === id);
        if (!perfil) return;
        if (!confirm(t('perfil_borrar_confirm').replace('%s', perfil.nombre))) return;
        const ok = borrarPerfil(id);
        if (ok) {
          mostrarToastSimple(t('perfil_eliminado').replace('%s', perfil.nombre));
          refrescar();
        }
      });
    });
  };

  bindEventos();
}

function abrirEditorPerfil(perfilId, onClose) {
  const previo = document.getElementById('modal-perfil-editor');
  if (previo) previo.remove();

  const esNuevo = !perfilId;
  const perfil = esNuevo ? null : estado.perfiles.find(p => p.id === perfilId);
  if (!esNuevo && !perfil) return;

  let emojiSel = perfil ? perfil.emoji : '👤';
  const nombreInit = perfil ? perfil.nombre : '';

  const overlay = document.createElement('div');
  overlay.id = 'modal-perfil-editor';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.8);
    display: flex; align-items: center; justify-content: center;
    z-index: 10100; padding: 16px;
  `;

  const renderEmojis = () => `
    <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
      ${EMOJIS_PERFIL.map((em) => `
        <button class="emoji-opt" data-emoji="${em}" style="
          width: 40px; height: 40px; font-size: 22px;
          border-radius: 8px; cursor: pointer;
          border: 1px solid ${em === emojiSel ? '#e50914' : 'rgba(255,255,255,0.1)'};
          background: ${em === emojiSel ? 'rgba(229,9,20,0.2)' : 'rgba(255,255,255,0.04)'};
          color: inherit;
        ">${em}</button>
      `).join('')}
    </div>
  `;

  const render = () => `
    <div style="background: #111b21; color: #fff; padding: 22px; border-radius: 14px; max-width: 460px; width: 100%; max-height: 85vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
      <h3 style="margin: 0 0 16px; font-size: 1.1rem;">${esNuevo ? t('perfil_nuevo') : t('perfil_editar_titulo')}</h3>

      <label style="display: block; font-size: 0.85rem; color: #94a3b8; margin-bottom: 6px;">${t('perfil_nombre_placeholder')}</label>
      <input id="perfil-nombre-input" type="text" maxlength="24" value="${escapeHtml(nombreInit)}" placeholder="${t('perfil_nombre_placeholder')}"
        style="width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); background: rgba(0,0,0,0.25); color: inherit; font-size: 0.95rem; margin-bottom: 16px;">

      <label style="display: block; font-size: 0.85rem; color: #94a3b8; margin-bottom: 6px;">${t('perfil_emoji_label')}</label>
      <div id="perfil-emojis-cont">${renderEmojis()}</div>

      <div id="perfil-error" style="font-size: 0.85rem; color: #ff6b6b; min-height: 18px; margin: 12px 0;"></div>

      <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 14px;">
        <button id="editor-cancelar" class="boton-secundario" style="padding: 10px 16px;">${t('perfil_cancelar')}</button>
        <button id="editor-guardar" class="boton-primario" style="padding: 10px 16px;">${t('perfil_guardar')}</button>
      </div>
    </div>
  `;

  overlay.innerHTML = render();
  document.body.appendChild(overlay);

  const inputNombre = overlay.querySelector('#perfil-nombre-input');
  const errCont = overlay.querySelector('#perfil-error');

  setTimeout(() => { inputNombre.focus(); inputNombre.select(); }, 50);

  const rebindEmojis = () => {
    overlay.querySelectorAll('.emoji-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        emojiSel = btn.dataset.emoji;
        overlay.querySelector('#perfil-emojis-cont').innerHTML = renderEmojis();
        rebindEmojis();
      });
    });
  };
  rebindEmojis();

  overlay.querySelector('#editor-cancelar').addEventListener('click', () => {
    overlay.remove();
    if (onClose) onClose();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
      if (onClose) onClose();
    }
  });

  inputNombre.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      overlay.querySelector('#editor-guardar').click();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      overlay.remove();
      if (onClose) onClose();
    }
  });

  overlay.querySelector('#editor-guardar').addEventListener('click', () => {
    const nombre = inputNombre.value.trim();

    if (!nombre) {
      errCont.textContent = t('perfil_nombre_vacio');
      return;
    }

    const duplicado = estado.perfiles.find(
      (p) => p.nombre.toLowerCase() === nombre.toLowerCase() && p.id !== perfilId
    );
    if (duplicado) {
      errCont.textContent = t('perfil_nombre_duplicado');
      return;
    }

    if (esNuevo) {
      const nuevo = crearPerfil(nombre, emojiSel);
      mostrarToastSimple(t('perfil_creado').replace('%s', nuevo.nombre));
    } else {
      editarPerfil(perfilId, nombre, emojiSel);
    }

    overlay.remove();
    if (onClose) onClose();
  });
}

/* =======================================================
   Helpers
   ======================================================= */

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

function guardarFavoritos() {
  guardarDatosPerfilActivo();
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

function guardarUltimoVisto(id) {
  estado.ultimoCanal = id;
  guardarDatosPerfilActivo();
}

function leerUltimoVisto() {
  return estado.ultimoCanal;
}

function guardarHistorial() {
  guardarDatosPerfilActivo();
}

function agregarAlHistorial(canal) {
  if (!canal || !canal.id) return;

  const entrada = {
    canalId: canal.id,
    nombre: canal.nombre || 'Sin nombre',
    logo: canal.logo || '',
    grupo: canal.grupo || '',
    pais: canal.pais || '',
    fecha: new Date().toISOString(),
  };

  estado.historial = estado.historial.filter((e) => e.canalId !== canal.id);
  estado.historial.unshift(entrada);
  if (estado.historial.length > HISTORIAL_MAX) {
    estado.historial = estado.historial.slice(0, HISTORIAL_MAX);
  }

  guardarHistorial();
}

function borrarHistorial() {
  estado.historial = [];
  guardarHistorial();
}

function formatearTiempoRelativo(iso) {
  try {
    const ms = Date.now() - new Date(iso).getTime();
    const seg = Math.floor(ms / 1000);
    const min = Math.floor(seg / 60);
    const hora = Math.floor(min / 60);
    const dia = Math.floor(hora / 24);
    const es = estado.idioma !== 'en';

    if (seg < 60) return es ? 'recién' : 'just now';
    if (min < 60) return es ? `hace ${min} min` : `${min} min ago`;
    if (hora < 24) return es ? `hace ${hora} h` : `${hora} h ago`;
    if (dia === 1) return es ? 'ayer' : 'yesterday';
    if (dia < 7) return es ? `hace ${dia} días` : `${dia} days ago`;

    return new Date(iso).toLocaleDateString(es ? 'es-AR' : 'en-US', {
      day: '2-digit', month: '2-digit', year: '2-digit',
    });
  } catch {
    return '';
  }
}

function abrirModalHistorial() {
  const previo = document.getElementById('modal-historial');
  if (previo) previo.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modal-historial';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.75);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; padding: 16px;
  `;

  const listaHtml = estado.historial.length === 0
    ? `<div style="padding: 40px 20px; text-align: center; color: #94a3b8; font-size: 0.9rem;">${t('historial_vacio')}</div>`
    : estado.historial.map((e) => {
        const logoHtml = e.logo
          ? `<img src="${e.logo}" alt="" loading="lazy" style="width:100%; height:100%; object-fit:contain;" onerror="this.parentElement.textContent='${(e.nombre || '?').slice(0, 2).toUpperCase()}'">`
          : (e.nombre || '?').slice(0, 2).toUpperCase();
        const banderaHtml = e.pais ? `<span style="font-size:0.9rem;">${bandera(e.pais)}</span>` : '';
        return `
          <div class="hist-item" data-canal-id="${escapeHtml(e.canalId)}" style="
            display: flex; align-items: center; gap: 12px;
            padding: 10px 12px; border-radius: 8px;
            background: rgba(255,255,255,0.04);
            cursor: pointer; transition: background 0.15s;
          ">
            <div style="width: 44px; height: 44px; flex-shrink: 0; border-radius: 6px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; overflow: hidden;">
              ${logoHtml}
            </div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-weight: 600; font-size: 0.95rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                ${escapeHtml(e.nombre)}
              </div>
              <div style="font-size: 0.78rem; color: #94a3b8; display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
                ${banderaHtml}
                ${e.grupo ? `<span>${escapeHtml(e.grupo)}</span>` : ''}
                <span style="opacity: 0.6;">· ${formatearTiempoRelativo(e.fecha)}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');

  overlay.innerHTML = `
    <div style="background: #111b21; color: #fff; padding: 20px; border-radius: 14px; max-width: 520px; width: 100%; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; gap: 8px; flex-wrap: wrap;">
        <h3 style="margin: 0; font-size: 1.1rem;">${t('historial_titulo')}</h3>
        <span style="font-size: 0.78rem; color: #94a3b8;">${estado.historial.length} ${t('historial_contador')}</span>
      </div>

      <div style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 4px;">
        ${listaHtml}
      </div>

      <div style="display: flex; gap: 8px; justify-content: space-between; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08);">
        <button id="hist-borrar" class="boton-secundario" style="padding:8px 14px; color:#ff4d4d; border-color:rgba(255,77,77,0.4);" ${estado.historial.length === 0 ? 'disabled' : ''}>${t('historial_borrar')}</button>
        <button id="hist-cerrar" class="boton-secundario" style="padding:8px 14px;">${t('historial_cerrar')}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  overlay.querySelector('#hist-cerrar').addEventListener('click', () => overlay.remove());

  overlay.querySelector('#hist-borrar').addEventListener('click', () => {
    if (!confirm(t('historial_borrar_confirm'))) return;
    borrarHistorial();
    overlay.remove();
    mostrarToastSimple(t('historial_borrado'));
  });

  overlay.querySelectorAll('.hist-item').forEach((item) => {
    item.addEventListener('mouseenter', () => item.style.background = 'rgba(255,255,255,0.1)');
    item.addEventListener('mouseleave', () => item.style.background = 'rgba(255,255,255,0.04)');

    item.addEventListener('click', () => {
      const canalId = item.dataset.canalId;
      overlay.remove();
      reproducirCanalPorId(canalId);
    });
  });
}

function mostrarToastSimple(texto) {
  const previo = document.getElementById('toast-simple');
  if (previo) previo.remove();

  const t2 = document.createElement('div');
  t2.id = 'toast-simple';
  t2.textContent = texto;
  t2.style.cssText = `
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    background: #1f2c34; color: #fff; padding: 12px 20px; border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    font-size: 0.9rem; z-index: 20000; opacity: 0; transition: opacity 0.3s;
    max-width: 90vw; text-align: center;
  `;
  document.body.appendChild(t2);
  requestAnimationFrame(() => { t2.style.opacity = '1'; });
  setTimeout(() => {
    t2.style.opacity = '0';
    setTimeout(() => t2.remove(), 300);
  }, 2200);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function obtenerIniciales(nombre) {
  if (!nombre || typeof nombre !== 'string') return '?';

  const partes = nombre.trim().split(/\s+/).filter(Boolean);

  if (partes.length === 0) return '?';

  if (partes.length === 1) {
    const p = partes[0];
    const letras = p.replace(/^[\s\-_.,:;!?¡¿'"`´]+/, '');
    if (!letras) return '?';
    return letras.slice(0, 2).toUpperCase();
  }

  const primera = partes[0].replace(/^[\s\-_.,:;!?¡¿'"`´]+/, '');
  const segunda = partes[1].replace(/^[\s\-_.,:;!?¡¿'"`´]+/, '');

  const a = primera.charAt(0) || '';
  const b = segunda.charAt(0) || '';

  const resultado = (a + b).toUpperCase();
  return resultado || '?';
}

/* =======================================================
   RECORDATORIOS DE PROGRAMAS
   ======================================================= */

const REC_AVISO_ANTES_MIN = 10;
const REC_INTERVALO_CHEQUEO_MS = 30 * 1000;
const REC_LIMPIAR_DESPUES_DE_MS = 60 * 60 * 1000;

let intervaloRecordatorios = null;

async function pedirPermisoNotificaciones() {
  if (!('Notification' in window)) return 'unsupported';
  if (Notification.permission === 'granted') return 'granted';
  if (Notification.permission === 'denied') return 'denied';
  try {
    const resultado = await Notification.requestPermission();
    return resultado;
  } catch {
    return 'default';
  }
}

function estadoPermisoNotificaciones() {
  if (!('Notification' in window)) return 'unsupported';
  return Notification.permission;
}

function avisar(mensaje, cuerpo) {
  if ('Notification' in window && Notification.permission === 'granted') {
    try {
      const notif = new Notification(mensaje, {
        body: cuerpo || '',
        icon: 'icons/icon.svg',
        badge: 'icons/icon.svg',
        tag: 'recordatorio-' + Date.now(),
        requireInteraction: false,
      });
      setTimeout(() => { try { notif.close(); } catch {} }, 8000);
      return;
    } catch (e) {
      console.warn('No se pudo mostrar la notificación:', e);
    }
  }

  mostrarToastSimple(`🔔 ${mensaje}${cuerpo ? ' — ' + cuerpo : ''}`);
}

function claveRecordatorio(rec) {
  return `${rec.tvgId}|${rec.inicio}`;
}

function yaExisteRecordatorio(tvgId, inicioIso) {
  return estado.recordatorios.some(
    (r) => r.tvgId === tvgId && r.inicio === inicioIso
  );
}

function agregarRecordatorio(programa, canal) {
  if (!programa || !programa.inicio) return { ok: false, motivo: 'sin_datos' };

  const inicioMs = new Date(programa.inicio).getTime();
  const ahora = Date.now();

  if (inicioMs < ahora) {
    return { ok: false, motivo: 'ya_paso' };
  }

  if (yaExisteRecordatorio(canal.tvgId, programa.inicio)) {
    return { ok: false, motivo: 'duplicado' };
  }

  const rec = {
    id: 'rec_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6),
    tvgId: canal.tvgId,
    canalNombre: canal.nombre,
    canalLogo: canal.logo || '',
    canalNumero: canal.numero || '',
    titulo: programa.titulo || t('rec_programa_sin_info'),
    descripcion: programa.descripcion || '',
    inicio: programa.inicio,
    fin: programa.fin,
    creado: new Date().toISOString(),
    avisoAntes: false,
    avisoAhora: false,
  };

  estado.recordatorios.push(rec);
  guardarDatosPerfilActivo();

  arrancarChequeoRecordatorios();

  return { ok: true, recordatorio: rec };
}

function borrarRecordatorio(id) {
  estado.recordatorios = estado.recordatorios.filter((r) => r.id !== id);
  guardarDatosPerfilActivo();
}

function borrarTodosLosRecordatorios() {
  estado.recordatorios = [];
  guardarDatosPerfilActivo();
}

function limpiarRecordatoriosViejos() {
  const ahora = Date.now();
  const antes = estado.recordatorios.length;
  estado.recordatorios = estado.recordatorios.filter((r) => {
    const finMs = new Date(r.fin || r.inicio).getTime();
    return (ahora - finMs) < REC_LIMPIAR_DESPUES_DE_MS;
  });
  if (estado.recordatorios.length !== antes) {
    guardarDatosPerfilActivo();
  }
}

function chequearRecordatorios() {
  const ahora = Date.now();
  let cambio = false;

  for (const rec of estado.recordatorios) {
    const inicioMs = new Date(rec.inicio).getTime();
    const msHastaInicio = inicioMs - ahora;

    if (!rec.avisoAntes && msHastaInicio > 0 && msHastaInicio <= REC_AVISO_ANTES_MIN * 60 * 1000) {
      const minRestantes = Math.max(1, Math.round(msHastaInicio / 60000));
      avisar(
        t('rec_notif_titulo').replace('%s', rec.canalNombre),
        t('rec_en_minutos').replace('%s', minRestantes) + ': ' + rec.titulo
      );
      rec.avisoAntes = true;
      cambio = true;
    }

    if (!rec.avisoAhora && msHastaInicio <= 0 && ahora < new Date(rec.fin).getTime()) {
      avisar(
        t('rec_notif_titulo').replace('%s', rec.canalNombre),
        t('rec_empezando') + ': ' + rec.titulo
      );
      rec.avisoAhora = true;
      cambio = true;
    }
  }

  if (cambio) guardarDatosPerfilActivo();

  limpiarRecordatoriosViejos();
}

function arrancarChequeoRecordatorios() {
  if (intervaloRecordatorios) return;
  chequearRecordatorios();
  intervaloRecordatorios = setInterval(chequearRecordatorios, REC_INTERVALO_CHEQUEO_MS);
}

function crearBotonRecordar(programa, canal) {
  if (!programa || !canal || !canal.tvgId || !programa.inicio) return null;

  const inicioMs = new Date(programa.inicio).getTime();
  if (inicioMs < Date.now()) return null;

  const yaGuardado = yaExisteRecordatorio(canal.tvgId, programa.inicio);

  const btn = document.createElement('button');
  btn.className = 'menu-flotante__opcion';
  btn.style.cssText = `
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 12px; font-size: 0.8rem;
    border-radius: 6px; cursor: pointer;
    background: ${yaGuardado ? 'rgba(74,222,128,0.15)' : 'rgba(229,9,20,0.15)'};
    border: 1px solid ${yaGuardado ? 'rgba(74,222,128,0.4)' : 'rgba(229,9,20,0.4)'};
    color: ${yaGuardado ? '#4ade80' : '#fca5a5'};
    font-family: inherit;
    margin-top: 6px;
  `;
  btn.textContent = yaGuardado ? t('rec_boton_grabado') : t('rec_boton_recordar');
  btn.title = t('rec_aviso_antes');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (yaGuardado) {
      mostrarToastSimple(t('rec_duplicado'));
      return;
    }

    const res = agregarRecordatorio(programa, canal);
    if (res.ok) {
      mostrarToastSimple(t('rec_guardado'));
      btn.textContent = t('rec_boton_grabado');
      btn.style.background = 'rgba(74,222,128,0.15)';
      btn.style.borderColor = 'rgba(74,222,128,0.4)';
      btn.style.color = '#4ade80';
    } else if (res.motivo === 'ya_paso') {
      mostrarToastSimple(t('rec_ya_paso'));
    } else if (res.motivo === 'duplicado') {
      mostrarToastSimple(t('rec_duplicado'));
    }
  });

  return btn;
}

function abrirModalRecordatorios() {
  const previo = document.getElementById('modal-recordatorios');
  if (previo) previo.remove();

  limpiarRecordatoriosViejos();

  const overlay = document.createElement('div');
  overlay.id = 'modal-recordatorios';
  overlay.style.cssText = `
    position: fixed; inset: 0; background: rgba(0,0,0,0.75);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; padding: 16px;
  `;

  const ahora = Date.now();

  const listaOrdenada = [...estado.recordatorios].sort(
    (a, b) => new Date(a.inicio) - new Date(b.inicio)
  );

  const listaHtml = listaOrdenada.length === 0
    ? `<div style="padding: 40px 20px; text-align: center; color: #94a3b8; font-size: 0.9rem;">${t('rec_vacio')}</div>`
    : listaOrdenada.map((r) => {
        const inicioMs = new Date(r.inicio).getTime();
        const finMs = new Date(r.fin).getTime();
        const enCurso = ahora >= inicioMs && ahora < finMs;
        const faltan = Math.max(0, Math.round((inicioMs - ahora) / 60000));

        let estadoTxt = '';
        let estadoColor = '#94a3b8';
        if (enCurso) {
          estadoTxt = '🔴 ' + t('rec_actual');
          estadoColor = '#f87171';
        } else if (faltan <= REC_AVISO_ANTES_MIN) {
          estadoTxt = '⏰ ' + t('rec_en_minutos').replace('%s', faltan);
          estadoColor = '#fbbf24';
        } else {
          estadoTxt = formatearHora(r.inicio) + ' → ' + formatearHora(r.fin);
          estadoColor = '#94a3b8';
        }

        const logoHtml = r.canalLogo
          ? `<img src="${escapeHtml(r.canalLogo)}" alt="" style="width:100%; height:100%; object-fit:contain;" onerror="this.parentElement.textContent='${escapeHtml(obtenerIniciales(r.canalNombre))}'">`
          : escapeHtml(obtenerIniciales(r.canalNombre));

        return `
          <div class="rec-item" style="
            display: flex; align-items: flex-start; gap: 12px;
            padding: 12px; border-radius: 10px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.06);
          ">
            <div style="width: 44px; height: 44px; flex-shrink: 0; border-radius: 6px; background: rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; overflow: hidden;">
              ${logoHtml}
            </div>
            <div style="flex: 1; min-width: 0;">
              <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 3px;">
                ${escapeHtml(r.titulo)}
              </div>
              <div style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 4px;">
                ${escapeHtml(r.canalNombre)}
              </div>
              <div style="font-size: 0.78rem; color: ${estadoColor}; font-weight: 500;">
                ${estadoTxt}
              </div>
            </div>
            <button class="rec-borrar" data-id="${escapeHtml(r.id)}" title="${t('rec_borrar')}"
              style="
                padding: 6px 10px; border-radius: 6px;
                border: 1px solid rgba(255,107,107,0.3);
                background: transparent; color: #ff6b6b;
                cursor: pointer; font-size: 0.8rem;
                flex-shrink: 0;
              ">🗑</button>
          </div>
        `;
      }).join('');

  overlay.innerHTML = `
    <div style="background: #111b21; color: #fff; padding: 20px; border-radius: 14px; max-width: 520px; width: 100%; max-height: 85vh; display: flex; flex-direction: column; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; gap: 8px; flex-wrap: wrap;">
        <h3 style="margin: 0; font-size: 1.1rem;">${t('rec_titulo')}</h3>
        <span style="font-size: 0.78rem; color: #94a3b8;">${estado.recordatorios.length} ${t('rec_contador')}</span>
      </div>

      <div style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 6px; padding-right: 4px;">
        ${listaHtml}
      </div>

      <div style="display: flex; gap: 8px; justify-content: space-between; margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08);">
        <button id="rec-borrar-todos" class="boton-secundario" style="padding:8px 14px; color:#ff4d4d; border-color:rgba(255,77,77,0.4);" ${estado.recordatorios.length === 0 ? 'disabled' : ''}>${t('rec_borrar_todos')}</button>
        <button id="rec-cerrar" class="boton-secundario" style="padding:8px 14px;">${t('rec_cerrar')}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  overlay.querySelector('#rec-cerrar').addEventListener('click', () => overlay.remove());

  overlay.querySelector('#rec-borrar-todos').addEventListener('click', () => {
    if (!confirm(t('rec_borrar_confirm'))) return;
    borrarTodosLosRecordatorios();
    overlay.remove();
    mostrarToastSimple(t('rec_borrado'));
  });

  overlay.querySelectorAll('.rec-borrar').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      borrarRecordatorio(id);
      mostrarToastSimple(t('rec_borrado'));
      overlay.remove();
      abrirModalRecordatorios();
    });
  });
}

async function renderNotificacionesUI() {
  const cont = document.getElementById('notificaciones-contenido');
  if (!cont) return;

  const permiso = estadoPermisoNotificaciones();

  let textoEstado = '';
  let colorEstado = '#94a3b8';
  let mostrarBoton = false;

  if (permiso === 'granted') {
    textoEstado = t('rec_permiso_estado_granted');
    colorEstado = '#4ade80';
  } else if (permiso === 'denied') {
    textoEstado = t('rec_permiso_estado_denied');
    colorEstado = '#ff6b6b';
  } else if (permiso === 'unsupported') {
    textoEstado = t('rec_permiso_estado_unsupported');
    colorEstado = '#94a3b8';
  } else {
    textoEstado = t('rec_permiso_estado_default');
    colorEstado = '#fbbf24';
    mostrarBoton = true;
  }

  cont.innerHTML = `
    <p style="font-size:13px; opacity:0.8; margin:0 0 10px;">${t('rec_permiso_texto')}</p>
    <div style="font-size:13.5px; color:${colorEstado}; font-weight:500; margin-bottom:10px;">${textoEstado}</div>
    ${mostrarBoton ? `<button id="btn-activar-notif" class="boton-primario" style="padding:8px 14px;">${t('rec_permiso_activar')}</button>` : ''}
  `;

  const btn = document.getElementById('btn-activar-notif');
  if (btn) {
    btn.addEventListener('click', async () => {
      const resultado = await pedirPermisoNotificaciones();
      await renderNotificacionesUI();
      if (resultado === 'granted') {
        mostrarToastSimple('✓ Notificaciones activadas');
      } else if (resultado === 'denied') {
        mostrarToastSimple('✗ Bloqueadas. Habilitalas desde el navegador.');
      }
    });
  }
}

/* =======================================================
   Canales caídos
   ======================================================= */

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

async function cargarEstadoCanales() {
  try {
    const resp = await fetch(`${URL_WORKER}/estado-canales`, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    });
    if (!resp.ok) throw new Error('HTTP ' + resp.status);
    const data = await resp.json();
    estado.estadoCanales = data.canales || {};
    estado.estadoCanalesResumen = data.resumen || null;
    console.info(`[estado-canales] Cargados ${Object.keys(estado.estadoCanales).length} estados (resumen: ${JSON.stringify(data.resumen)})`);
    return true;
  } catch (e) {
    console.warn('No se pudo cargar el estado de canales del Worker:', e);
    return false;
  }
}

/**
 * Devuelve el estado del canal mezclando las 3 fuentes en este orden:
 *   1. estado.canales (Worker /estado-canales) → fuente de verdad del chequeo automático
 *   2. estado.caidosRemotos (Worker /caidos) → reportes manuales / admin
 *   3. canal.estado (JSON del canal) → legacy
 *
 * Valores posibles: 'estable' | 'inestable' | 'caido' | 'lento' | ''
 */
function estadoDeCanal(canal) {
  if (!canal) return '';

  // 1. Estado del chequeo automático (más confiable)
  const info = estado.estadoCanales && estado.estadoCanales[canal.id];
  if (info && info.estado) {
    if (info.lento && info.estado === 'estable') return 'lento';
    return info.estado;
  }

  // 2. Reportes manuales / admin
  if (estado.caidosRemotos && estado.caidosRemotos[canal.id]) return 'caido';

  // 3. Legacy del JSON del canal
  if (canal.estado === 'sin_respuesta' || canal.estado === 'dudoso') return 'caido';

  return '';
}

function esCanalCaido(canal) {
  return estadoDeCanal(canal) === 'caido';
}

function esCanalCaido(canal) {
  if (!canal) return false;
  if (canal.estado === 'sin_respuesta' || canal.estado === 'dudoso') return true;
  if (estado.caidosRemotos && estado.caidosRemotos[canal.id]) return true;
  return false;
}

/* =======================================================
   Backup
   ======================================================= */

const VERSION_BACKUP = 3;

function recolectarConfiguracion() {
  const perfilesCompletos = estado.perfiles.map((p) => {
    const id = p.id;
    let favoritos = [];
    let historial = [];
    let recordatorios = [];
    try {
      const f = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_FAVORITOS);
      if (f) favoritos = JSON.parse(f);
    } catch {}
    try {
      const h = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_HISTORIAL);
      if (h) historial = JSON.parse(h);
    } catch {}
    try {
      const r = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_RECORDATORIOS);
      if (r) recordatorios = JSON.parse(r);
    } catch {}

    return {
      id,
      nombre: p.nombre,
      emoji: p.emoji,
      favoritos,
      historial,
      recordatorios,
      ultimoCanal: localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_ULTIMO) || '',
      parentalPin: localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_PIN) || '',
      categoriasBloqueadas: (() => {
        try {
          const c = localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_BLOQUEOS);
          return c ? JSON.parse(c) : [];
        } catch { return []; }
      })(),
      syncId: localStorage.getItem(PREFIJO_PERFIL + id + SUFIJO_SYNC) || '',
    };
  });

  return {
    app: 'guia-de-canales',
    version: VERSION_BACKUP,
    exportado: new Date().toISOString(),
    listasGuardadas: estado.listasGuardadas,
    listaActivaId: estado.listaActivaId,
    idioma: estado.idioma,
    agrupacion: estado.agrupacion,
    modoVista: estado.modoVista,
    soloActivos: estado.soloActivos,
    perfiles: perfilesCompletos,
    perfilActivoId: estado.perfilActivoId,
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

    if (!confirm(t('backup_import_confirm'))) return;

    if (Array.isArray(datos.listasGuardadas) && datos.listasGuardadas.length > 0) {
      estado.listasGuardadas = datos.listasGuardadas;
      estado.listaActivaId = datos.listaActivaId || datos.listasGuardadas[0].id;
      guardarListasEnStorage();
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

    estado.perfiles.forEach((p) => {
      localStorage.removeItem(PREFIJO_PERFIL + p.id + SUFIJO_FAVORITOS);
      localStorage.removeItem(PREFIJO_PERFIL + p.id + SUFIJO_HISTORIAL);
      localStorage.removeItem(PREFIJO_PERFIL + p.id + SUFIJO_ULTIMO);
      localStorage.removeItem(PREFIJO_PERFIL + p.id + SUFIJO_PIN);
      localStorage.removeItem(PREFIJO_PERFIL + p.id + SUFIJO_BLOQUEOS);
      localStorage.removeItem(PREFIJO_PERFIL + p.id + SUFIJO_SYNC);
      localStorage.removeItem(PREFIJO_PERFIL + p.id + SUFIJO_RECORDATORIOS);
    });

    if (Array.isArray(datos.perfiles) && datos.perfiles.length > 0) {
      estado.perfiles = datos.perfiles.map((p) => ({
        id: p.id || generarIdPerfil(),
        nombre: p.nombre || 'Sin nombre',
        emoji: p.emoji || '👤',
      }));

      estado.perfiles.forEach((p, i) => {
        const src = datos.perfiles[i];
        localStorage.setItem(PREFIJO_PERFIL + p.id + SUFIJO_FAVORITOS, JSON.stringify(src.favoritos || []));
        localStorage.setItem(PREFIJO_PERFIL + p.id + SUFIJO_HISTORIAL, JSON.stringify((src.historial || []).slice(0, HISTORIAL_MAX)));
        localStorage.setItem(PREFIJO_PERFIL + p.id + SUFIJO_RECORDATORIOS, JSON.stringify(src.recordatorios || []));
        if (src.ultimoCanal) localStorage.setItem(PREFIJO_PERFIL + p.id + SUFIJO_ULTIMO, src.ultimoCanal);
        if (src.parentalPin) localStorage.setItem(PREFIJO_PERFIL + p.id + SUFIJO_PIN, src.parentalPin);
        if (Array.isArray(src.categoriasBloqueadas)) localStorage.setItem(PREFIJO_PERFIL + p.id + SUFIJO_BLOQUEOS, JSON.stringify(src.categoriasBloqueadas));
        if (src.syncId) localStorage.setItem(PREFIJO_PERFIL + p.id + SUFIJO_SYNC, src.syncId);
      });

      estado.perfilActivoId = datos.perfilActivoId && estado.perfiles.find(p => p.id === datos.perfilActivoId)
        ? datos.perfilActivoId
        : estado.perfiles[0].id;

      guardarPerfilesEnStorage();
    } else if (Array.isArray(datos.favoritos)) {
      const idPerfil = generarIdPerfil();
      estado.perfiles = [{ id: idPerfil, nombre: 'Yo', emoji: '👤' }];
      estado.perfilActivoId = idPerfil;
      localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_FAVORITOS, JSON.stringify(datos.favoritos));
      if (typeof datos.parentalPin === 'string' && datos.parentalPin) {
        localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_PIN, datos.parentalPin);
      }
      if (Array.isArray(datos.categoriasBloqueadas)) {
        localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_BLOQUEOS, JSON.stringify(datos.categoriasBloqueadas));
      }
      if (typeof datos.syncId === 'string' && datos.syncId) {
        localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_SYNC, datos.syncId);
      }
      if (Array.isArray(datos.historial)) {
        localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_HISTORIAL, JSON.stringify(datos.historial.slice(0, HISTORIAL_MAX)));
      }
      if (typeof datos.ultimoCanal === 'string' && datos.ultimoCanal) {
        localStorage.setItem(PREFIJO_PERFIL + idPerfil + SUFIJO_ULTIMO, datos.ultimoCanal);
      }
      guardarPerfilesEnStorage();
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
   QR
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

      <div style="background: #fff; padding: 14px; border-radius: 10px; display: inline-block; margin-bottom: 14px;">
        <img src="${qrUrl}" alt="QR" style="display: block; width: 260px; height: 260px; max-width: 100%;" onerror="this.parentElement.innerHTML='<div style=\\'padding:40px;color:#e50914;font-size:13px;\\'>${t('qr_error')}</div>';">
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
  } catch {}
}

/* =======================================================
   Sync
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
  guardarDatosPerfilActivo();
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
  guardarDatosPerfilActivo();
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
    guardarDatosPerfilActivo();
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
        <code style="font-size:15px; font-weight:600; background:rgba(229,9,20,0.15); padding:6px 10px; border-radius:6px; letter-spacing:1px;">${estado.syncId}</code>
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
  if (btnQR) btnQR.addEventListener('click', abrirModalQR);

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
   Carga de canales — CON PAGINACIÓN SERVER-SIDE
   ======================================================= */

/**
 * Pide una página de canales al Worker.
 * @param {Object} opciones
 * @param {number} opciones.offset   - desde qué canal empezar
 * @param {number} opciones.limit    - cuántos traer
 * @param {string} opciones.q        - búsqueda (opcional)
 * @param {string} opciones.grupo    - filtro de grupo (opcional)
 * @returns {Promise<{canales:Array, total:number, offset:number, limit:number}>}
 */
async function pedirCanalesAlWorker({ offset = 0, limit = PAGINA_TAMANO, q = '', grupo = '' } = {}) {
  const params = new URLSearchParams();
  params.set('limit', String(limit));
  params.set('offset', String(offset));
  if (q) params.set('q', q);
  if (grupo) params.set('grupo', grupo);

  const url = `${URL_WORKER}/canales?${params.toString()}`;

  const resp = await fetch(url, { cache: 'no-store' });
  if (!resp.ok) throw new Error('HTTP ' + resp.status);

  const datos = await resp.json();
  const lista = Array.isArray(datos) ? datos : (datos.canales || []);
  const normalizados = normalizarDesdeJSON(lista, offset);

  return {
    canales: normalizados,
    total: typeof datos.total === 'number' ? datos.total : normalizados.length,
    offset: typeof datos.offset === 'number' ? datos.offset : offset,
    limit: typeof datos.limit === 'number' ? datos.limit : limit,
  };
}

/**
 * Carga la PRIMERA página de canales.
 * Se usa al arrancar la app, o al limpiar filtros.
 * También cae a otros orígenes (JSON local, M3U8, fuentes.json) si el Worker falla.
 */
async function cargarCanalesOficiales() {
  // 1) Worker con paginación (fuente principal)
  try {
    const resultado = await pedirCanalesAlWorker({ offset: 0, limit: PAGINA_TAMANO });
    if (resultado.canales.length > 0) {
      console.info(`[canales] Fuente: Worker/KV paginado (${resultado.canales.length}/${resultado.total} canales)`);
      return {
        canales: resultado.canales,
        fuente: 'kv',
        paginado: true,
        total: resultado.total,
      };
    }
  } catch (e) {
    console.warn('No se pudo leer canales paginados del Worker:', e);
  }

  // 2) Fallback: canales.json local (sin paginación, todo de una)
  try {
    const resp = await fetch(URL_CANALES_JSON, { cache: 'no-store' });
    if (resp.ok) {
      const datos = await resp.json();
      const lista = Array.isArray(datos) ? datos : (datos.canales || []);
      const normalizados = normalizarDesdeJSON(lista, 0);
      if (normalizados.length > 0) {
        console.info(`[canales] Fuente: canales.json local (${normalizados.length} canales)`);
        return {
          canales: normalizados,
          fuente: 'json',
          paginado: false,
          total: normalizados.length,
        };
      }
    }
  } catch (e) {
    console.warn('No se pudo leer canales.json:', e);
  }

  // 3) Fallback: canales.m3u8 local
  try {
    const resp = await fetch(URL_CANALES_M3U8, { cache: 'no-store' });
    if (resp.ok) {
      const texto = await resp.text();
      const normalizados = normalizarCanales(parsearM3U(texto));
      if (normalizados.length > 0) {
        console.info(`[canales] Fuente: canales.m3u8 local (${normalizados.length} canales)`);
        return {
          canales: normalizados,
          fuente: 'm3u8',
          paginado: false,
          total: normalizados.length,
        };
      }
    }
  } catch (e) {
    console.warn('No se pudo leer canales.m3u8:', e);
  }

  // 4) Fallback: fuentes.json
  try {
    const combinados = await obtenerListaCombinadaDesdeFuentes();
    if (combinados.length > 0) {
      console.info(`[canales] Fuente: fuentes.json (${combinados.length} canales)`);
      return {
        canales: combinados,
        fuente: 'fuentes',
        paginado: false,
        total: combinados.length,
      };
    }
  } catch (e) {
    console.warn('No se pudo leer fuentes.json:', e);
  }

  console.warn('[canales] No se encontró ninguna fuente válida');
  return { canales: [], fuente: null, paginado: false, total: 0 };
}

/**
 * Carga la SIGUIENTE página y la agrega a la lista actual.
 * Se llama desde el botón "Ver más canales".
 */
async function cargarMasCanales() {
  const p = estado.paginacion;

  // Evitar doble carga
  if (p.cargando) return;

  // Si estamos en modo fallback (no hay paginación del Worker), no hacer nada
  if (!p.modoServidor) return;

  // Si no hay más canales, no hacer nada
  if (!p.hayMas) return;

  p.cargando = true;
  actualizarBotonCargarMas();

  try {
    const siguienteOffset = p.offset + PAGINA_TAMANO;
    const resultado = await pedirCanalesAlWorker({
      offset: siguienteOffset,
      limit: PAGINA_TAMANO,
      q: p.q,
      grupo: p.grupo,
    });

    // Filtrar duplicados por id (por si el Worker devuelve alguno repetido)
    const idsExistentes = new Set(estado.canales.map(c => c.id));
    const nuevos = resultado.canales.filter(c => !idsExistentes.has(c.id));

    estado.canales = estado.canales.concat(nuevos);
    p.offset = resultado.offset;
    p.total = resultado.total;
    p.hayMas = (estado.canales.length < resultado.total) && (nuevos.length > 0);

    // Actualizar la lista guardada activa
    const listaActiva = estado.listasGuardadas.find(l => l.id === estado.listaActivaId);
    if (listaActiva) {
      listaActiva.canales = estado.canales;
      guardarListasEnStorage();
    }

    // Re-render de filtros (para que aparezcan los nuevos grupos) y de la guía
    renderFiltros();
    renderGuia();
  } catch (e) {
    console.warn('No se pudieron cargar más canales:', e);
    mostrarToastSimple('No se pudieron cargar más canales');
  } finally {
    p.cargando = false;
    actualizarBotonCargarMas();
  }
}

/**
 * Aplica una búsqueda server-side. Reemplaza toda la lista actual.
 */
async function buscarEnServidor(query) {
  const p = estado.paginacion;

  // Si no hay Worker paginando, no hacer nada (modo fallback local)
  if (!p.modoServidor) return;

  p.cargando = true;
  p.q = query;
  p.offset = 0;
  p.grupo = ''; // Búsqueda global ignora el grupo
  estado.filtro = 'Todos';

  renderFiltros();
  renderGuia(); // Para que muestre "cargando"

  try {
    const resultado = await pedirCanalesAlWorker({
      offset: 0,
      limit: PAGINA_TAMANO,
      q: query,
      grupo: '',
    });

    estado.canales = resultado.canales;
    p.offset = resultado.offset;
    p.total = resultado.total;
    p.hayMas = estado.canales.length < resultado.total;

    const listaActiva = estado.listasGuardadas.find(l => l.id === estado.listaActivaId);
    if (listaActiva) {
      listaActiva.canales = estado.canales;
      guardarListasEnStorage();
    }

    renderFiltros();
    renderGuia();
  } catch (e) {
    console.warn('Error en búsqueda server-side:', e);
    mostrarToastSimple('Error al buscar');
  } finally {
    p.cargando = false;
    actualizarBotonCargarMas();
  }
}

/**
 * Aplica un filtro de grupo server-side. Reemplaza toda la lista actual.
 */
async function filtrarPorGrupoEnServidor(grupo) {
  const p = estado.paginacion;

  if (!p.modoServidor) return;

  p.cargando = true;
  p.grupo = grupo || '';
  p.q = ''; // Filtro de grupo ignora la búsqueda
  p.offset = 0;
  estado.busqueda = '';

  const inputBusqueda = document.getElementById('campo-busqueda');
  if (inputBusqueda) inputBusqueda.value = '';

  renderFiltros();
  renderGuia();

  try {
    const resultado = await pedirCanalesAlWorker({
      offset: 0,
      limit: PAGINA_TAMANO,
      q: '',
      grupo: grupo || '',
    });

    estado.canales = resultado.canales;
    p.offset = resultado.offset;
    p.total = resultado.total;
    p.hayMas = estado.canales.length < resultado.total;

    const listaActiva = estado.listasGuardadas.find(l => l.id === estado.listaActivaId);
    if (listaActiva) {
      listaActiva.canales = estado.canales;
      guardarListasEnStorage();
    }

    renderFiltros();
    renderGuia();
  } catch (e) {
    console.warn('Error en filtro por grupo:', e);
    mostrarToastSimple('Error al filtrar');
  } finally {
    p.cargando = false;
    actualizarBotonCargarMas();
  }
}

/**
 * Resetea el estado de paginación y recarga la primera página.
 * Se usa al limpiar filtros o cambiar de lista.
 */
async function recargarDesdeElPrincipio() {
  const p = estado.paginacion;

  if (!p.modoServidor) return;

  p.q = '';
  p.grupo = '';
  p.offset = 0;
  p.total = 0;
  p.hayMas = true;
  estado.filtro = 'Todos';
  estado.busqueda = '';
  estado.soloFavoritos = false;
  estado.soloDestacados = false;

  const inputBusqueda = document.getElementById('campo-busqueda');
  if (inputBusqueda) inputBusqueda.value = '';

  try {
    const resultado = await pedirCanalesAlWorker({ offset: 0, limit: PAGINA_TAMANO });

    estado.canales = resultado.canales;
    p.offset = resultado.offset;
    p.total = resultado.total;
    p.hayMas = estado.canales.length < resultado.total;

    const listaActiva = estado.listasGuardadas.find(l => l.id === estado.listaActivaId);
    if (listaActiva) {
      listaActiva.canales = estado.canales;
      guardarListasEnStorage();
    }

    renderFiltros();
    renderGuia();
  } catch (e) {
    console.warn('Error recargando desde el principio:', e);
  }
}

function normalizarDesdeJSON(lista, offsetBase) {
  const offset = typeof offsetBase === 'number' ? offsetBase : 0;
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
        numero: String(offset + i + 1).padStart(2, '0'),
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

  if (hayFiltrosActivos()) {
    const chipLimpiar = document.createElement('button');
    chipLimpiar.className = 'filtro';
    chipLimpiar.textContent = t('limpiar_filtros');
    chipLimpiar.tabIndex = 0;
    chipLimpiar.style.cssText = 'background: rgba(229, 9, 20, 0.25); border-color: rgba(229, 9, 20, 0.6); color: #fff; font-weight: 600; margin-right: 6px;';
    chipLimpiar.addEventListener('click', limpiarFiltros);
    el.filtros.appendChild(chipLimpiar);
  }

  const chipFav = document.createElement('button');
  chipFav.className = 'filtro' + (estado.soloFavoritos ? ' activo' : '');
  chipFav.textContent = '\u2605 ' + t('favoritos');
  chipFav.tabIndex = 0;
  chipFav.addEventListener('click', () => {
    estado.soloFavoritos = !estado.soloFavoritos;
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
  chipTodos.className = 'filtro' + (estado.filtro === 'Todos' ? ' activo' : '');
  chipTodos.textContent = t('todos');
  chipTodos.tabIndex = 0;
  chipTodos.addEventListener('click', () => {
    // Si estamos en modo servidor, usamos el filtro server-side
    if (estado.paginacion.modoServidor && estado.filtro !== 'Todos') {
      filtrarPorGrupoEnServidor('');
    } else {
      estado.filtro = 'Todos';
      renderFiltros();
      renderGuia();
    }
  });
  el.filtros.appendChild(chipTodos);

  for (const g of grupos) {
    const b = document.createElement('button');
    b.className = 'filtro' + (estado.filtro === g ? ' activo' : '');
    b.textContent = etiquetaGrupo(g);
    b.tabIndex = 0;
    b.addEventListener('click', () => {
      // Si estamos en modo servidor, filtramos server-side
      if (estado.paginacion.modoServidor) {
        filtrarPorGrupoEnServidor(g);
      } else {
        estado.filtro = g;
        renderFiltros();
        renderGuia();
      }
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

    if (estado.filtro !== 'Todos') {
      const valorGrupo = agrupacionEfectiva() === 'pais' ? (c.pais || '') : c.grupo;
      if (valorGrupo !== estado.filtro) return false;
    }

    if (!q) return true;

    const coincideCanal = c.nombre.toLowerCase().includes(q) || c.grupo.toLowerCase().includes(q);
    const actual = programaActual(c.tvgId);
    const siguiente = programaSiguiente(c.tvgId);

    const coincidePrograma =
      (actual && (actual.titulo.toLowerCase().includes(q) || actual.descripcion.toLowerCase().includes(q))) ||
      (siguiente && (siguiente.titulo.toLowerCase().includes(q) || siguiente.descripcion.toLowerCase().includes(q)));

    return coincideCanal || coincidePrograma;
  });
}

function hayFiltrosActivos() {
  return (
    estado.busqueda.trim() !== '' ||
    estado.filtro !== 'Todos' ||
    estado.soloFavoritos ||
    estado.soloDestacados ||
    estado.soloActivos
  );
}

function limpiarFiltros() {
  // Si estamos en modo servidor, recargar desde el principio
  if (estado.paginacion.modoServidor) {
    recargarDesdeElPrincipio();
    return;
  }

  // Modo local (fallback)
  estado.busqueda = '';
  estado.filtro = 'Todos';
  estado.soloFavoritos = false;
  estado.soloDestacados = false;
  estado.soloActivos = false;
  localStorage.setItem(CLAVE_SOLO_ACTIVOS, '0');

  const inputBusqueda = document.getElementById('campo-busqueda');
  if (inputBusqueda) inputBusqueda.value = '';

  renderFiltros();
  renderGuia();
}

function renderGuia() {
  const lista = canalesFiltrados();
  el.guia.innerHTML = '';
  el.guia.className = 'guia-contenedor modo-' + estado.modoVista;

  if (estado.canales.length === 0) {
    if (estado.paginacion.cargando) {
      el.guia.innerHTML = `<div class="cargando">${t('cargando')}</div>`;
      return;
    }
    el.guia.appendChild(vistaVacia(t('guia_vacia_titulo'), t('guia_vacia_texto'), true));
    return;
  }

  if (lista.length === 0) {
    if (estado.paginacion.cargando) {
      el.guia.innerHTML = `<div class="cargando">${t('cargando')}</div>`;
      return;
    }
    el.guia.appendChild(vistaVacia(t('sin_resultados_titulo'), t('sin_resultados_texto'), false));
    return;
  }

  const frag = document.createDocumentFragment();
  for (const canal of lista) {
    frag.appendChild(estado.modoVista === 'grilla' ? filaCanalGrid(canal) : filaCanalLista(canal));
  }
  el.guia.appendChild(frag);

  // Agregar el botón "Ver más canales" DIRECTAMENTE al DOM (no al frag, que ya está vacío)
  if (estado.paginacion.modoServidor && estado.paginacion.hayMas) {
    el.guia.appendChild(botonVerMas());
  } else if (estado.paginacion.modoServidor && !estado.paginacion.hayMas && estado.paginacion.total > PAGINA_TAMANO) {
    const fin = document.createElement('div');
    fin.className = 'fin-canales';
    fin.textContent = t('no_hay_mas');
    el.guia.appendChild(fin);
  }
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

function botonVerMas() {
  const cont = document.createElement('div');
  cont.className = 'ver-mas-cont';

  const btn = document.createElement('button');
  btn.id = 'boton-ver-mas';
  btn.className = 'boton-ver-mas';
  btn.type = 'button';

  if (estado.paginacion.cargando) {
    btn.disabled = true;
    btn.innerHTML = `<span class="boton-ver-mas__spinner"></span> ${t('cargando_mas')}`;
  } else {
    btn.innerHTML = `
      <span class="boton-ver-mas__icono" aria-hidden="true">▼</span>
      <span>${t('ver_mas_canales')}</span>
      <span class="boton-ver-mas__contador">(${estado.canales.length} / ${estado.paginacion.total})</span>
    `;
    btn.addEventListener('click', () => {
      cargarMasCanales();
    });
  }

  cont.appendChild(btn);
  return cont;
}

function actualizarBotonCargarMas() {
  const btn = document.getElementById('boton-ver-mas');
  if (!btn) return;
  if (estado.paginacion.cargando) {
    btn.disabled = true;
    btn.innerHTML = `<span class="boton-ver-mas__spinner"></span> ${t('cargando_mas')}`;
  } else {
    btn.disabled = false;
    btn.innerHTML = `
      <span class="boton-ver-mas__icono" aria-hidden="true">▼</span>
      <span>${t('ver_mas_canales')}</span>
      <span class="boton-ver-mas__contador">(${estado.canales.length} / ${estado.paginacion.total})</span>
    `;
  }
}

function filaCanalLista(canal) {
  const fila = document.createElement('div');
  fila.className = 'fila-canal modo-lista';
  const estadoCanal = estadoDeCanal(canal);
  if (estadoCanal) fila.classList.add(`estado-${estadoCanal}`);
  fila.dataset.id = canal.id;
  fila.setAttribute('role', 'button');
  fila.tabIndex = 0;

  const iniciales = obtenerIniciales(canal.nombre);
  const logoHtml = canal.logo
    ? `<img src="${canal.logo}" alt="" loading="lazy" onerror="this.parentElement.textContent='${iniciales}'">`
    : iniciales;

  const banderaHtml = canal.pais ? `<span class="fila-canal__bandera">${bandera(canal.pais)}</span>` : '';
  const enCurso = programaActual(canal.tvgId);

  // Pill según el estado (solo para inestable/caido/lento)
  let pillEstado = '';
  if (estadoCanal === 'inestable') pillEstado = '<span class="pill-estado pill-estado--inestable" title="Falló en el último chequeo">🟡 Inestable</span>';
  else if (estadoCanal === 'caido') pillEstado = '<span class="pill-estado pill-estado--caido" title="No responde">🔴 Caído</span>';
  else if (estadoCanal === 'lento') pillEstado = '<span class="pill-estado pill-estado--lento" title="Tarda en abrir">⏱ Lento</span>';

  fila.innerHTML = `
    <span class="fila-canal__numero">${canal.numero}</span>
    <span class="fila-canal__logo">${logoHtml}</span>
    <span class="fila-canal__info">
      <span class="fila-canal__nombre">${canal.nombre} ${pillEstado}</span>
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
  const estadoCanal = estadoDeCanal(canal);
  if (estadoCanal) fila.classList.add(`estado-${estadoCanal}`);
  fila.dataset.id = canal.id;
  fila.setAttribute('role', 'button');
  fila.tabIndex = 0;

  const iniciales = obtenerIniciales(canal.nombre);
  const logoHtml = canal.logo
    ? `<img src="${canal.logo}" alt="" loading="lazy" onerror="this.parentElement.textContent='${iniciales}'">`
    : iniciales;

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

  // Pill según el estado (solo para inestable/caido/lento)
  let pillEstado = '';
  if (estadoCanal === 'inestable') pillEstado = '<span class="pill-estado pill-estado--inestable" title="Falló en el último chequeo">🟡 Inestable</span>';
  else if (estadoCanal === 'caido') pillEstado = '<span class="pill-estado pill-estado--caido" title="No responde">🔴 Caído</span>';
  else if (estadoCanal === 'lento') pillEstado = '<span class="pill-estado pill-estado--lento" title="Tarda en abrir">⏱ Lento</span>';

  fila.innerHTML = `
    <span class="fila-canal__numero">${canal.numero}</span>
    <span class="fila-canal__logo">${logoHtml}</span>
    <span class="fila-canal__info">
      <span class="fila-canal__nombre">${canal.nombre} ${pillEstado}</span>
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
   Vista
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
   Listas
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
   Reproductor
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

  const canal = estado.canales[estado.indiceActual];
  const programaObjetivo = siguiente || actual;
  const btn = crearBotonRecordar(programaObjetivo, canal);
  if (btn) rp.programa.appendChild(btn);
}

function reproducirCanalPorId(id) {
  const canal = estado.canales.find((c) => c.id === id);
  if (!canal) {
    // El canal no está en la lista cargada. Puede pasar si:
    // - Es un favorito de una página que no está cargada
    // - Es un canal del historial que no está en la página actual
    // Buscamos si está en otra lista guardada o avisamos.
    mostrarToastSimple('Canal no disponible en la lista actual. Cargá más canales o buscá de nuevo.');
    return;
  }

  if (estado.categoriasBloqueadas.includes(canal.grupo) && estado.parentalPin) {
    const pinIngresado = prompt(t('ingrese_pin'));
    if (pinIngresado !== estado.parentalPin) {
      alert(t('pin_incorrecto'));
      return;
    }
  }

  agregarAlHistorial(canal);

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
   Reportar
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
   Navegación pantallas
   ======================================================= */

function irAConfig() {
  el.pantallaGuia.classList.remove('activa');
  el.pantallaConfig.classList.add('activa');
  renderControlParentalUI();
  renderSyncUI();
  renderNotificacionesUI();
}

function irAGuia() {
  el.pantallaConfig.classList.remove('activa');
  el.pantallaGuia.classList.add('activa');
}

/* =======================================================
   Pantalla cargar lista
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

    const checkboxes = document.querySelectorAll('#parental-categorias input[type="checkbox"]');
    const bloqueadas = [];
    checkboxes.forEach(cb => {
      if (cb.checked) bloqueadas.push(cb.value);
    });

    estado.categoriasBloqueadas = bloqueadas;

    guardarDatosPerfilActivo();

    renderFiltros();
    renderGuia();
    mostrarMensaje('Configuracion parental guardada \u2713', 'ok');
  });
}

/* =======================================================
   Actualización
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

    const { canales: canalesOficiales, total } = await cargarCanalesOficiales();
    estado.listasGuardadas = [{ id: 'oficial', nombre: 'Oficial', canales: canalesOficiales }];
    estado.listaActivaId = 'oficial';

    // Resetear estado de paginación
    estado.paginacion.offset = 0;
    estado.paginacion.total = total || canalesOficiales.length;
    estado.paginacion.hayMas = canalesOficiales.length < estado.paginacion.total;
    estado.paginacion.q = '';
    estado.paginacion.grupo = '';

    guardarListasEnStorage();
    cambiarListaActiva('oficial');

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
   Eventos generales
   ======================================================= */

document.getElementById('boton-config').addEventListener('click', irAConfig);
document.getElementById('boton-volver').addEventListener('click', irAGuia);
document.getElementById('boton-cerrar-reproductor').addEventListener('click', cerrarReproductor);
document.getElementById('boton-canal-anterior').addEventListener('click', () => cambiarCanal(-1));
document.getElementById('boton-canal-siguiente').addEventListener('click', () => cambiarCanal(1));

const btnRecientes = document.getElementById('boton-recientes');
if (btnRecientes) {
  btnRecientes.addEventListener('click', abrirModalHistorial);
}

const btnRecordatorios = document.getElementById('boton-recordatorios');
if (btnRecordatorios) {
  btnRecordatorios.addEventListener('click', abrirModalRecordatorios);
}

const btnPerfil = document.getElementById('boton-perfil');
if (btnPerfil) {
  btnPerfil.addEventListener('click', abrirModalPerfiles);
}

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
  const valor = e.target.value;
  estado.busqueda = valor;

  // Debounce para búsqueda server-side
  if (estado.paginacion.modoServidor) {
    if (estado.debounceBusqueda) clearTimeout(estado.debounceBusqueda);
    estado.debounceBusqueda = setTimeout(() => {
      buscarEnServidor(valor.trim());
    }, 400);
  } else {
    // Modo local
    renderFiltros();
    renderGuia();
  }
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
   Arranque
   ======================================================= */

async function iniciar() {
  document.title = 'Guia de Canales';

  inicializarPerfiles();
  cargarDatosPerfilActivo();

  limpiarRecordatoriosViejos();

  document.querySelectorAll('.agrupar__opcion').forEach((b) => {
    b.classList.toggle('activo', b.dataset.agrupar === estado.agrupacion);
  });

  const listasLocales = cargarListasDeStorage();
  if (listasLocales.length > 0) {
    estado.listasGuardadas = listasLocales;
    estado.hayMetadatos = listasLocales.some(l => l.canales.some(c => 'estado' in c));
  } else {
    const { canales: canalesOficiales, fuente, paginado, total } = await cargarCanalesOficiales();
    estado.listasGuardadas = [{ id: 'oficial', nombre: 'Oficial', canales: canalesOficiales }];
    estado.hayMetadatos = fuente === 'json';
    guardarListasEnStorage();

    // Guardar info de paginación
    estado.paginacion.modoServidor = !!paginado;
    estado.paginacion.offset = 0;
    estado.paginacion.total = total || canalesOficiales.length;
    estado.paginacion.hayMas = paginado ? (canalesOficiales.length < estado.paginacion.total) : false;
  }

  // Si venimos de localStorage y la fuente era el Worker, activar modo servidor.
  // No podemos saberlo con certeza, así que lo intentamos igual: si el Worker responde,
  // se activa paginación. Si no, cae a modo local.
  if (!estado.paginacion.modoServidor) {
    try {
      const primerTest = await pedirCanalesAlWorker({ offset: 0, limit: 1 });
      if (primerTest.total > 0) {
        estado.paginacion.modoServidor = true;
        estado.paginacion.total = primerTest.total;
      }
    } catch {
      // Sin Worker, seguimos en modo local
    }
  }

  cambiarListaActiva(estado.listaActivaId);

  if (!localStorage.getItem(CLAVE_AGRUPACION) && hayPaisesEnLista()) {
    estado.agrupacion = 'pais';
  }
  document.querySelectorAll('.agrupar__opcion').forEach((b) => {
    b.classList.toggle('activo', b.dataset.agrupar === agrupacionEfectiva());
  });

  aplicarIdioma();

  Promise.all([
    cargarCaidosDelWorker(),
    cargarEstadoCanales(),
  ]).then(() => renderGuia());

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

  arrancarChequeoRecordatorios();
}

iniciar();