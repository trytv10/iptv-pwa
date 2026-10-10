/* =======================================================
   Service Worker — Guía de Canales
   Estrategia:
     - Shell (HTML/CSS/JS/manifest): cache-first + revalidate (instantáneo en 2da visita)
     - Logos (i.imgur, i.postimg, etc.): cache-first con TTL largo
     - APIs (/canales, /estado-canales, /caidos): network-first + fallback a cache
     - Streams (.m3u8, .ts, /proxy): network only (nunca cachear)
   ======================================================= */

const CACHE_VERSION = 'v4';
const CACHE_SHELL = `iptv-shell-${CACHE_VERSION}`;
const CACHE_LOGOS = `iptv-logos-${CACHE_VERSION}`;
const CACHE_API = `iptv-api-${CACHE_VERSION}`;

const ARCHIVOS_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
];

const PATRONES_LOGO = [
  'i.imgur.com',
  'i.postimg.cc',
  'upload.wikimedia.org',
  'raw.githubusercontent.com',
  'schedulesdirect-api20141201-logos',
  'gateway.esite-lab.com',
  'images.pluto.tv',
];

const HOSTS_API = [
  'iptv-proxy.eolivera119600.workers.dev',
];

// ============================================================
// Install: precachear el shell
// ============================================================
self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE_SHELL).then((cache) => {
      // addAll falla si UNA falla; usamos promises individuales para tolerancia
      return Promise.all(
        ARCHIVOS_SHELL.map((url) =>
          cache.add(url).catch((e) => console.warn('[SW] No se pudo precachear', url, e))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ============================================================
// Activate: limpiar caches viejos
// ============================================================
self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(
        claves
          .filter((k) => !k.startsWith(`iptv-`) || !k.endsWith(CACHE_VERSION))
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ============================================================
// Fetch: enrutar según el tipo de recurso
// ============================================================
self.addEventListener('fetch', (evento) => {
  const req = evento.request;
  const url = req.url;

  // Solo manejamos GET
  if (req.method !== 'GET') return;

  // 1) Streams en vivo: NUNCA cachear
  if (
    url.includes('.m3u8') ||
    url.includes('.ts') ||
    url.includes('.m3u') ||
    url.includes('.key') ||
    url.includes('.m4s') ||
    url.includes('/proxy?')
  ) {
    return; // network only
  }

  // 2) APIs de datos: network-first con fallback a cache
  if (HOSTS_API.some((h) => url.includes(h)) && (
    url.includes('/canales') ||
    url.includes('/estado-canales') ||
    url.includes('/caidos') ||
    url.includes('/fav/')
  )) {
    evento.respondWith(networkFirstConFallback(req, CACHE_API));
    return;
  }

  // 3) Logos y avatares: cache-first con TTL largo
  if (PATRONES_LOGO.some((p) => url.includes(p))) {
    evento.respondWith(cacheFirstConTTL(req, CACHE_LOGOS, 7 * 24 * 60 * 60 * 1000));
    return;
  }

  // 4) Google Fonts (CSS y woff2): cache-first
  if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    evento.respondWith(cacheFirstConTTL(req, CACHE_LOGOS, 30 * 24 * 60 * 60 * 1000));
    return;
  }

  // 5) CDNs de librerías (jsdelivr, gstatic, eureka): cache-first
  if (
    url.includes('cdn.jsdelivr.net') ||
    url.includes('www.gstatic.com') ||
    url.includes('eureka.clank')
  ) {
    evento.respondWith(cacheFirstConTTL(req, CACHE_LOGOS, 30 * 24 * 60 * 60 * 1000));
    return;
  }

  // 6) Resto (shell + mismo origen): cache-first con revalidate
  evento.respondWith(cacheFirstConRevalidate(req, CACHE_SHELL));
});

// ============================================================
// Estrategias
// ============================================================

/**
 * Cache-first con revalidate: sirve del cache al instante y actualiza en
 * background. Si no está en cache, va a la red y guarda.
 */
function cacheFirstConRevalidate(req, nombreCache) {
  return caches.open(nombreCache).then((cache) =>
    cache.match(req, { ignoreSearch: true }).then((enCache) => {
      if (enCache) {
        // Refresco en background (no bloquea la respuesta)
        fetch(req).then((respuesta) => {
          if (respuesta.ok) cache.put(req, respuesta.clone());
        }).catch(() => {});
        return enCache;
      }
      // No está en cache: ir a red
      return fetch(req).then((respuesta) => {
        if (respuesta.ok) {
          cache.put(req, respuesta.clone());
        }
        return respuesta;
      }).catch((e) => {
        // Si no hay red y no hay cache, devolver un error legible
        console.warn('[SW] Fallback falló para', req.url, e);
        return new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    })
  );
}

/**
 * Cache-first con TTL: sirve del cache si no expiró; si expiró o no está,
 * va a la red y guarda. Ideal para logos y fuentes.
 */
function cacheFirstConTTL(req, nombreCache, ttlMs) {
  return caches.open(nombreCache).then((cache) =>
    cache.match(req, { ignoreSearch: true }).then((enCache) => {
      if (enCache) {
        const fecha = enCache.headers.get('sw-cached-at');
        const edad = fecha ? (Date.now() - parseInt(fecha, 10)) : Infinity;
        if (edad < ttlMs) {
          return enCache;
        }
        // Expirado: refrescar en background y devolver el viejo igual
        fetch(req).then((respuesta) => {
          if (respuesta.ok) {
            const headers = new Headers(respuesta.headers);
            headers.set('sw-cached-at', String(Date.now()));
            const copia = new Response(respuesta.body, {
              status: respuesta.status,
              statusText: respuesta.statusText,
              headers,
            });
            cache.put(req, copia);
          }
        }).catch(() => {});
        return enCache;
      }
      return fetch(req).then((respuesta) => {
        if (respuesta.ok) {
          const headers = new Headers(respuesta.headers);
          headers.set('sw-cached-at', String(Date.now()));
          const copia = new Response(respuesta.body, {
            status: respuesta.status,
            statusText: respuesta.statusText,
            headers,
          });
          cache.put(req, copia);
        }
        return respuesta;
      });
    })
  );
}

/**
 * Network-first con fallback a cache: intenta la red, si falla usa el cache.
 * Ideal para datos (canales, estado, etc.).
 */
function networkFirstConFallback(req, nombreCache) {
  return caches.open(nombreCache).then((cache) =>
    fetch(req).then((respuesta) => {
      if (respuesta.ok) {
        cache.put(req, respuesta.clone());
      }
      return respuesta;
    }).catch(() => cache.match(req, { ignoreSearch: true }).then((enCache) => {
      if (enCache) return enCache;
      return new Response(JSON.stringify({ error: 'offline' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }))
  );
}

// ============================================================
// Mensajes del cliente (para forzar update o skipWaiting)
// ============================================================
self.addEventListener('message', (evento) => {
  if (evento.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});