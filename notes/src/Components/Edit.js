import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Form from './Form';

export default class Edit extends Component {
  state = {
    redirect: false,
  }
  updateNote = note => {
    axios.put(`http://localhost:5005/note/${note.id}`, note)
     .then(() => this.setState({ redirect: true }))
     .catch(error => console.log(error))
  }
  render() {
    let items = {
      button: 'Update Note',
      action: this.updateNote,
      note: this.props.location.state,
    }
    if (this.state.redirect) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className="flex-container">
        <div className="title">
          <h2>Edit Note:</h2>
        </div>
        <Form {...items} />
      </div>
    );
  }
}