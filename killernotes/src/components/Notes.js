import React, { Component } from 'react';
import './Notes.css';
import NoteCard from './NoteCard';

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        Your Notes:
        <div className="container">
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
