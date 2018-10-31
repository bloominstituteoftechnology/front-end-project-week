import React, { Component } from 'react';

import Note from '../components/Note'

import "../styles/Styles.css";

class ListNotes extends Component {
  render() {
    return (
      <div className="view note-list">
        {this.props.notes.map(note => (
          <Note
            id={note._id}
            title={note.title}
            content={note.textBody}
          />
        ))}
      </div>
    );
  }
}

Note.defaultProps = {
  notes: [],
};

export default ListNotes;
