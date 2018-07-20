import React from "react";
import { Component } from "react";
import NotesList from "../NotesList";
import CreateNotes from "../CreateNotes";

class Notes extends Component {
  state = {
    notes: [
      {
        id: 0,
        notetitle: "test",
        notebody: "ing"
      },
      {
        id: 1,
        notetitle: "test",
        notebody: "ing"
      },
      {
        id: 2,
        notetitle: "test",
        notebody: "ing"
      }
    ],
    note: ""
  };

  changeNote = e => this.setState({ [e.target.name]: e.target.value });

  createNotes = e => {
    e.preventDefault();
    const notes = this.state.notes.splice();
    notes.push({
      id: Date.now(),
      notetitle: this.state.note,
      notebody: this.state.note
    });
    this.setState({ notes, note: "" });
  };

  render() {
    return (
      <div>
        <p>Your Notes: </p>
        <NotesList items={this.state.notes} />
      </div>
    );
  }
}

export default Notes;
