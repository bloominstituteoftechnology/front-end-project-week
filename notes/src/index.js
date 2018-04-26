import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import pops from './reducers.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(pops, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
<Router>
<App />
</Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
