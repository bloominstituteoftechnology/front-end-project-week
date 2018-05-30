import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, getVal } from 'react-redux-firebase'
import { NoteForm } from '.'

const NoteEdit = ({ firebase, note, match, history }) => {
  const handleSubmit = (note) => {
    firebase.update(`notes/${match.params.id}`, note, () => history.push(''))
  }

  return !isLoaded(note)
    ? <h1>Loading note for editing...</h1>
    : isEmpty(note)
      ? <h1>No note found with id "{match.params.id}"</h1>
      : (
        <NoteForm 
          editingNote
          handleSubmit={handleSubmit}
          note={note} />
      )
}

const mapStateToProps = (state, props) => ({
  note: getVal(state.data, `notes/${props.match.params.id}`)
})

export default compose(
  firebaseConnect([ 'notes' ]),
  connect(mapStateToProps)
)(NoteEdit)