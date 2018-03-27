import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';
import CreateNew from './components/CreateNew/CreateNew.js';
import Sidebar from './components/Sidebar/Sidebar.js';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/CreateNew' component={CreateNew} />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();