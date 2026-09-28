self.addEventListener('fetch', (event) => {
    // Pass-through fetch handler required for installability
    event.respondWith(fetch(event.request));
});