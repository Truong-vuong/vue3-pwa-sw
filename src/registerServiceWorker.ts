/* eslint-disable no-console */
import { register } from 'register-service-worker';
import { NotifyStore } from './store/notify-sw';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered (registration) {
      console.log('Service worker has been registered.');
      setInterval(() => {
        registration.update();
      }, 5000);
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound (registration) {
      console.log('New content is downloading.')
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      )
      // const installingWorker = registration.installing
      // document.dispatchEvent(
      //   new CustomEvent('swUpdateFound', { detail: registration })
      // )
      // caches.keys().then(cacheNames => {
      //   cacheNames.forEach(cacheName => {
      //     caches.delete(cacheName);
      //   });
      // });
    },
    updated (registration) {
      console.log('New content  is available; please refresh.');
      //const swNotify = NotifyStore();
      //swNotify.showNotify();
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      )
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
