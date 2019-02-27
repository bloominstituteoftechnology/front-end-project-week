import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//REACTSTRAP
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css'

import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { notesReducer } from './store/reducers';

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(notesReducer, compose(applyMiddleware(thunk, logger), reduxDevToolsHook));


const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
registerServiceWorker();
