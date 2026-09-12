const CACHE = 'iptv-shell-v1';
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

  evento.respondWith(
    caches.match(evento.request).then((enCache) => {
      return (
        enCache ||
        fetch(evento.request).then((respuesta) => {
          if (respuesta.ok && evento.request.method === 'GET') {
            const copia = respuesta.clone();
            caches.open(CACHE).then((cache) => cache.put(evento.request, copia));
          }
          return respuesta;
        }).catch(() => enCache)
      );
    })
  );
});
