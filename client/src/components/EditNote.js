import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import EditForm from './EditForm'
import { getOne, updateNote } from '../actions'
import './styles/EditNote.css'

class EditNote extends Component {
  componentDidMount = () => {
    this.props.getOne(this.props.id)
  }

  submitNoteUpdate = values => {
    const { id } = this.props.note
    this.props.updateNote(id, { content: values })
    this.props.navigateHome()
  }

  getInitialValues = () => {
    const { title, body } = this.props.note.content
    return { title, body }
  }

  render() {
    const { note } = this.props
    return (
      <div className="EditNote mainContent">
        <h3>Edit Note:</h3>
        <div className="editNoteForm">
          {!note.content ? "Loading" :
            <EditForm
              note={note}
              onSubmit={this.submitNoteUpdate}
              initialValues={this.getInitialValues()}
            />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  note: state.notesReducer.activeNote
})

const mapDispatchToProps = {
  getOne,
  updateNote,
  navigateHome: () => push('/')
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNote)