/**
 * Cloudflare Worker para la PWA "Guía de Canales".
 *
 * Rutas:
 *   GET  /proxy?url=...        → proxy CORS (m3u8, ts, key, etc.)
 *   GET  /canales              → canales (KV con fallback a canales.json)
 *                                Acepta: ?limit= & ?offset= & ?q= & ?grupo= & ?pais=
 *   GET  /estado-canales       → estado de canales (KV con fallback a estado-canales.json)
 *   GET  /fav/:syncId          → favoritos sincronizados (JSON)
 *   PUT  /fav/:syncId          → guardar favoritos (JSON en body)
 *   DELETE /fav/:syncId        → borrar favoritos
 *   POST /reportes             → enviar reporte de canal caído
 *   GET  /reportes             → listar reportes (requiere token admin)
 *   GET  /caidos               → lista de canales marcados como caídos (público)
 *   POST /admin/marcar-caido   → marcar/desmarcar canal como caído (requiere token)
 *   POST /admin/migrar-canales → migrar canales.json a KV (requiere token)
 *   POST /admin/migrar-estado  → migrar estado-canales.json a KV (requiere token)
 *   GET  /admin/canales        → listar canales del KV (requiere token)
 *   GET  /admin/estado         → listar estado de canales con paginación (requiere token)
 *   POST /admin/canal          → crear canal (requiere token)
 *   PUT  /admin/canal/:id      → editar canal (requiere token)
 *   DELETE /admin/canal/:id    → borrar canal (requiere token)
 *   GET  /health               → chequeo rápido
 */

// ============================================================
//  CONFIGURACIÓN
// ============================================================

const CANALES_URL_DEFECTO = 'https://raw.githubusercontent.com/trytv10/iptv-pwa/main/canales.json';
const CANALES_ESTADO_URL_DEFECTO = 'https://raw.githubusercontent.com/trytv10/iptv-pwa/main/estado-canales.json';

const PATRONES_STREAM = ['.m3u8', '.m3u', '.ts', '.m4s', '.key', '.mp4', '.aac'];

const MIME_STREAM = {
  m3u8: 'application/vnd.apple.mpegurl',
  m3u:  'application/vnd.apple.mpegurl',
  ts:   'video/mp2t',
  m4s:  'video/iso.segment',
  key:  'application/octet-stream',
  mp4:  'video/mp4',
  aac:  'audio/aac',
  json: 'application/json; charset=utf-8',
};

const TTL_STREAM = 30;
const TTL_MANIFIESTO = 10;
const TTL_CANALES = 300;
const TTL_ESTADO = 300;

const AUTO_MARCADO_UMBRAL_REPORTES = 3;
const AUTO_MARCADO_VENTANA_HORAS = 24;

const CLAVE_CANALES_KV = 'canales:lista';
const CLAVE_CAIDOS_KV = 'caidos:lista';
const CLAVE_ESTADO_KV = 'estado:lista';

// ============================================================
//  HELPERS
// ============================================================

function corsHeaders(origin = '*') {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, If-None-Match, Authorization',
    'Access-Control-Expose-Headers': 'ETag, Content-Length, Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...corsHeaders(),
      ...extraHeaders,
    },
  });
}

function extDeUrl(url) {
  try {
    const u = new URL(url);
    const path = u.pathname.toLowerCase();
    const punto = path.lastIndexOf('.');
    if (punto === -1) return '';
    return path.slice(punto + 1);
  } catch {
    return '';
  }
}

function mimeDeExt(ext) {
  return MIME_STREAM[ext] || 'application/octet-stream';
}

function pareceStream(url) {
  const ext = extDeUrl(url);
  return PATRONES_STREAM.some((p) => url.toLowerCase().includes(p)) || !!MIME_STREAM[ext];
}

async function hashString(str) {
  const buf = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}

