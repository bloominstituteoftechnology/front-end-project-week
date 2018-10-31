import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes, deleteNote } from '../actions';

import SingleNote from '../components/Notes/SingleNote';

class SingleNoteView extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  deleteNote = (e, id) => {
    e.preventDefault();
    this.props.deleteNote(id);
    this.props.getNotes();
    this.props.history.push('/');
  }

  render() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note._id === noteId);

    if (this.props.gettingNotes) {
      return <h2>Loading note...</h2>
    }

    if (note) {
      return <SingleNote note={note} deleteNote={this.deleteNote} />
    } else {
      return <h2>404: Note Not Found</h2>
    }
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    gettingNotes: state.gettingNotes
  }
};

export default connect(mapStateToProps, { getNotes, deleteNote })(SingleNoteView);
