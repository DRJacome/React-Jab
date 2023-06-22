/* Instalar desde terminal las dependencias: npm install react-redux @reduxjs/toolkit react-router-dom */

import React from 'react';
import ReactDOM from 'react-dom/client';
import MiRouter from './MiRouter';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MiRouter />
    </Provider>
  </React.StrictMode>
);