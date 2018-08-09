import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from './AppRouter.js';

import './index.css';

const startApp = () => {
  ReactDOM.render(<AppRouter />, document.getElementById('root'));
  registerServiceWorker();
}

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener('deviceready', startApp, false);
}
