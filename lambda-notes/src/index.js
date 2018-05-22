import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


