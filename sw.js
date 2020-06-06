var vers = 03c
var CACHE_NAME = 'science' + vers;
var urlsToCache = [
  './',
  './PeriodicTable.html',
  './index.html',
  './about.html',
  './images/blank.png',
  './images/bulb_off.png',
  './images/bulb_on.png',
  './images/document_off.png',
  './images/document_on.png',
  './images/gear_off.png',
  './images/gear_on.png',
  './images/info_off.png',
  './images/info_on.png',
  './images/search-icon.png',
  './images/tools_off.png',
  './images/tools_on.png',
  './js/about.view.js',
  './js/calculator.json',
  './js/compounds.json',
  './js/flexigrid.pack.js',
  './js/jquery-1.7.1.min.js',
  './js/jquery-search.js',
  './js/jquery-ui-1.8.23.custom.min.js',
  './js/main.view.js',
  './js/periodic.table.js',
  './js/preference.view.js',
  './js/preferences.js',
  './js/quiz.view.js',
  './js/suc.utils.js',
  './js/table.view.js',
  './js/ui.selectmenu.js',
  './js/unit-conversions.json',
  './css/trontastic/jquery-ui-1.8.17.custom.css',
  './css/trontastic/jquery-ui-1.8.23.custom.css',
  './css/trontastic/theme.css',
  './css/trontastic/images/ui-bg_diagonals-small_50_262626_40x40.png',
  './css/trontastic/images/ui-bg_flat_0_303030_40x100.png',
  './css/trontastic/images/ui-bg_flat_0_4c4c4c_40x100.png',
  './css/trontastic/images/ui-bg_glass_40_0a0a0a_1x400.png',
  './css/trontastic/images/ui-bg_glass_55_f1fbe5_1x400.png',
  './css/trontastic/images/ui-bg_glass_60_000000_1x400.png',
  './css/trontastic/images/ui-bg_gloss-wave_55_000000_500x100.png',
  './css/trontastic/images/ui-bg_gloss-wave_85_9fda58_500x100.png',
  './css/trontastic/images/ui-bg_gloss-wave_95_f6ecd5_500x100.png',
  './css/trontastic/images/ui-icons_000000_256x240.png',
  './css/trontastic/images/ui-icons_1f1f1f_256x240.png',
  './css/trontastic/images/ui-icons_9fda58_256x240.png',
  './css/trontastic/images/ui-icons_b8ec79_256x240.png',
  './css/trontastic/images/ui-icons_cd0a0a_256x240.png',
  './css/trontastic/images/ui-icons_ffffff_256x240.png',
  './css/base.css',
  './css/flexigrid.css',
  './css/jquery-search.css',
  './css/pt.css',
  './css/ui.selectmenu.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
