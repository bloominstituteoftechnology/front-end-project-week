import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'react-redux';
import rootReducer from './reducers/';

import './index.css';
import App from './App';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(rootReducer, applyMiddleware());

ReactDOM.render(
 <Provider store={store}> 
  <App />
</Provider>
, document.getElementById('root'));

//createStoreWithMiddleware