import React, { Component } from "react";
import axios from "axios";

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
      return <li key={i}>{note.textBody}</li>;
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
