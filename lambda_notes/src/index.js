import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; 
import thunk from 'redux-thunk';
// import reducer from './reducers';


const store = createStore( applyMiddleware(thunk, logger));
//add reducer +, before middleware
ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
