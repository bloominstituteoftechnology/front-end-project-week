import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './allReducers';

const store = createStore(reducers, applyMiddleware(thunk,logger))



ReactDOM.render(
 <Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
