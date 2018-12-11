import React from "react";
import Note from "./Note";

export default class ListOfNotes extends React.Component {

  render() {
    return (
      <div className="notes-container">
        {this.props.state.notes.map(note => (
          <Note
            note={note}
            key={note._id}
            fetchNote={this.props.fetchNote}
            title={note.title}
            text={note.textBody}
            id={note._id}
          />
        ))}
      </div>
    );
  }
}

