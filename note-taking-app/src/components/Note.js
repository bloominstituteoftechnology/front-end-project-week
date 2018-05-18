import React from 'react';
import { connect } from 'react-redux';

import { getEditNoteForm } from '../actions';

const Note = ({id, title, content, getEditNoteForm}) =>
  <div>
    <h4>{title}</h4>
    <p>{content}</p>
    <button onClick={() => getEditNoteForm({id, title, content})}>Edit</button>
  </div>

const mapStateToProps = (state) => {
  const { note } = state.toolbarReducer
  return note
}

export default connect(mapStateToProps, { getEditNoteForm })(Note);