// React
import React from 'react';
import ReactDOM from 'react-dom';
import LambdaNotes from './components/notes-list/notes-list';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import middleware from './middleware/middleware';
// Styles
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const STORAGE_WAREHOUSE = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
     <LambdaNotes />
   </Provider>,
   document.getElementById('root')
 );
