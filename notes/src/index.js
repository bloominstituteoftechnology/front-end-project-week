import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Imports
import {
    applyMiddleware,
    createStore
} from 'redux';

import {
    Provider
} from 'react-redux';

import rootReducer from './reducers';

// Router Imports
import {
    BrowserRouter as Router
} from 'react-router-dom';

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Store Creation
const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        thunk
    )
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
