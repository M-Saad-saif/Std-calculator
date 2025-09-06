const { cache } = require("react");

let CACHE_NAME = "calculator-cache-v1";
let urlsToCache = [
  "./",
  "./index.html",
  "./calculator.css",
  "./calculator.js",
  "./calicon.ico",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
