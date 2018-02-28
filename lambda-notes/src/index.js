// React
import React from 'react';
import ReactDOM from 'react-dom';
import LambdaNotes from './components/notes-list';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
// Styles
import './index.css';

let STORAGE_WAREHOUSE = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
     <LambdaNotes />
   </Provider>,
   document.getElementById('root')
 );
