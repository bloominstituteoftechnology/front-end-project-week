import React, { Component } from "react";
import { Note } from "./Note";

import "../../css_styles/notes.css";

export const Notes = props => {
  // console.log("Notes Component Notes", props.notes);
  // const initialLinks = props.notes;
  return (
    <div className="notesMainDiv">
      <h2 className="landingTitle">Your Notes:</h2>
      <div className="noteListDiv">
        {props.notes.map(note => {
          return <Note note={note} id={note.id} key={note.id} />;
        })}
      </div>
    </div>
  );
};

// class Notes extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: props.notes
//     };
//   }
//   componentDidUpdate(prevProps) {
//     console.log("COMPONENT DDID MOUNT ON INDIVIDUAL", this.props);
//     if (this.props.notes !== prevProps.notes) {
//       this.setState({ notes: this.props.notes });
//     }
//   }
//   render() {
//     return (
//       <div className="notesMainDiv">
//         <h2 className="landingTitle">Your Notes:</h2>
//         <div className="noteListDiv">
//           {this.state.notes.map(note => {
//             return <Note note={note} id={note.id} key={note.id} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Notes;
