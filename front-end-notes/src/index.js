import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
    () => {}, 
    applyMiddleware(thunk, logger)
  );



ReactDOM.render(<Provider store={store}> <App/></Provider>, document.getElementById('root'));

