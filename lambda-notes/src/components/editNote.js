import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import NoteForm from './NoteForm';

class UpdateNote extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      tags: '',
      content: ''
    }

    this.formAttributes = {
      formHeading: 'Edit Note',
      handleInputChange: this.handleInputChange,
      handleSubmit: this.handleSubmit
    }
  }

  componentDidMount() {
    this.setState(this.props.clickedNote);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value}); 
  }

  handleSubmit = () => {
    this.props.updateEditedNote(this.state);
    this.props.history.push('/');
  }

  render() {
    return <NoteForm {...this.formAttributes} {...this.state} />;
  }
}

export default withRouter(UpdateNote);
