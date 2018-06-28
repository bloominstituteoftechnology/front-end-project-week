// React imports
import React from 'react';
import ReactDOM from 'react-dom';
// Components Imports
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Router Imports
import { BrowserRouter as Router } from 'react-router-dom';
// Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from './reducers';
import logger from 'redux-logger';


const store = createStore(notesReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
(
    <Provider store={store}> 
        <Router>
            <App />
        </Router>
    </Provider>
)
    , document.getElementById('root'));

registerServiceWorker();
