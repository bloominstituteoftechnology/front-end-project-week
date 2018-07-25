import React from "react";
import { Switch, Route } from "react-router-dom";
import Notes from "./Notes";
import NoteDetails from "./NoteDetails";
import AddNote from "./AddNote";
import EditNote from "./EditNote";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route exact path="/note/add" component={AddNote} />
        <Route exact path="/note/edit/:id" component={EditNote} />
        <Route exact path="/note/:id" component={NoteDetails} />
      </Switch>
    </main>
  );
};

export default Main;
