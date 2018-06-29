import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'; 

import App from './App';

ReactDOM.render (
  <Router> 
    <App />
  </Router>, 
  document.getElementById('root')
);

registerServiceWorker();
