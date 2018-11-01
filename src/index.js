import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Goudy Bookletter 1911', 'Average Sans']
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'))
