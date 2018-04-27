import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import NoteForm from './NoteForm';

class CreateNote extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: ''
    }

    this.formAttributes = {
      formHeading: 'Create New Note',
      handleInputChange: this.handleInputChange,
      handleSubmit: this.handleSubmit
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value}); 
  }

  handleSubmit = () => {
    this.props.addNewNote(this.state);
    this.props.history.push('/');
  }

  render() {
    return <NoteForm {...this.formAttributes} {...this.state} />;
  }
}

export default withRouter(CreateNote);
