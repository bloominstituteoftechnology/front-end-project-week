import React, { Component } from 'react';
import NoteCard from './NoteCard';

class List extends Component {
  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    const { notes, getNote, deleteNote, getOneNote } = this.props;

    const cards = notes.map((note, index) => {
      return (
        <NoteCard
          key={index}
          index={index}
          note={note}
          getNote={getNote}
          getOneNote={getOneNote}
          deleteNote={deleteNote}
        />
      );
    });

    return (
      <div className="list-container">
        <h1 className="note-header-title">Your Notes:</h1>
        {cards}
      </div>
    );
  }
}

export default List;