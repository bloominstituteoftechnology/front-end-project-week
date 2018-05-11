import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { addNote } from '../actions'
import { clearRegister } from '../actions/speech'
import CreateForm from './CreateForm'
import './styles/CreateNote.css'

import CreateNoteWithSpeech from './hoc/withSpeech'

class CreateNote extends Component {
  state = { body: [] }
  submitNote = values => {
    this.props.addNote({ content: values })
    this.props.navigateHome()
  }

  onSpeakSave = transcript => {
    this.setState({ body: transcript })
    this.props.clearRegister()
  }

  render() {
    return (
      <div className="CreateNote mainContent">
        <h3>Create New Note:</h3>
        <CreateForm
          onSubmit={this.submitNote}
          enableReinitialize
          initialValues={{
            body: this.state.body.reduce((acc, curr) => acc.concat(curr + '\n\n'), '')
          }}
        />
        <CreateNoteWithSpeech
          onSave={this.onSpeakSave}
        />
      </div>

    )
  }
}

const mapDispatchToProps = {
  addNote,
  clearRegister,
  navigateHome: () => push('/')
}

export default connect(
  null,
  mapDispatchToProps
)(CreateNote)