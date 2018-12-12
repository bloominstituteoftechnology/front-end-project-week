import React from "react";
import Note from "./Note";

export default class ListOfNotes extends React.Component {
  render() {
    return (
      <>
        <h2 className="notes-list-header">Your Notes:</h2>
        <div className="notes-container">
          {this.props.notes.map(note => (
            <Note
              note={note}
              key={note._id}
              title={note.title}
              text={note.textBody}
              id={note._id}
            />
          ))}
        </div>
      </>
    );
  }
}
