

// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js');

const cacheName = 'v1';
const cacheFiles = [
    '/',
    '/css/styles.css',
    '/images/test1.png',
    '/images/test2.png',
    '/js/app.js',
    '/js/sw-registration.js'
]

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
 importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');


// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
      apiKey: "AIzaSyA_B4DLDQApDa0us4gi-58sk_aLMGgFWdI",
      authDomain: "nolan-2bb99.firebaseapp.com",
      databaseURL: "https://nolan-2bb99.firebaseio.com",
      projectId: "nolan-2bb99",
      storageBucket: "nolan-2bb99.appspot.com",
      messagingSenderId: "471437598597",
      appId: "1:471437598597:web:694bd6b998c03caa40aeec",
      measurementId: "G-WK8ZGC3DSR"
    });


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});


// Install event
self.addEventListener('install', function(event) {
    console.log("SW installed");
    event.waitUntil(
        caches.open(cacheName)
        .then(function(cache){
            console.log('SW caching cachefiles');
            return cache.addAll(cacheFiles);
        })
    )
});

// Activate event
self.addEventListener('activate', function(event) {
    console.log("SW activated");
    event.waitUntil(
        caches.keys()
        .then(function(cacheNames){
            return Promise.all(cacheNames.map(function(thisCacheName){
                if(thisCacheName !== cacheName){
                    console.log('SW Removing cached files from', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
});

// Fetch event
self.addEventListener('fetch', function(event) {
    console.log("SW fetching", event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            console.log('Fetching new files');
            return response || fetch(event.request);
        })
    );
});