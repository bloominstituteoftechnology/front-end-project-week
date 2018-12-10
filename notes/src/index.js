import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
    rootReducer,
    middleware
)

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.querySelector('#root')
)