import React from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "../Notes";
import CreateNotes from "../CreateNotes";

const MainContent = props => (
  <div>
    <Switch>
      <Route exact path="/" component={Notes} />} />
      <Route path="/createnotes" component={CreateNotes} />
    </Switch>
  </div>
);

export default MainContent;
