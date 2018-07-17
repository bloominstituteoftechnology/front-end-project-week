// import React, { Component } from "react";
// // import axios from "axios";
// import SelectedNote from "./SelectedNote";

// export default class NoteView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       note: null
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params;
//     this.fetchNote(id);
//   }

//   fetchNote = id => {
//     // axios
//     //   .get(`http://api/${id}`)
//     //   .then(response => {
//     //     this.setState(() => ({ note: response.data }));
//     //   })
//     //   .catch(error => {
//     //     console.error(error);
//     //   });
//   };

//   render() {
//     if (!this.state.note) {
//       return <div>Loading note ...</div>;
//     }

//     const { note } = this.state;
//     return (
//       <div>
//         <p>edit delete</p>
//         <SelectedNote note={note} />
//       </div>
//     );
//   }
// }

import React from "react";

const NoteView = props => {
  const SelectedNote = props.notes.find(
    note => note.id === Number(props.match.params.id)
  );

  return (
    <div>
      <h2>{SelectedNote.title}</h2>
      <div>{SelectedNote.content}</div>
    </div>
  );
};

export default NoteView;
