import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NoteContainer from "./containers/NoteContainer";
import Note from "./components/Note";
import EditNoteContainer from "./containers/EditNoteContainer";
import CreateNoteContainer from "./containers/CreateNoteContainer";

const AppRouter = () => (
  <Router>
    <div>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={NoteContainer} />
        <Route exact path="/create" component={CreateNoteContainer} />
        <Route exact path="/note/:id" component={Note} />
        <Route exact path="/edit/:id" component={EditNoteContainer} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
