import React, { Component } from 'react';
import NoteCard from './NoteCard';

class Notes extends Component {
  render() {
    const { notes } = this.props;
    return (
      <React.Fragment>
        {notes.map(note => (
          <NoteCard
            key={note._id}
            note={note}
            handleRedirectToNoteView={this.props.handleRedirectToNoteView}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Notes;
