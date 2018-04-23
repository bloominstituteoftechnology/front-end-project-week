import React from 'react';
import ReactDOM from 'react-dom';//may need to install this
import './index.css';
import App from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger'; install this if needed
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
