import React, { Component } from "react";
import "./NotesHolder.css";
import Note from "./Notes/Note";
import Notes from "../../Notes/NotesData";
import ViewNote from "../../ViewNote/ViewNote";
import { Route } from "react-router-dom";

class NotesHolder extends Component {
  constructor() {
    super();
    this.state = {
      notes: Notes
    };
  }
  render() {
    return (
      <div className="notes-holder">
        <div className="note-card-section">
        <h1>Your Notes</h1>
          <Note note={this.state.notes} />
        </div>
        <div>
          <Route
            exact
            path="/view-note/:id"
            render={props => <ViewNote {...props} note={this.state.notes} />}
          />
        </div>
      </div>
    );
  }
}
export default NotesHolder;
