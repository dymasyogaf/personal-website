// Service Worker untuk Dyogaf Studio - Performance Optimized
const CACHE_VERSION = '2.0';
const STATIC_CACHE = `dyogaf-static-v${CACHE_VERSION}`;
const IMAGE_CACHE = `dyogaf-images-v${CACHE_VERSION}`;
const FONT_CACHE = `dyogaf-fonts-v${CACHE_VERSION}`;
const RUNTIME_CACHE = 'dyogaf-runtime-v1';

// Critical assets yang akan di-cache saat install
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

// Cache gambar-gambar utama dengan priority
const CRITICAL_IMAGES = [
  '/image/logo/berdu.jpeg',
  '/image/homepage/website-portfolio-personal.png'
];

const SECONDARY_IMAGES = [
  '/image/homepage/website-fundrising.png',
  '/image/homepage/landing-page-produk.png',
  '/image/testimoni/bahlil.jpeg',
  '/image/testimoni/gibran.jpeg',
  '/image/testimoni/patrick.jpeg'
];

// External fonts untuk caching
const FONT_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
];

// Install event - cache static assets dengan priority
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache critical assets first
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(STATIC_ASSETS).catch(error => {
          console.error('Failed to cache static assets:', error);
          return Promise.resolve();
        });
      }),
      // Cache critical images
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.addAll(CRITICAL_IMAGES).catch(error => {
          console.error('Failed to cache critical images:', error);
          return Promise.resolve();
        });
      }),
      // Cache fonts
      caches.open(FONT_CACHE).then((cache) => {
        return cache.addAll(FONT_ASSETS).catch(error => {
          console.error('Failed to cache fonts:', error);
          return Promise.resolve();
        });
      })
    ])
  );
  
  // Preload secondary images in background
  self.skipWaiting().then(() => {
    caches.open(IMAGE_CACHE).then((cache) => {
      cache.addAll(SECONDARY_IMAGES).catch(error => {
        console.log('Secondary images will be cached on demand:', error);
      });
    });
  });
});

// Activate event - clean old caches dengan version management
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      const currentCaches = [STATIC_CACHE, IMAGE_CACHE, FONT_CACHE, RUNTIME_CACHE];
      return Promise.all(
        cacheNames
          .filter((cacheName) => !currentCaches.includes(cacheName))
          .map((cacheName) => {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    }).then(() => {
      console.log('Service Worker activated with cache version:', CACHE_VERSION);
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache dengan advanced caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests dan WebSocket
  if (request.method !== 'GET') return;
  
  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Strategy 1: Cache First for static assets
  if (STATIC_ASSETS.some(asset => url.pathname === asset)) {
    return cacheFirst(STATIC_CACHE, request);
  }
  
  // Strategy 2: Cache First for images dengan stale-while-revalidate
  if (url.pathname.includes('/image/')) {
    return staleWhileRevalidate(IMAGE_CACHE, request);
  }
  
  // Strategy 3: Cache First for fonts
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    return cacheFirst(FONT_CACHE, request);
  }
  
  // Strategy 4: Network First for HTML pages
  if (request.headers.get('accept').includes('text/html')) {
    return networkFirst(STATIC_CACHE, request);
  }
  
  // Strategy 5: Stale While Revalidate for API calls
  if (url.pathname.includes('/api/')) {
    return staleWhileRevalidate(RUNTIME_CACHE, request);
  }
  
  // Default: Network with cache fallback
  return networkWithCacheFallback(request);
}

// Cache First Strategy
async function cacheFirst(cacheName, request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Network request failed:', error);
    return new Response('Offline - Resource not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Network First Strategy
async function networkFirst(cacheName, request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline - No cached version available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(cacheName, request) {
  const cachedResponse = await caches.match(request);
  const fetchPromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(error => {
    console.error('Background fetch failed:', error);
    return cachedResponse || new Response('Network error', { status: 500 });
  });
  
  // Return cached version immediately, update in background
  return cachedResponse || fetchPromise;
}

// Network with Cache Fallback
async function networkWithCacheFallback(request) {
  try {
    return await fetch(request);
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline - No cached version available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Background sync untuk offline support
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Sync any pending requests or analytics
  console.log('Background sync completed');
  
  // Preload critical resources for next visit
  try {
    const cache = await caches.open(IMAGE_CACHE);
    await cache.addAll(SECONDARY_IMAGES);
    console.log('Background preload completed');
  } catch (error) {
    console.log('Background preload failed:', error);
  }
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

// Cache cleanup untuk runtime cache
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    event.waitUntil(
      caches.open(RUNTIME_CACHE).then((cache) => {
        return cache.keys().then((requests) => {
          return Promise.all(
            requests.map((request) => {
              // Hapus cache yang lebih tua dari 1 hari
              const response = cache.match(request);
              return response.then((resp) => {
                if (resp && resp.headers.get('date')) {
                  const cacheDate = new Date(resp.headers.get('date'));
                  const now = new Date();
                  const dayDiff = (now - cacheDate) / (1000 * 60 * 60 * 24);
                  if (dayDiff > 1) {
                    return cache.delete(request);
                  }
                }
              });
            })
          );
        });
      })
    );
  }
});

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