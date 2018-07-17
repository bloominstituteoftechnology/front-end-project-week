import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  noteReducer from './reducer';

const store = createStore(noteReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
  <Provider store={store}>
   <Router>	
    <App />
   </Router>	
  </Provider>,
  document.getElementById('root')
);

