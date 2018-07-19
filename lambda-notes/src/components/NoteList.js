import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const NoteList = props => {
  // if notes are not yet loaded into store, return loading icon
  if (props.fetchingNotes) {
    return (
      <Loading />
    )
  }

  props.notes.forEach(note => {
    // trims regular case note title
    if (note.title.length > 14) {
      note.title = note.title.slice(0, 14) + '...';
    }
    // trims uppercase note title
    if (note.title.length > 12 && note.title === note.title.toUpperCase()) {
      note.title = note.title.slice(0, 12) + '...';
    }
    // trims regular case note body
    if (note.textBody.length > 95) {
      note.textBody = note.textBody.slice(0, 95) + '...';
    }
    // trims uppercase note body
    if (note.textBody.length > 87 && note.textBody === note.textBody.toUpperCase()) {
      note.textBody = note.textBody.slice(0, 87) + '...';
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

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
