import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import './index.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { reducer } from './store/reducers';

const store = createStore(reducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
