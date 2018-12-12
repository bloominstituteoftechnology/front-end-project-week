import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';


import ReactDom from 'react-dom';
import Popup from 'react-popup';


ReactDOM.render(
  <div>
    <Popup />
    <Router>
      <App />
    </Router>
  </div>
 
, document.getElementById('root'));


