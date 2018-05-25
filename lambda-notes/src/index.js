import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

//We need this Components to work with reduxger';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import './css/index.css';
import App from './components/App/App';

const store = createStore(
    rootReducer, // this is the most basic reducer. A function that returns and object. Replace it.
    applyMiddleware(thunk, logger)
  );
  
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>    
    </Provider>
    , document.getElementById('root'));