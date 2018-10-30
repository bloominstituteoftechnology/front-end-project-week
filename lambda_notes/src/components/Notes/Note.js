import React, { Component } from 'react';

import SingleNote from './SingleNote';

// class Note extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // const noteId = this.props.match.params.id;
//     // const note = this.props.notes.find(note => note._id === noteId);

//     // if (this.props.notes.length === 0) {
//     //   return <h1>Loading notes...</h1>
//     // }

//     return <SingleNote note={this.props.note} deleteNote={this.props.deleteNote} />;
//   }
// }

const Note = props => {
  console.log('props from note', props)
  return <SingleNote note={props.note} deleteNote={props.deleteNote} />;
}

export default Note;
