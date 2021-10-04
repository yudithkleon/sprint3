import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouters } from './routers/AppRouters';
import { Provider } from 'react-redux';
import {store } from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


ReactDOM.render(
  <Provider store={store}>
     <AppRouters/>
  </Provider>,
    document.getElementById('root')
);