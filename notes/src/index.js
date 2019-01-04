// *** === Imports === *** //
// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux 
import {
    applyMiddleware,
    createStore
} from 'redux';

import {
    Provider
} from 'react-redux';

import rootReducer from './reducers';

// Router 
import {
    BrowserRouter as Router
} from 'react-router-dom';

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// StyleMediales
import './index.css';

// Component
import App from './App';

// Service Worker
import * as serviceWorker from './serviceWorker';

// *** === Store Creation === *** //
const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        thunk
    )
);


// *** ==== Render to DOM ==== *** //
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
