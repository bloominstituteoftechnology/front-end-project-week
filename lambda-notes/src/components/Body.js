import React, { Component } from "react";
import NotesList from "./NotesList";
import { Route } from "react-router";

export default class Body extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={NotesList} />
      </div>
    );
  }
}
