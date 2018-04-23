import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; //Import Router
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Apply the Router to the App
ReactDOM.render(
<Router>
    <App />
</Router>
    , document.getElementById('root'));
registerServiceWorker();
