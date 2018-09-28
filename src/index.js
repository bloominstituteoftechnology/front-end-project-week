import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {reducer} from  './reducers';
import axios from 'axios';

import App from './App';

//changed to false when origin is undefined
axios.defaults.withCredentials = false;

const store = createStore( reducer,
   applyMiddleware(thunk)
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //  applyMiddleware(thunk, logger)
);

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
  , document.getElementById('root'));
