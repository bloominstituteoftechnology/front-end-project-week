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
import { localState, saveState } from './Persistence'

const load = localState();
const middleware = applyMiddleware(thunk, logger);

const reducer = combineReducers({
    rootReducer,
    routing: routerReducer
})

const store = createStore(
    reducer,
    load,
    middleware
);

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(() => {
    let currentState = store.getState();
    console.log('store.getstate here:',currentState.rootReducer.noteReducer);
    saveState(currentState.rootReducer.noteReducer);
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