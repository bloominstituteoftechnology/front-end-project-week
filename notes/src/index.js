import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { notesReducer } from './reducers';
import logger from 'redux-logger';
import './index.css';

const store = createStore(notesReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store= {store}>
        <Router>
        <App />
        </Router>
    </Provider>,
document.getElementById('root'));
