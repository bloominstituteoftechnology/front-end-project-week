import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Form from './Form';

export default class Create extends Component {
  state = {
    redirect: false
  } 
  addNewNote = note => {
    axios.post("http://localhost:5005/notes", note)
      .then(() => this.setState({ redirect: true }))
      .catch(error => console.log(error));
  }
  render() {
    let items = {
      button: 'Add Note',
      action: this.addNewNote,
    }
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return(
      <div className="flex-container">
        <div className="title">
          <h2>Create New Note:</h2>
        </div>
        <Form {...items}/>
      </div>
    );
  }
}

