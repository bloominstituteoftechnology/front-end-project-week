import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { notesReducer } from './reducers';

import { BrowserRouter } from 'react-router-dom'

const store = createStore(notesReducer, compose(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
