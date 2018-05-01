import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Route, NavLink, HashRouter } from 'react-router-dom'

ReactDOM.render(
        <NavLink>
            <App />
        </NavLink>,
    
    document.getElementById('root')
);
