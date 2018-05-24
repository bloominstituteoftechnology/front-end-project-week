import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import App from './App';
import CreateNote from './components/createNote'



ReactDOM.render(
    <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/create" component={CreateNote}/>
    </div>
      </Router>
    , document.getElementById('root'));

