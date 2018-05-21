import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById('root'));

