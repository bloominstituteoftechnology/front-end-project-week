import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NoteList = props => {
  if (!props.notes) {
    return (
      <div>Notes are loading...</div>
    )
  }

  const notes = props.notes.slice().reverse();

  return (
    <div>
      {notes.map(note => {
        return (
          <Link to={`/notes/${note._id}`} key={Math.random()}>
            <div className="note-title">{note.title}</div>
            <div className="note-text-body">{note.textBody}</div>
          </Link>
        );
      })}
    </div>
  )
}

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
