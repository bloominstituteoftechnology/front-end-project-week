import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, } from 'react-redux';
import rootReducer from './Reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

