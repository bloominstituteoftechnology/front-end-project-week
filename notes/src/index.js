import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import View from './Components/View/View.js';
import Create from './Components/Create/Create.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';



ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={View} />
    <Route path="/create" component={Create} />
  </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