async function generarEtag(texto) {
  const buf = new TextEncoder().encode(texto);
  const hash = await crypto.subtle.digest('SHA-1', buf);
  const hex = [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
  return `"${hex}"`;
}

function validarSyncId(id) {
  return /^[A-Za-z0-9_-]{8,64}$/.test(id);
}

function requiereAdmin(request, env, url) {
  const tokenEsperado = env.ADMIN_TOKEN;
  if (!tokenEsperado) {
    return { error: 'Falta configurar ADMIN_TOKEN en el Worker', status: 500 };
  }
  const authHeader = request.headers.get('Authorization') || '';
  const tokenHeader = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
  const tokenQuery = url.searchParams.get('token') || '';
  const tokenRecibido = tokenHeader || tokenQuery;

  if (!tokenRecibido || tokenRecibido !== tokenEsperado) {
    return { error: 'No autorizado', status: 401 };
  }
  return null;
}

function hashUrl(url) {
  let h = 0x811c9dc5;
  for (let i = 0; i < url.length; i++) {
    h ^= url.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

function normalizarCanal(c, i) {
  const url = c.url || c.stream || '';
  const pais = (c.tvg_country || c.pais || c.country || '').toString().toUpperCase();
  const grupo = c.grupo || c.group || c.group_title || 'General';
  const nombre = c.nombre || c.name || 'Sin nombre';
  const logo = c.tvg_logo || c.logo || '';
  const tvgId = c.tvg_id || c.tvgId || c['tvg-id'] || '';
  const estado = c.estado || '';

  return {
    id: c.id || ('c_' + hashUrl(url)),
    numero: String(i + 1).padStart(2, '0'),
    nombre,
    url,
    logo,
    grupo,
    pais,
    tvgId,
    estado,
    geobloqueado: !!c.geobloqueado,
    inestable: !!c.inestable,
    youtube: !!c.youtube,
  };
}

function limpiarCanalEntrada(body) {
  const canal = {};
  canal.nombre = (body.nombre || '').toString().trim().slice(0, 200);
  canal.url = (body.url || '').toString().trim().slice(0, 2000);
  canal.logo = (body.logo || '').toString().trim().slice(0, 2000);
  canal.grupo = (body.grupo || '').toString().trim().slice(0, 200) || 'General';
  canal.pais = (body.pais || '').toString().trim().toUpperCase().slice(0, 4);
  canal.tvgId = (body.tvgId || '').toString().trim().slice(0, 200);
  canal.estado = (body.estado || '').toString().trim().slice(0, 64);
  canal.geobloqueado = !!body.geobloqueado;
  canal.inestable = !!body.inestable;
  canal.youtube = !!body.youtube;
  canal.numero = (body.numero || '').toString().trim().slice(0, 8);
  return canal;
}

// ============================================================
//  RUTA: /proxy
// ============================================================

async function manejarProxy(request, url) {
  const target = url.searchParams.get('url');
  if (!target) return json({ error: 'Falta el parámetro ?url=' }, 400);

  let targetUrl;
  try { targetUrl = new URL(target); } catch { return json({ error: 'URL inválida' }, 400); }
  if (!['http:', 'https:'].includes(targetUrl.protocol)) {
    return json({ error: 'Solo se permiten URLs http/https' }, 400);
  }

  const headers = new Headers();
  const ua = request.headers.get('User-Agent');
  if (ua) headers.set('User-Agent', ua);
  const referer = request.headers.get('Referer');
  if (referer) headers.set('Referer', referer);
  if (!ua) headers.set('User-Agent', 'Mozilla/5.0 (compatible; IPTVProxy/1.0)');
  const range = request.headers.get('Range');
  if (range) headers.set('Range', range);

  let upstream;
  try {
    upstream = await fetch(targetUrl.toString(), {
      method: 'GET', headers, redirect: 'follow',
      cf: { cacheTtl: pareceStream(target) ? TTL_STREAM : TTL_MANIFIESTO, cacheEverything: true },
    });
  } catch (e) {
    return json({ error: 'No se pudo conectar al origen', detalle: e.message }, 502);
  }

  if (!upstream.ok && upstream.status !== 206) {
    return new Response(`Origen devolvió HTTP ${upstream.status}`, {
      status: upstream.status,
      headers: { ...corsHeaders(), 'Content-Type': 'text/plain' },
    });
  }

  const contentType = upstream.headers.get('Content-Type') || '';
  const ext = extDeUrl(target);

  if (ext === 'm3u8' || ext === 'm3u' || contentType.includes('mpegurl') || contentType.includes('x-mpegURL')) {
    const texto = await upstream.text();
    const reescrito = reescribirManifiesto(texto, targetUrl);
    return new Response(reescrito, {
      status: 200,
      headers: { 'Content-Type': MIME_STREAM.m3u8, 'Cache-Control': `public, max-age=${TTL_MANIFIESTO}`, ...corsHeaders() },
    });
  }

  const headersSalida = new Headers(corsHeaders());
  headersSalida.set('Content-Type', contentType || mimeDeExt(ext));
  const cl = upstream.headers.get('Content-Length');
  if (cl) headersSalida.set('Content-Length', cl);
  const cr = upstream.headers.get('Content-Range');
  if (cr) headersSalida.set('Content-Range', cr);
  const ar = upstream.headers.get('Accept-Ranges');
  if (ar) headersSalida.set('Accept-Ranges', ar);
  headersSalida.set('Cache-Control', `public, max-age=${TTL_STREAM}`);

  return new Response(upstream.body, { status: upstream.status, headers: headersSalida });
}

function reescribirManifiesto(texto, baseUrl) {
  const lineas = texto.split(/\r?\n/);
  const salida = [];
  const proxyAbsoluta = (abs) => /^https?:\/\//i.test(abs) ? `/proxy?url=${encodeURIComponent(abs)}` : abs;
  const proxificarUrl = (uri) => {
    try { return proxyAbsoluta(new URL(uri, baseUrl).toString()); } catch { return uri; }
  };

  for (let i = 0; i < lineas.length; i++) {
    let linea = lineas[i];
    const recortada = linea.trim();
    if (recortada.startsWith('#EXT-X-KEY') || recortada.startsWith('#EXT-X-MAP') ||
        recortada.startsWith('#EXT-X-MEDIA') || recortada.startsWith('#EXT-X-PART') ||
        recortada.startsWith('#EXT-X-PRELOAD-HINT')) {
      linea = recortada.replace(/URI="([^"]+)"/g, (_m, uri) => `URI="${proxificarUrl(uri)}"`);
      salida.push(linea);
    } else if (recortada.startsWith('#EXT-X-STREAM-INF')) {
      salida.push(recortada);
      let j = i + 1;
      while (j < lineas.length && (!lineas[j].trim() || lineas[j].trim().startsWith('#'))) { salida.push(lineas[j]); j++; }
      if (j < lineas.length) { salida.push(proxificarUrl(lineas[j].trim())); i = j; }
    } else if (recortada && !recortada.startsWith('#')) {
      salida.push(proxificarUrl(recortada));
    } else {
      salida.push(linea);
    }
  }
  return salida.join('\n');
}

// ============================================================
//  RUTA: /canales
// ============================================================

async function manejarCanales(request, env) {
  const url = new URL(request.url);

  if (env.FAVORITOS) {
    try {
      const kv = await env.FAVORITOS.get(CLAVE_CANALES_KV, 'json');
      if (kv && Array.isArray(kv.canales) && kv.canales.length > 0) {
        return responderCanales(request, url, kv.canales, kv.actualizado || null, 'kv');
      }
    } catch (e) { console.warn('Error leyendo KV canales:', e); }
  }

  const urlRemota = env.CANALES_URL || CANALES_URL_DEFECTO;
  const cache = caches.default;
  const cacheKey = new Request(`${urlRemota}#__canales_cache`, { method: 'GET' });

  let respuestaOrigen = await cache.match(cacheKey);
  if (!respuestaOrigen) {
    let origen;
    try {
      origen = await fetch(urlRemota, { cf: { cacheTtl: TTL_CANALES, cacheEverything: true } });
    } catch (e) {
      return json({ error: 'No se pudo obtener canales.json', detalle: e.message }, 502);
    }
    if (!origen.ok) return json({ error: `Origen devolvió HTTP ${origen.status}` }, origen.status);

    const texto = await origen.text();
    const etag = await generarEtag(texto);
    respuestaOrigen = new Response(texto, {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'ETag': etag, 'Cache-Control': `public, max-age=${TTL_CANALES}` },
    });
    await cache.put(cacheKey, respuestaOrigen.clone());
  }

  const cuerpo = await respuestaOrigen.text();
  let canalesJson = [];
  try {
    const datos = JSON.parse(cuerpo);
    canalesJson = Array.isArray(datos) ? datos : (datos.canales || []);
  } catch { canalesJson = []; }

  return responderCanales(request, url, canalesJson, null, 'github');
}

function responderCanales(request, url, canales, actualizado, fuente) {
  const tienePaginacion = url.searchParams.has('limit') || url.searchParams.has('offset');
  const tieneBusqueda = url.searchParams.has('q');
  const tieneGrupo = url.searchParams.has('grupo');
  const tienePais = url.searchParams.has('pais');
  const incluirBaja = url.searchParams.get('incluirBaja') === 'true';

  if (!tienePaginacion && !tieneBusqueda && !tieneGrupo && !tienePais && !incluirBaja) {
    const etag = `"${canales.length}-${actualizado || 'x'}"`;
    const ifNoneMatch = request.headers.get('If-None-Match');
    if (ifNoneMatch && ifNoneMatch === etag) {
      return new Response(null, {
        status: 304,
        headers: { 'ETag': etag, 'Cache-Control': `public, max-age=${TTL_CANALES}`, ...corsHeaders() },
      });
    }
    return json({ ok: true, fuente, total: canales.length, actualizado, canales }, 200, {
      'Cache-Control': `public, max-age=${TTL_CANALES}`, 'ETag': etag,
    });
  }

  let filtrados = canales;

  const q = (url.searchParams.get('q') || '').trim().toLowerCase();
  if (q) {
    filtrados = filtrados.filter((c) => {
      const nombre = (c.nombre || c.name || '').toLowerCase();
      const grupo = (c.grupo || c.group || '').toLowerCase();
      const pais = (c.pais || c.country || '').toLowerCase();
      const urlCanal = (c.url || c.stream || '').toLowerCase();
      return nombre.includes(q) || grupo.includes(q) || pais.includes(q) || urlCanal.includes(q);
    });
  }

  const grupo = url.searchParams.get('grupo') || '';
  if (grupo) filtrados = filtrados.filter((c) => (c.grupo || c.group || '') === grupo);

  const pais = url.searchParams.get('pais') || '';
  if (pais) filtrados = filtrados.filter((c) => (c.pais || c.country || '').toUpperCase() === pais.toUpperCase());

  const limit = Math.min(parseInt(url.searchParams.get('limit') || '75', 10), 500);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

  const total = filtrados.length;
  const pagina = filtrados.slice(offset, offset + limit);

  return json({ ok: true, fuente, total, offset, limit, actualizado, canales: pagina }, 200, {
    'Cache-Control': `public, max-age=${TTL_CANALES}`,
  });
}

// ============================================================
//  RUTA: /estado-canales
// ============================================================

async function manejarEstadoCanales(request, env) {
  if (env.FAVORITOS) {
    try {
      const kv = await env.FAVORITOS.get(CLAVE_ESTADO_KV, 'json');
      if (kv && kv.canales && typeof kv.canales === 'object') {
        return responderEstado(request, kv, 'kv');
      }
    } catch (e) { console.warn('Error leyendo estado de KV:', e); }
  }

  const urlRemota = env.CANALES_ESTADO_URL || CANALES_ESTADO_URL_DEFECTO;
  const cache = caches.default;
  const cacheKey = new Request(`${urlRemota}#__estado_cache`, { method: 'GET' });

  let respuestaOrigen = await cache.match(cacheKey);
  if (!respuestaOrigen) {
    let origen;
    try {
      origen = await fetch(urlRemota, { cf: { cacheTtl: TTL_ESTADO, cacheEverything: true } });
    } catch (e) {
      return json({ error: 'No se pudo obtener estado-canales.json', detalle: e.message }, 502);
    }
    if (!origen.ok) return json({ error: `Origen devolvió HTTP ${origen.status}` }, origen.status);

    const texto = await origen.text();
    const etag = await generarEtag(texto);
    respuestaOrigen = new Response(texto, {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'ETag': etag, 'Cache-Control': `public, max-age=${TTL_ESTADO}` },
    });
    await cache.put(cacheKey, respuestaOrigen.clone());
  }

  const cuerpo = await respuestaOrigen.text();
  let datos = null;
  try { datos = JSON.parse(cuerpo); } catch { datos = null; }

  if (!datos || !datos.canales) return json({ error: 'estado-canales.json no tiene canales' }, 502);

  return responderEstado(request, datos, 'github');
}

