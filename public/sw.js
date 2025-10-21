// Service Worker untuk Dyogaf Studio
const CACHE_NAME = 'dyogaf-studio-v1';
const STATIC_CACHE = 'dyogaf-static-v1';
const IMAGE_CACHE = 'dyogaf-images-v1';

// Assets yang akan di-cache saat install
const STATIC_ASSETS = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/contact',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/site.webmanifest'
];

// Cache gambar-gambar utama
const IMAGE_ASSETS = [
  '/image/logo/berdu.jpeg',
  '/image/homepage/website-portfolio-personal.png',
  '/image/homepage/website-fundrising.png',
  '/image/homepage/landing-page-produk.png',
  '/image/testimoni/bahlil.jpeg',
  '/image/testimoni/gibran.jpeg',
  '/image/testimoni/patrick.jpeg'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      caches.open(IMAGE_CACHE).then((cache) => cache.addAll(IMAGE_ASSETS))
    ])
  );
  
  // Force activation
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => 
            cacheName !== STATIC_CACHE && 
            cacheName !== IMAGE_CACHE &&
            cacheName !== CACHE_NAME
          )
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
  
  // Take control immediately
  self.clients.claim();
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external requests
  if (url.origin !== location.origin) return;
  
  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Serve static files from cache
  if (STATIC_ASSETS.some(asset => url.pathname === asset)) {
    return serveFromCache(STATIC_CACHE, request) || fetchAndCache(STATIC_CACHE, request);
  }
  
  // Serve images from cache with network fallback
  if (IMAGE_ASSETS.some(asset => url.pathname.includes(asset)) || 
      url.pathname.includes('/image/')) {
    return serveFromCache(IMAGE_CACHE, request) || 
           fetchAndCache(IMAGE_CACHE, request) ||
           fetch(request);
  }
  
  // For HTML pages, try network first, then cache
  if (request.headers.get('accept').includes('text/html')) {
    try {
      const networkResponse = await fetch(request);
      // Cache successful responses
      if (networkResponse.ok) {
        const cache = await caches.open(STATIC_CACHE);
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    } catch (error) {
      // If network fails, try cache
      return serveFromCache(STATIC_CACHE, request) || 
             new Response('Offline - No cached version available', {
               status: 503,
               statusText: 'Service Unavailable'
             });
    }
  }
  
  // Default behavior
  return fetch(request);
}

function serveFromCache(cacheName, request) {
  return caches.match(cacheName).then((cache) => {
    return cache ? cache.match(request) : null;
  }).then((response) => {
    return response || null;
  });
}

async function fetchAndCache(cacheName, request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}

// Background sync untuk offline support
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Implementasi background sync jika dibutuhkan
  console.log('Background sync completed');
}

// Push notifications (jika dibutuhkan)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Ada update dari Dyogaf Studio!',
    icon: '/favicon-192x192.png',
    badge: '/favicon-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      {
        action: 'explore',
        title: 'Lihat',
        icon: '/favicon-96x96.png'
      },
      {
        action: 'close',
        title: 'Tutup',
        icon: '/favicon-96x96.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Dyogaf Studio', options)
  );
});