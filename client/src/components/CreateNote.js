import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { addNote } from '../actions'
import { clearRegister } from '../actions/speech'
import CreateForm from './CreateForm'
import Speak from './Speak'

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
      <div className="CreateNote">
        <div>Create New Note:</div>
        <CreateForm
          onSubmit={this.submitNote}
          enableReinitialize
          initialValues={{
            title: '',
            body: this.state.body.reduce((acc, curr) => acc.concat(curr + '\n\n'), '')
          }}
        />
        <Speak
          onSave={this.onSpeakSave}
        // options={}
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