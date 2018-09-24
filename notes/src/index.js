import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { notesReducer } from  './store/reducers';

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(notesReducer, compose(applyMiddleware(thunk, logger), reduxDevToolsHook));

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
  
