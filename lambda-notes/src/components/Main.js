import React from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "./Notes";
import NoteDetails from "./NoteDetails";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/note/:id" component={NoteDetails} />
      </Switch>
    </main>
  );
};

export default Main;
