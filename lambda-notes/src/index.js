import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import  noteReducer from './reducer';
import axios from 'axios';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(noteReducer, composeEnhancers(applyMiddleware(thunk, logger)));


axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://lambdanotesproject.herokuapp.com'
    : 'http://localhost:5000';



ReactDOM.render(
  <Provider store={store}>
   <Router>	
    <App />
   </Router>	
  </Provider>,
  document.getElementById('root')
);

