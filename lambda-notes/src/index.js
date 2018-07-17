import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from './reducers';
import { routerReducer } from 'react-router-redux'

const middleware = applyMiddleware(thunk, logger);

const store = createStore(
    combineReducers({
        rootReducer,
        routing: routerReducer
    }),
    middleware
);

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);