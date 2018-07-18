import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NoteList = props => {
  if (!props.notes) {
    return (
      <div className="main-container"></div>
    )
  }

  props.notes.forEach(note => {
    if (note.title.length > 12) {
      note.title = note.title.slice(0, 12) + '...';
    }

    if (note.title.length > 10 && note.title === note.title.toUpperCase()) {
      note.title = note.title.slice(0, 10) + '...';
    }

    if (note.textBody.length > 110) {
      note.textBody = note.textBody.slice(0, 110) + '...';
    }

    if (note.textBody.length > 92 && note.textBody === note.textBody.toUpperCase()) {
      note.textBody = note.textBody.slice(0, 92) + '...';
    }
  });

  const notes = props.notes.slice().reverse();

  return (
    <div className="main-container">
      <h2>Your Notes:</h2>
        <div className="note-previews-container">
          {notes.map(note => {
            return (
              <Link to={`/notes/${note._id}`} key={Math.random()}>
                <div className="note-preview-container">
                  <h3>{note.title}</h3>
                  <p>{note.textBody}</p>
                </div>
              </Link>
            );
          })}
        </div>
    </div>
  )
}

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
