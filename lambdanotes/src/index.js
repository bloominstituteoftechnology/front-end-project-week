import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';

const interimReducer = (state = [], action) => state;

const store = createStore(interimReducer)

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));
