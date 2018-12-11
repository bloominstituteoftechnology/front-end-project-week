import React from 'react';
import { connect } from 'react-redux';

import { addNote, getNotes, editNote } from '../actions';
import AddNote from '../components/AddNote';

function AddNoteView(props) {
  return <AddNote {...props} />;
}

export default connect(
  null,
  { addNote, getNotes, editNote }
)(AddNoteView);
