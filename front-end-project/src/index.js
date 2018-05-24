import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import noteReducer from './reducers';
import Root from './Root.js'

const rootReducer = combineReducers ({
    notes: noteReducer,
    form: formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers (applyMiddleware(logger)));

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);