import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import { notesReducer } from './Reducers'
import App from './App';

const middleware = applyMiddleware(thunk, logger)
const store = createStore(notesReducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
  )