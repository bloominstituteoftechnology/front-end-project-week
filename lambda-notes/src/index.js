// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
// Styles
import './index.css';

let STORAGE_WAREHOUSE = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
     <App />
   </Provider>,
   document.getElementById('root')
 );
