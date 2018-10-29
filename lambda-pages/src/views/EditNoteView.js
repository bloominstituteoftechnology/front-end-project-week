import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote, updateNote } from '../actions';

import NoteForm from '../components/NoteForm';

class EditNoteView extends Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  updateNote = note => {
    this.props.updateNote({ ...note, _id: this.props.note._id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="View">
        <h2>Edit Note:</h2>
        <NoteForm note={this.props.note} updateNote={this.updateNote} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.notes.note
  };
};

export default connect(
  mapStateToProps,
  { getNote, updateNote }
)(EditNoteView);
