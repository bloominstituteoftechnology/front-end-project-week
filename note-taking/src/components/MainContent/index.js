import React from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "../Notes";
import CreateNotes from "../CreateNotes";
import CardNotes from "../CardNotes";

const MainContent = props => (
  <div>
    <Switch>
      <Route exact path="/" component={Notes} />} />
      <Route path="/createnotes" component={CreateNotes} />
      <Route exact path={`/:id/notes`} component={CardNotes} />
    </Switch>
  </div>
);

export default MainContent;
