import React, { Component } from 'react';
import NoteCard from './NoteCard';

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        Your Notes:
        <div>
          {this.props.notes.map(note => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    );
  }
}

Notes.defaultProps = {
  notes: [],
};

export default Notes;
