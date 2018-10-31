import React, { Component } from 'react';

import Note from '../components/Note'

import "../styles/Styles.css";

class ListNotes extends Component {
  render() {
    return (
      <div className="view note-list">
        {this.props.notes.map(note => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.textBody}
            tags={note.tags}
          />
        ))}
      </div>
    );
  }
}

export default ListNotes;
