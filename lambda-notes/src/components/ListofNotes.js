import React from "react";
import Note from "./Note";

export default class ListOfNotes extends React.Component {
  render() {
    let filteredSearch = this.props.notes.filter(note => {
      return (
        note.title
          .toLowerCase()
          .indexOf(this.props.searchText.toLowerCase()) !== -1
      );
    });

    return (
      <>
        <h2 className="notes-list-header">Your Notes:</h2>
        <div className="notes-container">
          {filteredSearch.map(note => (
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
