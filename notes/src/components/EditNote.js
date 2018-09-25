import React, { Component } from 'react';

import { updateNote } from '../actions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import NoteForm from './NoteForm'

class NewNote extends Component {
  state = {
    title: 'Edit',
    textBody: 'ing my test'
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
      _id: this.props.noteList.find(item => item._id = this.props.match.params.id)._id
    }
    console.log(newNote._id);
    this.props.updateNote(newNote)
    this.setState({ title:'', textBody:'' })

  }

  render() {
    let ans = this.props.noteList.find(item => item._id = this.props.match.params.id)
    return (
      <React.Fragment>
      <h2> Create New Note: </h2>
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

export default withRouter(connect(mapStateToProps, { updateNote }) (NewNote))
