// import React, { Component } from "react";
import React from "react";

import "./ListView.css";

const ListView = props => {
  return (
    <div className="note-container">
      <h5 className="list-header">Your Notes: </h5>
      {props.notes.map(notes => (
          <div>{notes.note}</div>
      ))}
    </div>
  );
};

// class ListView extends Component {
//   render() {
//     const { notes } = this.props;

//     return (
//       <div className="note-container">
//         <h5 className="list-header">Your Notes: </h5>
//         {notes.map(notes => (
//           <NoteView key={notes.id} />
//         ))}
//       </div>
//     );
//   }
// }

export default ListView;
