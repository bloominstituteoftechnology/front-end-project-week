// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const Note = props => {
  // console.log("Note Component Notes", props.note);
  return (
    <Link to={`/notes/${props.id}`} className="noteDiv">
      <h2>{props.note.title}</h2>
      <div className="noteDescription">
        <p>{props.note.description}</p>
      </div>
    </Link>
  );
};

// export class Note extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       propsId: props.id,
//       note: props.note
//     };
//   }
//   //   console.log("NOTE", props);
//   render() {
//     return (
//       <Link to={`/notes/${this.state.propsId}`} className="noteDiv">
//         <h2>{this.state.note.title}</h2>
//         <div className="noteDescription">
//           <p>{this.state.note.description}</p>
//         </div>
//       </Link>
//     );
//   }
// }
