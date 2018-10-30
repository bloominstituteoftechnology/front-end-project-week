import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions';

import SingleNote from '../components/Notes/SingleNote';

class SingleNoteView extends Component {
  // this worked idk why :)
  // componentDidMount() {
  //   this.props.getNotes();
  // }

  deleteNote = (e, id) => {
    e.preventDefault();
    this.props.deleteNote(id);
    this.props.history.push('/');
  }

  render() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note._id === noteId);

    return <SingleNote note={note} deleteNote={this.deleteNote} />
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
};

export default connect(mapStateToProps, { getNotes, deleteNote })(SingleNoteView);
