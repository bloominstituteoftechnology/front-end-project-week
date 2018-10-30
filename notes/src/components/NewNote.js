import React, { Component } from 'react';

import { createNote } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

class NewNote extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newNote = {
      title: this.state.title,
      content: this.state.content,
    }
    this.props.createNote(newNote)
    this.setState({ title:'', content:'' })

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

export default withRouter(connect(mapStateToProps, { createNote }) (NewNote))
