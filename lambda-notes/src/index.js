import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const MiddlewareQueue = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, MiddlewareQueue);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);