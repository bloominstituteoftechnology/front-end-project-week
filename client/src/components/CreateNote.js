import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { addNote } from '../actions'
import Form from './Form'
import Speak from './Speak'

class CreateNote extends Component {
  submitNote = values => {
    this.props.addNote({ content: values })
    this.props.navigateHome()
  }

  render() {
    return (
      <div className="CreateNote">
        <div>Create New Note:</div>
        <Form onSubmit={this.submitNote} />
        <Speak />
      </div>

    )
  }
}

const mapDispatchToProps = {
  addNote,
  navigateHome: () => push('/')
}

export default connect(
  null,
  mapDispatchToProps
)(CreateNote)