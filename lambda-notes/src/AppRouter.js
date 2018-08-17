import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NoteContainer from "./containers/NoteContainers";
import Note from "./components/Note";
import EditNote from "./components/EditNote";
import CreateNote from "./components/CreateNote";

const AppRouter = () => (
  <Router>
    <div>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={NoteContainer} />
        <Route exact path="/create" component={CreateNote} />
        <Route exact path="/note/:id" component={Note} />
        <Route exact path="/edit/:id" component={EditNote} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
