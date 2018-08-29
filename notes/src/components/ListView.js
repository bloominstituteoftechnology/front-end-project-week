import React, { Component } from "react";
import NoteView from "./NoteView";

import "./ListView.css";

class ListView extends Component {
//   constructor() {
//     super();
//     this.state = {
//       notes: []
//     };
//   }

  render() {
    return (
      <div className="note-container">
        <h5 className="list-header">Your Notes: </h5>
        {props.notes.map(note => (
          <NoteView key={note.id} />
        ))}
      </div>
    );
  }
}

export default ListView;
