import React, { Component } from "react";
import NoteView from "./NoteView";

import "./ListView.css";

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  render() {
    return (
      <div className="note-container">
        <h5 className="list-header">Your Notes: </h5>
        {this.state.notes.map(note => (
          <Note key={note.id} />
        ))}
      </div>
    );
  }
}

// const ListView = props => {
//     return (
//         <div className="note-container">
//             <h5 className="list-header">Your Notes: </h5>
//             {props.notes.map(notes => (
//                 <div key={notes.id}>{notes}</div>
//             ))}
//         </div>
//     )
// }

export default ListView;
