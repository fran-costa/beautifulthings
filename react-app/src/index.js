import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import rootReducer from 'reducers';

import AppRouter from './AppRouter.js';

import './index.css';

const store = createStore(rootReducer);

const appRouter = (
  <Provider store={store}>
    {AppRouter()}
  </Provider>
);

const startApp = () => {
  ReactDOM.render(appRouter, document.getElementById('root'));
  registerServiceWorker();
}

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener('deviceready', startApp, false);
}
