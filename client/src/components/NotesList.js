import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotes } from '../actions'

import NoteThumb from './NoteThumb'
import './styles/NotesList.css'

class NotesList extends Component {
  componentDidMount = () => {
    this.props.getNotes()
  }

  render() {
    const { notes } = this.props
    return (
      <div className="NotesList mainContent">
        <h3 className="notesListTitle">Your Notes:</h3>
        <div className="notesListThumbWrapper">
          {notes.map(note => <NoteThumb note={note} key={note.id} />)}
        </div>
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