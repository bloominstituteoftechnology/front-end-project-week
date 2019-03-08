import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


ReactDOM.render(
    <Provider store={createStore(reducer, applyMiddleware(logger, thunk))}>
        <Router>
            <Route render={props => <App {...props} />} />    
        </Router>
    </Provider>,
    document.getElementById('root')
);