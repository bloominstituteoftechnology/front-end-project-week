import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, editNote } from '../actions';

import EditNote from '../components/Notes/EditNote';

class EditNoteView extends Component {
  state = {
    title: '',
    textBody: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  editNote = (e, id) => {
    e.preventDefault();
    const { title, textBody } = this.state;
    this.props.editNote(id, { title, textBody });
    this.setState({ title: '', textBody: '' });
    this.props.getNotes();
    this.props.history.push('/');
  }

  render() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note._id === noteId);

    return (
      <EditNote editNote={this.editNote} handleInput={this.handleInput} title={this.state.title} textBody={this.state.textBody} note={note} />
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes
  }
}

export default connect(mapStateToProps, { getNotes, editNote })(EditNoteView);
