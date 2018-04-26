import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import './index.css';
import App from './App';
import { todoReducers } from './reducers';

const store = createStore(
  todoReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
