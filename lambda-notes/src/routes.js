import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NotesList} />
    <Route path="create" component={CreateNote} />
  </Route>
);
