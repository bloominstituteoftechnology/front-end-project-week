import React from "react";
import '../components.css';
import './index.css';
import { Link } from 'react-router-dom';

const NoteList = props => {
  if (!props.notes) {
    return <div>Notes are loading...</div>;
  }
  // if the notes do exist then we can slice them and reverse them so that newest note is shown first
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
  );
};

MoteList.defaultProps = {
  notes: []
};

export default NoteList;
