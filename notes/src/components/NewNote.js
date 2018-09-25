import React, { Component } from 'react';

import Note from './Note';
import { createNote } from '../actions'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class NewNote extends Component {
  state = {
    title: 'Luisan',
    textBody: 'this is my test'
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
    this.setState({ title:'', textBody:'' })

  }

  render() {
    return (
      <div className="new-note">
        <h2> Create New Note: </h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            value={this.state.title}
            placeholder='Note Title'
            onChange={this.handleChange}
            ></input>
            <input
              type='textarea'
              name='textBody'
              value={this.state.textBody}
              placeholder='Note Content'
              onChange={this.handleChange}
              ></input>
            <button type="submit"> Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default withRouter(connect(mapStateToProps,
  { createNote})
  (NewNote))
