import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ListNotes from './components/ListNotes/ListNotes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>,

  document.getElementById('root')
);
registerServiceWorker();
