import React from "react";
import { Component } from "react";
import NotesList from "../NotesList";

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
    ]
  };

  CreateNotes(e) {
    e.preventDefault();
    const notetitle = e.target.elements.notetitle.value;
    const notebody = e.target.elements.notebody.value;
    this.setState({
      id: this.state.id + 1,
      notetitle: notetitle,
      notebody: notebody
    });
  }

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
