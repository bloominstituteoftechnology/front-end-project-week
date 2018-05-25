import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import noteReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//"I'll wager 400 quatloos on the newcomer"
const quatloo = createStore(noteReducer, composeEnhancers(
  applyMiddleware(thunk, logger)
));

ReactDOM.render(
  <Provider store={quatloo}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
