import React, { Component } from 'react';
import NoteCard from './NoteCard';

class ViewList extends Component {
  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    const { notes, getNote, deleteNote } = this.props;

    const cards = notes.map((note, index) => {
      return (
        <NoteCard
          key={index}
          index={index}
          note={note}
          getNote={getNote}
          deleteNote={deleteNote}
        />
      );
    });

    return (
      <div className="list-container">
        <h1 className="note-header-title">Your notes:</h1>
        {cards}
      </div>
    );
  }
}

export default ViewList;