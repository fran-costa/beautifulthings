import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import registerServiceWorker from './registerServiceWorker';

import rootReducer from 'reducers';

import AppRouter from './AppRouter';

import './index.css';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    offline(offlineConfig),
  ),
);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const startApp = () => {
  ReactDOM.render(app, document.getElementById('root'));
  registerServiceWorker();
}

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener('deviceready', startApp, false);
}
