import React, { Component } from "react";
import axios from "axios";
import Note from "./Note";

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    this.getNotes();
  }

  getNotes() {
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data }, () => {});
      });
  }

  render() {
    const noteItems = this.state.notes.map((note, i) => {
      return <Note key={note.id} note={note} />;
    });
    return (
      <div>
        <h1>Notes</h1>
        <ul>{noteItems}</ul>
      </div>
    );
  }
}

export default Notes;
