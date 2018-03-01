import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import notesReducer from './reducers';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {initialState} from "./initialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

const store = createStore(
  notesReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
