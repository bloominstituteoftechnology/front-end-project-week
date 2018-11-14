import React from "react";

import Note from "./Note";

export default class Notes extends React.Component {
  sortNotes = (a, b) => {
    if (b.id < a.id) return 1;
    if (b.id > a.id) return -1;
    return 0;
  };

  render() {
    let sortedNotes = this.props.notes.sort(this.sortNotes);
    return (
      <div>
        {sortedNotes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    );
  }
}
