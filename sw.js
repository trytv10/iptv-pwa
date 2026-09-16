const CACHE = 'iptv-shell-v2';
const ARCHIVOS_SHELL = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon.svg',
];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evento) => {
  const url = evento.request.url;

  // Nunca cachear streams .m3u8/.ts ni listados remotos: siempre red directa.
  if (url.includes('.m3u8') || url.includes('.ts') || url.includes('.m3u')) {
    return;
  }

  // Red primero para el shell de la app (HTML/CSS/JS/manifest): asi las
  // actualizaciones se ven de inmediato. Si no hay conexion, usa la copia
  // en cache como respaldo para que la app siga abriendo offline.
  evento.respondWith(
    fetch(evento.request)
      .then((respuesta) => {
        if (respuesta.ok && evento.request.method === 'GET') {
          const copia = respuesta.clone();
          caches.open(CACHE).then((cache) => cache.put(evento.request, copia));
        }
        return respuesta;
      })
      .catch(() => caches.match(evento.request))
  );
});
