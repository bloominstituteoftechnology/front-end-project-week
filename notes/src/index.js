import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleWare } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

<Provider> 
    <Router>
        <App /> 
    </Router>
</Provider>,

document.getElementById('root'));


registerServiceWorker();
