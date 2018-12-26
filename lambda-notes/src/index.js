import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import AppRouter from './AppRouter';


const app = (
  <Provider store={configureStore()}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
