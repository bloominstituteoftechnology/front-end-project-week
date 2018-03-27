import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'react-router-dom/BrowserRouter';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);