import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {reducer} from  './reducers';
import axios from 'axios';

import App from './App';

axios.defaults.withCredentials = true;

const store = createStore( reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk, logger)
);

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
  , document.getElementById('root'));
