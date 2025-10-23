const CACHE_NAME = 'gym-app-cache-v1';
const DYNAMIC_CACHE_NAME = 'gym-app-dynamic-v1';

// Add all local files that make up the app shell.
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.svg',
  '/manifest.json',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/components/BottomNav.tsx',
  '/components/CircularProgress.tsx',
  '/components/Header.tsx',
  '/components/InstallPWAButton.tsx',
  '/components/SideNav.tsx',
  '/components/icons/ArrowLeftIcon.tsx',
  '/components/icons/BedIcon.tsx',
  '/components/icons/CalendarIcon.tsx',
  '/components/icons/ChevronRightIcon.tsx',
  '/components/icons/DumbbellIcon.tsx',
  '/components/icons/EditIcon.tsx',
  '/components/icons/HomeIcon.tsx',
  '/components/icons/IconProps.ts',
  '/components/icons/LogoIcon.tsx',
  '/components/icons/LogoutIcon.tsx',
  '/components/icons/MoonIcon.tsx',
  '/components/icons/NotificationBellIcon.tsx',
  '/components/icons/PauseCircleIcon.tsx',
  '/components/icons/PlayCircleIcon.tsx',
  '/components/icons/SwitchUserIcon.tsx',
  '/components/icons/UserIcon.tsx',
  '/components/screens/AdminScreen.tsx',
  '/components/screens/ClassesScreen.tsx',
  '/components/screens/HomeScreen.tsx',
  '/components/screens/ProfileScreen.tsx',
  '/components/screens/ProgramsScreen.tsx',
  '/components/screens/RestScreen.tsx',
  '/components/screens/admin/MembersManagementScreen.tsx',
  '/components/screens/admin/NotificationsScreen.tsx',
  '/components/screens/admin/ReportsScreen.tsx',
  '/components/screens/admin/ScheduleManagementScreen.tsx',
  '/components/screens/profile/EditProfileScreen.tsx',
  '/components/screens/profile/NotificationsSettingsScreen.tsx'
];

// Install event: opens a cache and adds the app shell files to it.
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
  );
});

// Activate event: cleans up old caches.
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  const cacheWhitelist = [CACHE_NAME, DYNAMIC_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
        console.log('Service Worker: Claiming clients');
        return self.clients.claim();
    })
  );
});


// Fetch event: serves assets from cache, falling back to network.
self.addEventListener('fetch', (event) => {
    // We only want to handle GET requests.
    if (event.request.method !== 'GET') {
        return;
    }

    // For HTML navigation requests, serve the index.html from cache.
    // This is crucial for single-page applications.
    if (event.request.mode === 'navigate') {
        event.respondWith(caches.match('/index.html'));
        return;
    }

    // For other requests (CSS, JS, images), use a cache-first strategy.
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                // If not in cache, fetch from network and cache it for future use.
                return fetch(event.request).then((networkResponse) => {
                    // For external scripts/styles, cache them in a dynamic cache.
                    if (event.request.url.startsWith('https://aistudiocdn.com') || event.request.url.startsWith('https://cdn.tailwindcss.com')) {
                        const responseToCache = networkResponse.clone();
                        caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                });
            })
    );
});
