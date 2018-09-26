import React, { Component } from 'react';

import { createNote } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

class NewNote extends Component {
  state = {
    title: 'Note Title',
    textBody: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a efficitur mollis ..'
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    }
    this.props.createNote(newNote)
    this.setState({ title:'Note Title', textBody:'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a efficitur mollis ..' })

  }

  render() {
    return (
      <React.Fragment>
      <h2 className='notes-title'> Create New Note: </h2>
      <NoteForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        state={this.state}
      />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default withRouter(connect(mapStateToProps, { createNote}) (NewNote))
