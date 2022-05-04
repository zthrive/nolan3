'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e4ca3a925a6c6ce1bf6eb408741d2483",
"assets/FontManifest.json": "dd9a0a1735587ee30d947f71fc4ef42b",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Nolan.ttf": "eeee3ab33fd7d2c84aab9406a2f3089f",
"assets/images/building_manager.png": "f9201c9b7304ee43bfbd1908d393873f",
"assets/images/city.png": "4a4ee1dc7c29dbbc86613a3280621473",
"assets/images/committee.png": "7f5ff750c8989e550c185349f570b548",
"assets/images/docklands_skyline.jpg": "12a45a1fa57964573d003890949cb166",
"assets/images/hot_topics.png": "7a1869d3c90ed61934147ffd3706242c",
"assets/images/img_not_available.jpeg": "1c98fa4a13575d5854365f27b8bf66dc",
"assets/images/mesh.png": "b89c6f2765bd66cbbc0382a9c2f16cf2",
"assets/images/nolan.jpg": "2b7469d613b847830a658ff626cc604c",
"assets/images/nolan_launcher.png": "41cc3beaa663c89ec59216832485bc96",
"assets/images/nolan_logo.png": "cc306ce83e4f263478bf6a6c457d12ff",
"assets/images/oc_manager.png": "d19b30321cdc97c6cdb2758a3a5d2126",
"assets/images/pdf-logo.jpg": "8eef5ba3bc926ce108103aa522d24f0c",
"assets/images/pubspec.lock": "108911bc6094c02aaeefe7fbb0df7f4e",
"assets/images/svg/add-user.svg": "fb69ea0e9e831f55fd5ca3164d5f7735",
"assets/images/svg/approve-signal.svg": "44aac6bd8487525fd0bb7831043ca0b6",
"assets/images/svg/bath-spa.svg": "89c00c38c23e79a82a0758341c136987",
"assets/images/svg/bonfire.svg": "1e84fe467923eae8ca1b8aef6cbfde28",
"assets/images/svg/booking-date.svg": "ba4a639d8c147e7c9ef042fc0f1f93c7",
"assets/images/svg/building-floors.svg": "daff201be27625e159de874220aa9bd1",
"assets/images/svg/calendar-history.svg": "d15b33da8642e4477a8fe44861353834",
"assets/images/svg/chat.svg": "0a601971c1cede083b75a9b3a12b968e",
"assets/images/svg/chat_multi.svg": "108b47935210e4d16de39d3df269e35e",
"assets/images/svg/cinema.svg": "b6029cacfc466f30a1e6313b0281f82c",
"assets/images/svg/columns.svg": "7ca88e56c5ee2e725e3fdb878abe1b1b",
"assets/images/svg/commission.svg": "505de043f418c37eab9fac81fed4ed9d",
"assets/images/svg/computer-responsive.svg": "ffd3b6d6a09066c699db2e5185671d5b",
"assets/images/svg/empty-white-box.svg": "18069f1c18cccf9128962ffab434b240",
"assets/images/svg/excavators-work.svg": "0cda0c9929effcd13fbbb81122982edd",
"assets/images/svg/exclamation.svg": "70eca54b0d8a900431b12e543085dce9",
"assets/images/svg/homepage.svg": "cf02f7aec7ad594490d58190ea91b2a3",
"assets/images/svg/info-circle.svg": "a90c23844d0365870995da0881bea9d5",
"assets/images/svg/information-reception.svg": "950992c9d42741ca544654f62340d9ca",
"assets/images/svg/information2.svg": "bbe979c52387c564ae9576a52d87075d",
"assets/images/svg/jacuzzi.svg": "5c31002f101c7ec285a4fe3615478b54",
"assets/images/svg/junk-bin.svg": "5f159fecb376e77142d675cc2fe36a51",
"assets/images/svg/kitchen-pack-stove.svg": "4a21890fbe6ccde373dc618f573db4e7",
"assets/images/svg/labour.svg": "3b5ecce1e4d87e9cb499e2ce4c4605a0",
"assets/images/svg/library.svg": "76f3d7204a22276ad8013deecea70c7c",
"assets/images/svg/lift.svg": "a8ebe04e28c587852dfc9ed8969695b0",
"assets/images/svg/list-reorder.svg": "e242e487807f3e1c7648ecdb2435f72e",
"assets/images/svg/maintenance.svg": "39d02e651f69a46d51ab0883a30a4667",
"assets/images/svg/man-avatar-1.svg": "7b1a482ddef4f14d809fc833b7a6b254",
"assets/images/svg/manage-users.svg": "3990bfbc156d9bc915323feee59bd751",
"assets/images/svg/mesh.svg": "5606a12866f77480e6d2aebed97d2aed",
"assets/images/svg/monitor-tv.svg": "058dc5ace97e18dd7e4911f6d112a8b8",
"assets/images/svg/pages.svg": "7eaf40354049bba40f506c85c8c86449",
"assets/images/svg/pdf.svg": "725dc2d549daf69006d90c7f408cea15",
"assets/images/svg/picture-one.svg": "79d1cca5968c0d44298164be068777df",
"assets/images/svg/pictures.svg": "8058b3f431c78792b5526b4c7cb9c9fa",
"assets/images/svg/plan.svg": "0a0789d909f41e1f01d5ee95c6fb2183",
"assets/images/svg/plus.svg": "f299d38b7d5f3e12ecd8f178c973fd6d",
"assets/images/svg/profile.svg": "bd257669799233d13e5d9bc55c70f881",
"assets/images/svg/refresh.svg": "45476075a28d34760bad1d506457bff5",
"assets/images/svg/right-arrow.svg": "d024dbcdfa734471c0c92136a4a8c192",
"assets/images/svg/sauna.svg": "84caa8a44b2af5f2beb6784e88bfb1ed",
"assets/images/svg/settings.svg": "ecfcf7ab3e0996cb0ed6c9f6055bc998",
"assets/images/svg/skyline-building.svg": "1a5f2c52ca20dca93c9ea7fa58329746",
"assets/images/svg/tennis.svg": "86739043811b11868ef18b82458d8b6e",
"assets/images/svg/tools-svgrepo-com.svg": "8e1b903e3c34d334c307b8c8ece4f921",
"assets/images/svg/woman-avatar-1.svg": "7e8ded6a4695f6dbe18f63dd24b19cd7",
"assets/NOTICES": "3d810ff3037bbd802f0a1e12d7c9f666",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "e392edd78bc02747ec6e1d6d2af98e13",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ic_launcher.png": "41cc3beaa663c89ec59216832485bc96",
"icons/ms-icon-310x310.png": "1e3ed29f39b2e36dd2ba73877666e4ec",
"index.html": "1af7c553f6935997946925bf8598dd0c",
"/": "1af7c553f6935997946925bf8598dd0c",
"main.dart.js": "fe7d70df7b94bd7549921fcf52edff3a",
"manifest.json": "ccfc140e0166b78756860f9cf85b6613",
"version.json": "379a381ec022ca41443e4228b0cf14cb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
