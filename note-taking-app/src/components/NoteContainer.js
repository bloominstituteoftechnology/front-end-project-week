import React from 'react';
import { connect } from 'react-redux';

import Notes from './Notes';
import AddNoteForm from './AddNoteForm';
import UpdateNoteForm from './UpdateNoteForm';
import Note from './Note';

const NoteContainerChild = ({ isFetching, isSelecting, isAdding, isUpdating, isDeleting }) => {
  if (!isFetching) {
    if (isAdding) return <AddNoteForm />
    if (isUpdating) return <UpdateNoteForm />
    if (isSelecting) return <Note />
    return <Notes />
  } 
  return 'Loading...'  
}

const NoteContainer = (props) => 
  <NoteContainerChild {...props}/>

const mapStateToProps = (state) => {
  console.log(state)
  const { notesReducer } = state
  return notesReducer
}

export default connect(mapStateToProps, {})(NoteContainer);
// export default NoteContainer;