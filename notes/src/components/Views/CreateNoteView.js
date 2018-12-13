import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNote, getNotes } from '../../actions';

import CreateNote from '../CreateNote';

class CreateNoteView extends Component {
  state = {
    title: '',
    textBody: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNote = e => {
    e.preventDefault();
    const { title, textBody } = this.state;
    this.props.addNote({ title, textBody });
    this.setState({ title: '', textBody: '' });
    this.props.getNotes();
    this.props.history.push('/');
  }

  render() {
    return (
      <CreateNote addNote={this.addNote} handleInput={this.handleInput} title={this.state.title} textBody={this.state.textBody} />
    );
  }
}

const mapStateToProps = state => {
  return {
    gettingNotes: state.gettingNotes
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { addNote, getNotes }
  )(CreateNoteView)
);