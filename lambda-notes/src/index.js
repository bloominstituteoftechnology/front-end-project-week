import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from './reducers';
import { routerReducer } from 'react-router-redux'

const middleware = applyMiddleware(thunk, logger);

const reducer = combineReducers({
    rootReducer,
    routing: routerReducer
})

const store = createStore(
    reducer,
    middleware
);

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(() => {
    console.log(store.getState());
})

render(
    <Provider store={store}>
        { /* Tell the Router to use our enhanced history */}
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);