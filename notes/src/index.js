import React from 'react';
import ReactDOM from 'react-dom';

// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

// Router Imports

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store Definition

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
