import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import {notesReducer} from './store/reducers';
import App from './App';
import './index.css';

const store = createStore(
    notesReducer,
    compose(
        applyMiddleware(thunk),
    )
);



ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
 document.getElementById('root')
 );
