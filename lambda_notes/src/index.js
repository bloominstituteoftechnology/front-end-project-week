import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Note from './components/Note/Note';
import UpdateNote from './components/UpdateNote/UpdateNote';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
<Router>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/create" component={CreateNewNote} exact />
    <Route path="/update" component={UpdateNote} exact />
    <Route path="/:id" component={Note} exact />
  </Switch>
</Router>
, document.getElementById('root'));