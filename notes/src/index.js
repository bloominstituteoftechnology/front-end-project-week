import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import noteReducer from './reducers';

const store = createStore(noteReducer, applyMiddleware(thunk, logger));

console.log('store', store);

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
