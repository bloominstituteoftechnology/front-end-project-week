import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Redux/reducers';
import App from './App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistedState = localStorage.getItem('reduxState')
//   ? JSON.parse(localStorage.getItem('reduxState'))
//   : {};

// const store = createStore(
//   reducer,
//   persistedState,
//   composeEnhancers(applyMiddleware(thunk, logger))
// );

// store.subscribe(() => {
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()));
// });
