import React from "react";

const NoteView = props => {
  return (
    <div>
      {/* <div className="change-links">
        <div>edit</div>
        <div>delete</div>
      </div>
      <div
        className="note-card"
        onClick={() => props.noteCardHandler(props.note.id)}
      >
        {props.note}
      </div> */}
    </div>
  );
};

// class NoteView extends Component {
//   constructor() {
//     super();
//     this.state = {
//       note: [{ title: "Note Title", content: "Note Content", id: null }]
//     };
//   }

//   render() {
//     return (
//       <div className="note-view">
//         <div className="change-links">
//           <link>edit</link>
//           <link>delete</link>
//         </div>
//         <div className="note-card">
//           <h5>{this.state.note.title}</h5>
//           <p>{this.state.note.content}</p>
//         </div>
//       </div>
//     );
//   }
// }

export default NoteView;
