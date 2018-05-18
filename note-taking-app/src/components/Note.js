import React from 'react';
import { connect } from 'react-redux';

import { getEditNoteForm, deleteNote} from '../actions';

const Note = ({id, title, content, getEditNoteForm, deleteNote}) =>
  <div>
    <h4>{title}</h4>
    <p>{content}</p>
    <button onClick={() => getEditNoteForm({id, title, content})}>Edit</button>
    <button onClick={() => deleteNote(id)}>Delete</button>
  </div>

const mapStateToProps = (state) => {
  const { note } = state.toolbarReducer
  return note
}

export default connect(mapStateToProps, { getEditNoteForm, deleteNote })(Note);