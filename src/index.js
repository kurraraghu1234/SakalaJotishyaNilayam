import './style.scss';
import './css/default.scss';
import './css/app.scss';
import './js/jquery.localize.min.js';

console.log('PWA working!');

const initialize = () => {
  const networkStatus = () => {
    document.body.classList.toggle('is-offline', !navigator.onLine);
  };

  window.addEventListener('online', networkStatus);
  window.addEventListener('offline', networkStatus);

  networkStatus();
};

window.addEventListener('load', initialize);
