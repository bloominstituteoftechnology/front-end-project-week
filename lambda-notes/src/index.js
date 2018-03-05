import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateNote from './components/CreateNote';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} exact={true} />
      <Route path="/create" component={CreateNote} />
    </div>
  </Router>, document.getElementById('root'));
