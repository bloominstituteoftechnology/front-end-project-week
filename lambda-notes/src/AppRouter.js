import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';

const AppRouter = () => (
  <Router>
    <Sidebar />
    <Switch>
      <Route exact path="/" component={NoteList} />
      <Route exact path="/create" component={CreateNote} />
      <Route exact path="/note/:id" component={Note} />
      <Route exact path="/edit/:id" component={EditNote} />
    </Switch>
  </Router>
);

export default AppRouter;