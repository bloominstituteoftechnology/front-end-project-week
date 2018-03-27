import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';

export default (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/create" component={CreateNote} />
    </div>
  </Router>
);
