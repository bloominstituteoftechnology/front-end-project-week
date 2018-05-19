import React from 'react';
import { connect } from 'react-redux';

import Notes from './Notes';
import AddNoteForm from './AddNoteForm';
import UpdateNoteForm from './UpdateNoteForm';
import Note from './Note';

import { getNotes } from '../actions';

const NoteContainerChild = ({ isFetching, isSelecting, isAdding, isUpdating, isDeleting }) => {
  if (!isFetching) {
    if (isAdding) return <AddNoteForm />
    if (isSelecting) return <Note />
    if (isUpdating) return <UpdateNoteForm />
    return <Notes />
  } 
  return 'Loading...'
}

class NoteContainer extends React.Component {
  componentDidMount = () => {
    this.props.getNotes()
  }
  render () {
    return (
      <NoteContainerChild {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  const { notesReducer } = state
  return notesReducer
}

export default connect(mapStateToProps, { getNotes })(NoteContainer);