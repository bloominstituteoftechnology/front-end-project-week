import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import { notesReducer } from './Reducers'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const middleware = applyMiddleware(thunk, logger) 
const store = createStore(notesReducer, middleware)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));