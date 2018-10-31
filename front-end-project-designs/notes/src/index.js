import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NoteListView from './views/noteListView'
import { BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const middlewareQueue = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middlewareQueue);

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <NoteListView />
    </Router >
  </Provider>,
  document.getElementById('root')
);
