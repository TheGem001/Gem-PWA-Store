/**
 * Gem Store Service Worker (v1.7)
 * Manual Swipe & Feedback Update.
 */

const CACHE_NAME = 'gem-store-v1.7.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/splitify.svg',
  './assets/gem-logo.svg',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))));
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  if (url.pathname.endsWith('apps.json') || url.pathname.endsWith('slides.json')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clonedRes = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clonedRes));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
