import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './styles/index.css';
import App from './components/App';
import reducerNote from './reducers'

const store = createStore(reducerNote, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
   document.getElementById('root'));

