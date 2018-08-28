import React, { Component } from "react";

class NoteList extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <div>
        <h2>Your Notes</h2>
        notelist
      </div>
    );
  }
}

export default NoteList;
