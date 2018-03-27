import React, { Component } from "react";
import NotesList from "./BodyComponents/NotesList";
import NewNote from "./BodyComponents/NewNote";
import NoteView from "./BodyComponents/NoteView";

import { Route } from "react-router-dom";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={NotesList} />
        <Route path="/newnote" component={NewNote} />
        <Route path="/noteview/:id" component={NoteView} />
      </div>
    );
  }
}
