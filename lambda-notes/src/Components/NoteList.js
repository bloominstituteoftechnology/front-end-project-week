import React from "react";

const NoteList = (props) => {
  return (
    <div className="note-container">
      <h2>Your Notes:</h2>
      <div className="all-notes">
        {props.notes.map(note => (
          <div className="note">
          <p className='title'>{note.title}</p>
          <p>{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
