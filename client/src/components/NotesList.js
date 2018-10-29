import React, { Component } from "react";

import Note from "./Note";

class NotesList extends Component {
  render() {
    return (
      <div className="NotesList">
        <h1>Your Notes:</h1>

        <ul>
          {this.props.notes.map(note => {
            return (
              <Note
                title={note.title}
                id={note._id}
                textBody={note.textBody}
                key={note._id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Note.defaultProps = {
  notes: []
};

export default NotesList;
