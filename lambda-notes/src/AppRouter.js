import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NoteListContainer from "./containers/NoteListContainer";
import EditNoteContainer from "./containers/EditNoteContainer";
import CreateNoteContainer from "./containers/CreateNoteContainer";
import NoteContainer from "./containers/NoteContainer";
import { injectGlobal } from 'styled-components';

injectGlobal` 
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  body {
    background-color: #f2f1f2;
  }
`

const AppRouter = () => (
  <Router>
    <div>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={NoteListContainer} />
        <Route exact path="/create" component={CreateNoteContainer} />
        <Route exact path="/note/:id" component={NoteContainer} />
        <Route exact path="/edit/:id" component={EditNoteContainer} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
