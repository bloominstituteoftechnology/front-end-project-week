import React from "react";

import Note from "./Note";

import "../styles/App.css";

export default class Notes extends React.Component {
  // sortNotes = (a, b) => {
  //   if (b.id < a.id) return 1;
  //   if (b.id > a.id) return -1;
  //   return 0;
  // };

  render() {
    let notes = this.props.notes;
    // let sortedNotes = this.props.notes.sort(this.sortNotes);
    // if (!notes) {
    //   return (
    //   <div className="componentContainer"></div>
    //   );
    // } else {
      return (
        <div className="componentContainer">
          <h2>Your Notes:</h2>
          <div className="notesContainer">
            {notes.map(note => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        </div>
      );
    }
  }
// }
