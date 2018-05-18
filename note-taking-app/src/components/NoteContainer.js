import React from 'react';
import { connect } from 'react-redux';

import Notes from './Notes';
import NoteForm from './NoteForm';
import Note from './Note';

const NoteContainer = ({ isCreating, isEditing, isSelecting }) => {

  if (isCreating || isEditing) return <NoteForm />

  if (isSelecting) return <Note />

  return <Notes />
}

const mapStateToProps = (state) => {
  const { toolbarReducer } = state
  console.log(toolbarReducer)
  return toolbarReducer
}

export default connect(mapStateToProps, {})(NoteContainer);