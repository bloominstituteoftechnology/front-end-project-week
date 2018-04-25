import React, { Component } from "react";

import Note from "./Note";

class NotesList extends Component {
  render() {
    return (
      <div className="notes">
        <h3>Your notes:</h3>
        {this.props.notes.map((note, index) => {
          return <Note key={index} notes={note} id={index} />;
        })}
      </div>
    );
  }
}

export default NotesList;
