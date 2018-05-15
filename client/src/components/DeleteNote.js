import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { deleteNote } from '../actions'
import './styles/DeleteNote.css'

class DeleteNote extends Component {
  deleteNote = () => {
    const { id } = this.props
    this.props.deleteNote(id)
    this.props.navigateHome()
  }

  cancelDelete = () => {
    this.props.navigateHome()
  }

  render() {
    return (
      <div className="DeleteNote">
        <p>Are you sure you want to delete this?</p>
        <button onClick={this.deleteNote} className="mainBtn mainContentBtn">Delete</button>
        <button onClick={this.cancelDelete} className="mainBtn mainContentBtn mainNoBtn">No</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  deleteNote,
  navigateHome: () => push('/'),
}

export default connect(null, mapDispatchToProps)(DeleteNote)