function responderEstado(request, datos, fuente) {
  const etag = `"estado-${datos.actualizado || 'x'}-${datos.total || 0}"`;
  const ifNoneMatch = request.headers.get('If-None-Match');

  if (ifNoneMatch && ifNoneMatch === etag) {
    return new Response(null, {
      status: 304,
      headers: { 'ETag': etag, 'Cache-Control': `public, max-age=${TTL_ESTADO}`, ...corsHeaders() },
    });
  }

  return json({
    ok: true,
    fuente,
    actualizado: datos.actualizado || null,
    total: datos.total || 0,
    resumen: datos.resumen || null,
    canales: datos.canales || {},
  }, 200, {
    'Cache-Control': `public, max-age=${TTL_ESTADO}`,
    'ETag': etag,
  });
}

// ============================================================
//  RUTA: /fav/:syncId
// ============================================================

async function manejarFavoritos(request, env, syncId) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);
  if (!validarSyncId(syncId)) return json({ error: 'syncId inválido (8-64 chars alfanuméricos)' }, 400);

  const key = `fav:${syncId}`;

  if (request.method === 'GET') {
    const valor = await env.FAVORITOS.get(key, 'json');
    if (!valor) return json({ syncId, favoritos: [], vacio: true });
    return json({ syncId, favoritos: valor.favoritos || [], actualizado: valor.actualizado });
  }

  if (request.method === 'PUT') {
    let body;
    try { body = await request.json(); } catch { return json({ error: 'Body JSON inválido' }, 400); }
    const favoritos = Array.isArray(body.favoritos) ? body.favoritos : [];
    if (favoritos.length > 5000) return json({ error: 'Demasiados favoritos (máx 5000)' }, 400);
    const valor = { favoritos, actualizado: new Date().toISOString() };
    await env.FAVORITOS.put(key, JSON.stringify(valor), { expirationTtl: 60 * 60 * 24 * 730 });
    return json({ ok: true, syncId, total: favoritos.length });
  }

  if (request.method === 'DELETE') {
    await env.FAVORITOS.delete(key);
    return json({ ok: true, syncId, borrado: true });
  }

  return json({ error: 'Método no permitido' }, 405);
}

// ============================================================
//  RUTA: POST /reportes
// ============================================================

async function manejarReporte(request, env) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'Body JSON inválido' }, 400); }

  const canalId = (body.canalId || '').toString().trim().slice(0, 128);
  const canalNombre = (body.canalNombre || '').toString().trim().slice(0, 200);
  const canalUrl = (body.canalUrl || '').toString().trim().slice(0, 500);
  const motivo = (body.motivo || 'caido').toString().trim().slice(0, 64);
  const comentario = (body.comentario || '').toString().trim().slice(0, 500);

  if (!canalId || !canalUrl) return json({ error: 'Faltan canalId o canalUrl' }, 400);

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const ipHash = await hashString(ip);
  const rlKey = `rl:reporte:${ipHash}:${canalId}`;
  const yaExiste = await env.FAVORITOS.get(rlKey);
  if (yaExiste) return json({ ok: true, duplicado: true, mensaje: 'Ya reportaste este canal hace poco' });
  await env.FAVORITOS.put(rlKey, '1', { expirationTtl: 3600 });

  const idReporte = `rep_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const reporte = { id: idReporte, canalId, canalNombre, canalUrl, motivo, comentario, ipHash, userAgent: (request.headers.get('User-Agent') || '').slice(0, 200), fecha: new Date().toISOString() };

  await env.FAVORITOS.put(`reporte:${idReporte}`, JSON.stringify(reporte), { expirationTtl: 60 * 60 * 24 * 90 });

  const autoMarcado = await autoMarcarSiCorresponde(env, canalId, canalNombre, canalUrl);

  return json({ ok: true, id: idReporte, autoMarcado, umbralReportes: AUTO_MARCADO_UMBRAL_REPORTES, ventanaHoras: AUTO_MARCADO_VENTANA_HORAS });
}

async function contarReportesRecientes(env, canalId, horas) {
  const desdeMs = Date.now() - (horas * 60 * 60 * 1000);
  const lista = await env.FAVORITOS.list({ prefix: 'reporte:', limit: 1000 });
  let cuenta = 0;
  for (const key of lista.keys) {
    const valor = await env.FAVORITOS.get(key.name, 'json');
    if (!valor) continue;
    if (valor.canalId !== canalId) continue;
    const fechaMs = new Date(valor.fecha || 0).getTime();
    if (fechaMs >= desdeMs) cuenta++;
  }
  return cuenta;
}

async function autoMarcarSiCorresponde(env, canalId, canalNombre, canalUrl) {
  const cuenta = await contarReportesRecientes(env, canalId, AUTO_MARCADO_VENTANA_HORAS);
  if (cuenta < AUTO_MARCADO_UMBRAL_REPORTES) return false;

  const raw = await env.FAVORITOS.get(CLAVE_CAIDOS_KV, 'json');
  const datos = raw || {};
  if (datos[canalId] && datos[canalId].marcado) return false;

  datos[canalId] = {
    marcado: true, marcadoEn: new Date().toISOString(), origen: 'auto',
    comentario: `Auto-marcado: ${cuenta} reportes en ${AUTO_MARCADO_VENTANA_HORAS}h`,
    canalNombre: canalNombre || '', canalUrl: canalUrl || '', reportesRecientes: cuenta,
  };

  await env.FAVORITOS.put(CLAVE_CAIDOS_KV, JSON.stringify(datos), { expirationTtl: 60 * 60 * 24 * 365 });
  return true;
}

// ============================================================
//  RUTA: GET /reportes
// ============================================================

async function listarReportes(request, env, url) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  const limite = Math.min(parseInt(url.searchParams.get('limite') || '100', 10), 500);
  const motivoFiltro = url.searchParams.get('motivo') || '';
  const canalFiltro = url.searchParams.get('canal') || '';

  const lista = await env.FAVORITOS.list({ prefix: 'reporte:', limit: 1000 });
  const reportes = [];

  for (const key of lista.keys) {
    const valor = await env.FAVORITOS.get(key.name, 'json');
    if (!valor) continue;
    if (motivoFiltro && valor.motivo !== motivoFiltro) continue;
    if (canalFiltro && valor.canalId !== canalFiltro) continue;
    reportes.push(valor);
  }

  reportes.sort((a, b) => (b.fecha || '').localeCompare(a.fecha || ''));

  const porCanal = {};
  for (const r of reportes) {
    const id = r.canalId || 'desconocido';
    if (!porCanal[id]) {
      porCanal[id] = {
        canalId: id, canalNombre: r.canalNombre || 'Sin nombre', canalUrl: r.canalUrl || '',
        total: 0, motivos: {}, ultimoReporte: r.fecha,
      };
    }
    porCanal[id].total++;
    porCanal[id].motivos[r.motivo] = (porCanal[id].motivos[r.motivo] || 0) + 1;
    if ((r.fecha || '') > (porCanal[id].ultimoReporte || '')) porCanal[id].ultimoReporte = r.fecha;
  }

  const ranking = Object.values(porCanal).sort((a, b) => b.total - a.total);
  const caidosRaw = await env.FAVORITOS.get(CLAVE_CAIDOS_KV, 'json');
  const caidos = caidosRaw || {};

  for (const r of ranking) {
    const info = caidos[r.canalId];
    r.marcadoCaido = !!(info && info.marcado);
    r.origenCaido = info ? (info.origen || 'admin') : null;
    r.comentarioCaido = info ? (info.comentario || '') : '';
    r.reportesRecientes = info ? (info.reportesRecientes || 0) : 0;
  }

  return json({
    ok: true,
    total: reportes.length,
    mostrados: Math.min(reportes.length, limite),
    reportes: reportes.slice(0, limite),
    ranking,
    config: { umbralReportes: AUTO_MARCADO_UMBRAL_REPORTES, ventanaHoras: AUTO_MARCADO_VENTANA_HORAS },
  });
}

// ============================================================
//  RUTA: GET /caidos
// ============================================================

async function listarCaidos(request, env) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const raw = await env.FAVORITOS.get(CLAVE_CAIDOS_KV, 'json');
  const datos = raw || {};
  const caidos = {};

  for (const [canalId, info] of Object.entries(datos)) {
    if (info && info.marcado) {
      caidos[canalId] = {
        marcado: true, marcadoEn: info.marcadoEn || '',
        origen: info.origen || 'admin', comentario: info.comentario || '',
      };
    }
  }
  return json({ ok: true, caidos });
}

// ============================================================
//  RUTA: POST /admin/marcar-caido
// ============================================================

async function marcarCaido(request, env, url) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'Body JSON inválido' }, 400); }

  const canalId = (body.canalId || '').toString().trim().slice(0, 128);
  const canalNombre = (body.canalNombre || '').toString().trim().slice(0, 200);
  const canalUrl = (body.canalUrl || '').toString().trim().slice(0, 500);
  const marcar = !!body.marcar;
  const comentario = (body.comentario || '').toString().trim().slice(0, 200);

  if (!canalId) return json({ error: 'Falta canalId' }, 400);

  const raw = await env.FAVORITOS.get(CLAVE_CAIDOS_KV, 'json');
  const datos = raw || {};

  if (marcar) {
    datos[canalId] = {
      marcado: true, marcadoEn: new Date().toISOString(), origen: 'admin',
      comentario, canalNombre, canalUrl,
    };
  } else {
    delete datos[canalId];
  }

  await env.FAVORITOS.put(CLAVE_CAIDOS_KV, JSON.stringify(datos), { expirationTtl: 60 * 60 * 24 * 365 });
  return json({ ok: true, canalId, marcado: marcar, total: Object.keys(datos).length });
}

// ============================================================
//  RUTA: POST /admin/migrar-canales
// ============================================================

async function migrarCanales(request, env, url) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  const urlRemota = env.CANALES_URL || CANALES_URL_DEFECTO;
  let resp;
  try {
    resp = await fetch(urlRemota, { cf: { cacheTtl: 0, cacheEverything: false } });
  } catch (e) {
    return json({ error: 'No se pudo descargar canales.json', detalle: e.message }, 502);
  }
  if (!resp.ok) return json({ error: `canales.json devolvió HTTP ${resp.status}` }, resp.status);

  let datos;
  try { datos = await resp.json(); } catch { return json({ error: 'canales.json no es un JSON válido' }, 400); }

  const lista = Array.isArray(datos) ? datos : (datos.canales || []);
  if (!Array.isArray(lista) || lista.length === 0) return json({ error: 'canales.json no tiene canales' }, 400);

  const canalesNormalizados = lista.filter((c) => c && (c.url || c.stream)).map((c, i) => normalizarCanal(c, i));

  const payload = {
    canales: canalesNormalizados,
    actualizado: new Date().toISOString(),
    version: 1,
    fuente: urlRemota,
  };

  await env.FAVORITOS.put(CLAVE_CANALES_KV, JSON.stringify(payload));
  return json({ ok: true, total: canalesNormalizados.length, actualizado: payload.actualizado, fuente: urlRemota });
}

// ============================================================
//  RUTA: POST /admin/migrar-estado
// ============================================================

async function migrarEstado(request, env, url) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  const urlRemota = env.CANALES_ESTADO_URL || CANALES_ESTADO_URL_DEFECTO;
  let resp;
  try {
    resp = await fetch(urlRemota, { cf: { cacheTtl: 0, cacheEverything: false } });
  } catch (e) {
    return json({ error: 'No se pudo descargar estado-canales.json', detalle: e.message }, 502);
  }
  if (!resp.ok) return json({ error: `estado-canales.json devolvió HTTP ${resp.status}` }, resp.status);

  let datos;
  try { datos = await resp.json(); } catch { return json({ error: 'estado-canales.json no es un JSON válido' }, 400); }

  if (!datos || !datos.canales || typeof datos.canales !== 'object') {
    return json({ error: 'estado-canales.json no tiene el campo canales' }, 400);
  }

  const payload = {
    actualizado: datos.actualizado || new Date().toISOString(),
    total: datos.total || Object.keys(datos.canales).length,
    resumen: datos.resumen || null,
    canales: datos.canales,
    fuente: urlRemota,
    migradoEn: new Date().toISOString(),
  };

  await env.FAVORITOS.put(CLAVE_ESTADO_KV, JSON.stringify(payload));
  return json({ ok: true, total: payload.total, actualizado: payload.actualizado, resumen: payload.resumen, fuente: urlRemota });
}

// ============================================================
//  RUTA: GET /admin/canales
// ============================================================

async function adminListarCanales(request, env, url) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  const kv = await env.FAVORITOS.get(CLAVE_CANALES_KV, 'json');
  if (!kv || !Array.isArray(kv.canales)) return json({ ok: true, vacio: true, total: 0, canales: [] });

  const limite = Math.min(parseInt(url.searchParams.get('limite') || '50', 10), 500);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);
  const q = (url.searchParams.get('q') || '').toLowerCase().trim();
  const grupo = url.searchParams.get('grupo') || '';
  const pais = url.searchParams.get('pais') || '';

  let filtrados = kv.canales;
  if (q) {
    filtrados = filtrados.filter((c) =>
      (c.nombre || '').toLowerCase().includes(q) ||
      (c.url || '').toLowerCase().includes(q) ||
      (c.grupo || '').toLowerCase().includes(q) ||
      (c.pais || '').toLowerCase().includes(q)
    );
  }
  if (grupo) filtrados = filtrados.filter((c) => c.grupo === grupo);
  if (pais) filtrados = filtrados.filter((c) => c.pais === pais);

  const total = filtrados.length;
  const slice = filtrados.slice(offset, offset + limite);

  return json({
    ok: true, total, offset, limite,
    actualizado: kv.actualizado || null,
    canales: slice,
  });
}

// ============================================================
//  RUTA: GET /admin/estado
//  Devuelve el estado de canales con paginación y filtros (requiere token).
// ============================================================

async function adminListarEstado(request, env, url) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  let datos = null;
  try {
    datos = await env.FAVORITOS.get(CLAVE_ESTADO_KV, 'json');
  } catch (e) {
    console.warn('Error leyendo estado de KV:', e);
  }

  // Fallback: leer del raw del repo si no está en KV
  if (!datos || !datos.canales) {
    const urlRemota = env.CANALES_ESTADO_URL || CANALES_ESTADO_URL_DEFECTO;
    try {
      const resp = await fetch(urlRemota, { cf: { cacheTtl: 0, cacheEverything: false } });
      if (resp.ok) datos = await resp.json();
    } catch (e) {
      console.warn('Error leyendo estado del repo:', e);
    }
  }

  if (!datos || !datos.canales) {
    return json({ ok: true, vacio: true, total: 0, resumen: null, canales: [] });
  }

  // Preparar lista plana: cada item = { id, nombre, grupo, url, estado, ultimaVezOK, fallosConsecutivos, tiempoRespuestaMs, motivo, lento, dadoDeBaja }
  const canalesKV = env.FAVORITOS
    ? (await env.FAVORITOS.get(CLAVE_CANALES_KV, 'json'))
    : null;

  const mapaCanales = new Map();
  if (canalesKV && Array.isArray(canalesKV.canales)) {
    for (const c of canalesKV.canales) {
      mapaCanales.set(c.id, c);
    }
  }

  const listaPlana = [];
  for (const [id, info] of Object.entries(datos.canales)) {
    const canal = mapaCanales.get(id) || {};
    listaPlana.push({
      id,
      nombre: canal.nombre || '(desconocido)',
      grupo: canal.grupo || '',
      url: canal.url || '',
      estado: info.estado || '',
      ultimaVezOK: info.ultimaVezOK || null,
      fallosConsecutivos: info.fallosConsecutivos || 0,
      ultimoChequeo: info.ultimoChequeo || null,
      tiempoRespuestaMs: info.tiempoRespuestaMs || 0,
      motivo: info.motivo || '',
      lento: !!info.lento,
      dadoDeBaja: !!info.dadoDeBaja,
    });
  }

  // Filtros
  const estadoFiltro = url.searchParams.get('estado') || '';
  const q = (url.searchParams.get('q') || '').toLowerCase().trim();
  const dadoDeBajaFiltro = url.searchParams.get('dadoDeBaja');

  let filtrados = listaPlana;

  if (estadoFiltro) {
    filtrados = filtrados.filter((c) => {
      if (estadoFiltro === 'lento') return c.estado === 'estable' && c.lento;
      return c.estado === estadoFiltro;
    });
  }

  if (dadoDeBajaFiltro === 'true') filtrados = filtrados.filter((c) => c.dadoDeBaja);
  if (dadoDeBajaFiltro === 'false') filtrados = filtrados.filter((c) => !c.dadoDeBaja);

  if (q) {
    filtrados = filtrados.filter((c) =>
      (c.nombre || '').toLowerCase().includes(q) ||
      (c.grupo || '').toLowerCase().includes(q) ||
      (c.url || '').toLowerCase().includes(q)
    );
  }

  // Ordenar: caidos primero, después inestables, después lentos, después estables
  const orden = { caido: 0, inestable: 1, estable: 2 };
  filtrados.sort((a, b) => {
    const oa = a.lento && a.estado === 'estable' ? 1.5 : (orden[a.estado] ?? 3);
    const ob = b.lento && b.estado === 'estable' ? 1.5 : (orden[b.estado] ?? 3);
    if (oa !== ob) return oa - ob;
    return (b.fallosConsecutivos || 0) - (a.fallosConsecutivos || 0);
  });

  const limit = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 500);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0', 10), 0);

  const total = filtrados.length;
  const pagina = filtrados.slice(offset, offset + limit);

  return json({
    ok: true,
    fuente: datos.fuente || 'kv',
    actualizado: datos.actualizado || null,
    migradoEn: datos.migradoEn || null,
    total,
    offset,
    limit,
    resumen: datos.resumen || null,
    canales: pagina,
  });
}

// ============================================================
//  RUTAS: /admin/canal (crear / editar / borrar)
// ============================================================

async function adminCrearCanal(request, env, url) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'Body JSON inválido' }, 400); }

  const canalEntrada = limpiarCanalEntrada(body);
  if (!canalEntrada.nombre || !canalEntrada.url) return json({ error: 'Faltan nombre o url' }, 400);

  const kv = await env.FAVORITOS.get(CLAVE_CANALES_KV, 'json');
  const canales = (kv && Array.isArray(kv.canales)) ? kv.canales : [];

  const id = 'c_' + hashUrl(canalEntrada.url);
  if (canales.some((c) => c.id === id)) return json({ error: 'Ya existe un canal con esa URL (mismo id)' }, 409);

  const nuevo = {
    id,
    numero: canalEntrada.numero || String(canales.length + 1).padStart(2, '0'),
    nombre: canalEntrada.nombre,
    url: canalEntrada.url,
    logo: canalEntrada.logo || '',
    grupo: canalEntrada.grupo,
    pais: canalEntrada.pais,
    tvgId: canalEntrada.tvgId,
    estado: canalEntrada.estado,
    geobloqueado: canalEntrada.geobloqueado,
    inestable: canalEntrada.inestable,
    youtube: canalEntrada.youtube,
  };

  canales.push(nuevo);

  const payload = {
    canales,
    actualizado: new Date().toISOString(),
    version: 1,
    fuente: (kv && kv.fuente) || 'manual',
  };

  await env.FAVORITOS.put(CLAVE_CANALES_KV, JSON.stringify(payload));
  return json({ ok: true, canal: nuevo, total: canales.length });
}

async function adminEditarCanal(request, env, url, canalId) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'Body JSON inválido' }, 400); }

  const kv = await env.FAVORITOS.get(CLAVE_CANALES_KV, 'json');
  if (!kv || !Array.isArray(kv.canales)) return json({ error: 'No hay canales en KV' }, 404);

  const idx = kv.canales.findIndex((c) => c.id === canalId);
  if (idx === -1) return json({ error: 'Canal no encontrado' }, 404);

  const canalEntrada = limpiarCanalEntrada(body);
  const actual = kv.canales[idx];

  const actualizado = {
    ...actual,
    nombre: canalEntrada.nombre || actual.nombre,
    url: canalEntrada.url || actual.url,
    logo: canalEntrada.logo !== undefined ? canalEntrada.logo : actual.logo,
    grupo: canalEntrada.grupo || actual.grupo,
    pais: canalEntrada.pais !== undefined ? canalEntrada.pais : actual.pais,
    tvgId: canalEntrada.tvgId !== undefined ? canalEntrada.tvgId : actual.tvgId,
    estado: canalEntrada.estado !== undefined ? canalEntrada.estado : actual.estado,
    geobloqueado: canalEntrada.geobloqueado,
    inestable: canalEntrada.inestable,
    youtube: canalEntrada.youtube,
    numero: canalEntrada.numero || actual.numero,
  };

  kv.canales[idx] = actualizado;
  kv.actualizado = new Date().toISOString();

  await env.FAVORITOS.put(CLAVE_CANALES_KV, JSON.stringify(kv));
  return json({ ok: true, canal: actualizado, total: kv.canales.length });
}

async function adminBorrarCanal(request, env, url, canalId) {
  if (!env.FAVORITOS) return json({ error: 'Falta el binding KV FAVORITOS' }, 500);

  const err = requiereAdmin(request, env, url);
  if (err) return json({ error: err.error }, err.status);

  const kv = await env.FAVORITOS.get(CLAVE_CANALES_KV, 'json');
  if (!kv || !Array.isArray(kv.canales)) return json({ error: 'No hay canales en KV' }, 404);

  const idx = kv.canales.findIndex((c) => c.id === canalId);
  if (idx === -1) return json({ error: 'Canal no encontrado' }, 404);

  const borrado = kv.canales.splice(idx, 1)[0];
  kv.actualizado = new Date().toISOString();

  await env.FAVORITOS.put(CLAVE_CANALES_KV, JSON.stringify(kv));
  return json({ ok: true, canal: borrado, total: kv.canales.length });
}

// ============================================================
//  ROUTER PRINCIPAL
// ============================================================

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (url.pathname === '/health') return json({ ok: true, ts: new Date().toISOString() });
    if (url.pathname === '/proxy') return manejarProxy(request, url);
    if (url.pathname === '/canales') return manejarCanales(request, env);
    if (url.pathname === '/estado-canales') return manejarEstadoCanales(request, env);

    if (url.pathname === '/reportes' && request.method === 'POST') return manejarReporte(request, env);
    if (url.pathname === '/reportes' && request.method === 'GET') return listarReportes(request, env, url);
    if (url.pathname === '/caidos' && request.method === 'GET') return listarCaidos(request, env);

    if (url.pathname === '/admin/marcar-caido' && request.method === 'POST') return marcarCaido(request, env, url);
    if (url.pathname === '/admin/migrar-canales' && request.method === 'POST') return migrarCanales(request, env, url);
    if (url.pathname === '/admin/migrar-estado' && request.method === 'POST') return migrarEstado(request, env, url);
    if (url.pathname === '/admin/canales' && request.method === 'GET') return adminListarCanales(request, env, url);
    if (url.pathname === '/admin/estado' && request.method === 'GET') return adminListarEstado(request, env, url);
    if (url.pathname === '/admin/canal' && request.method === 'POST') return adminCrearCanal(request, env, url);

    const mEditar = url.pathname.match(/^\/admin\/canal\/([^/]+)$/);
    if (mEditar) {
      const canalId = mEditar[1];
      if (request.method === 'PUT') return adminEditarCanal(request, env, url, canalId);
      if (request.method === 'DELETE') return adminBorrarCanal(request, env, url, canalId);
    }

    const m = url.pathname.match(/^\/fav\/([^/]+)$/);
    if (m) return manejarFavoritos(request, env, m[1]);

    return json({
      error: 'Ruta no encontrada',
      rutas: [
        '/health',
        '/proxy?url=',
        '/canales',
        '/estado-canales',
        '/fav/:syncId',
        'POST /reportes',
        'GET /reportes',
        'GET /caidos',
        'POST /admin/marcar-caido',
        'POST /admin/migrar-canales',
        'POST /admin/migrar-estado',
        'GET /admin/canales',
        'GET /admin/estado',
        'POST /admin/canal',
        'PUT /admin/canal/:id',
        'DELETE /admin/canal/:id',
      ],
    }, 404);
  },
};
