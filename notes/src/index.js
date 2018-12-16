import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import rootReducer from './components/reducers';
import './index.css';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk) // could include logger
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
