import React from 'react';
import ReactDOM from 'react-dom';
//importing Router
import { BrowserRouter as Router } from 'react-router-dom';


import App from './App';
//importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


//Wrapping App with Router
ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,document.getElementById('root'));
registerServiceWorker();
