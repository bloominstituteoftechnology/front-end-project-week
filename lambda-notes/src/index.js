import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';


ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('root'));

