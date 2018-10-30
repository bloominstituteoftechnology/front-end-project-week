import React, { Component } from 'react';
import { connect } from 'react-redux';

import NoteCard from './NoteCard';

class Note extends Component {
  render() {
    const noteId = this.props.match.params.id;
    const note = this.props.notes.find(note => note._id === noteId);
    console.log('single Note', note.title)

    return (
      <NoteCard note={note} />
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
};

export default connect(mapStateToProps)(Note);
