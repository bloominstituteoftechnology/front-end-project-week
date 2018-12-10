import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleWare} from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./Reducers/index"

import './index.css';
import App from './App';

const store = createStore(reducers, applyMiddleWare(thunk, logger));


ReactDOM.render(
<Provider store={store}>
    <Router>
    <App />
    </Router>
</Provider>, 
document.getElementById('root'));
