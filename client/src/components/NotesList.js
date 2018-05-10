import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotes } from '../actions'

import NoteThumb from './NoteThumb'

class NotesList extends Component {
  componentDidMount = () => {
    this.props.getNotes()
  }

  render() {
    const { notes } = this.props
    return (
      <div className="NotesList">
        {notes.map(note => <NoteThumb note={note} key={note.id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notes: state.notesReducer.notes
})

const mapDispatchToProps = {
  getNotes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList)