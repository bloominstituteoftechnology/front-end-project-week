import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import logger from 'redux-logger';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { fetchNotes } from '../src/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App.js'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import noteReducer from './reducers';

const rootReducer = combineReducers ({
    notes: noteReducer,
    form: formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers (applyMiddleware(logger, thunk)));

store.dispatch(fetchNotes())

ReactDOM.render(
      <Provider store={store}>
        <Router>
        <Route path="/:filter?" component={App} />
        </Router>
    </Provider>,
  document.getElementById('root')
);