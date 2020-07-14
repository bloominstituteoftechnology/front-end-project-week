import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import Auth from './components/Authentication/Authentication'

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
    rootReducer,
    middleware
)

ReactDOM.render(
    <Provider store = { store }>
        <Router>
            <Auth />
        </Router>
    </Provider>,
    document.querySelector('#root')
)