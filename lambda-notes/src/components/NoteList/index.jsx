import React from "react";
import '../components.css';
import './index.css';
import { Link } from 'react-router-dom';

const NoteList = props => {
  if (!props.notes) {
    return <div>Notes are loading...</div>;
  }

  // refactor and slice the notes so that it displays Elipses if the note title is too long
  props.notes.forEach(note => {
    // slice the regular case note title
    if (note.title.length > 14) {
      note.title = note.title.slice(0, 14) + '...';
    }
    // slice the uppercase note title
    if (note.title.length > 10 && note.title === note.title.toUpperCase()) {
      note.title = note.title.slice(0, 10) + '...';
    }
    // slice the  regular case note body
    if (note.textBody.length > 110) {
      note.textBody = note.textBody.slice(0, 110) + '...';
    }
    // slice the uppercase note body
    if (note.textBody.length > 92 && note.textBody === note.textBody.toUpperCase()) {
      note.textBody = note.textBody.slice(0, 92) + '...';
    }
  });

  // reverses note array
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


MoteList.defaultProps = {
  notes: []
};

export default NoteList;
