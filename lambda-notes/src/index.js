//IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router} from 'react-router-dom';

//Wrap Router around App
ReactDOM.render(
<Router>
    <App />
</Router>    
, document.getElementById('root'));
