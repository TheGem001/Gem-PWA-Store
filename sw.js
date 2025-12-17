const CACHE_NAME = 'gem-store-v1.1.0';
const ASSETS = [
  './',
  './index.html',
  './apps.json',
  './manifest.json',
  './assets/splitify.svg',
  './assets/gem-logo.svg',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
