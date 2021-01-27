import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import netlifyIdentity from 'netlify-identity-widget';

import { BrowserRouter as Router } from 'react-router-dom';

netlifyIdentity.init()

ReactDOM.render(
    <Router>
        <App />
    </Router>
,document.getElementById('root'));


