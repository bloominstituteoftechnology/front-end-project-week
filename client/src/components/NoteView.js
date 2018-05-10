import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getOne } from '../actions'
import Note from './Note'

class NoteView extends Component {
  componentDidMount = () => {
    this.props.getOne(this.props.id)
  }

  render() {
    const { note } = this.props
    return (
      <div className="NoteView">
        <Note note={note} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  note: state.notesReducer.activeNote,
})

const mapDispatchToProps = { getOne }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteView)