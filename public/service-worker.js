// Unregister and destroy the previous 2020 site service-worker.js, which is
// hard caching the old 2020 site for those who had loaded it.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.registration.unregister()
    .then(function() {
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(client => client.navigate(client.url))
    });
});

// A second method to attempt to destroy the serviceworker.
navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister()
      document.location.reload()
    }
});

self.addEventListener('install', function(e) {
  self.skipWaiting();
});
