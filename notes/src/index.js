import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import logger from "redux-logger";
import {BrowserRouter as Router} from "react-router-dom";
import {reducer} from "./Reducer"

const store = createStore(reducer,applyMiddleware(thunk,logger))

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root'));
