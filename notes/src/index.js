import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import notesReducer from './reducers';
import Root from './components/Root.js';

const initialState = {
  notes: [],
  isLoading: false,
  fetching: false,
  editing: false,
  deleting: false
}

const store = createStore(
  notesReducer,
  initialState,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
