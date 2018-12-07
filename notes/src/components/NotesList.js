import React from 'react';

const NotesList = ({notes, history}) => {
  return (
    <div className="notes-list">
      <h3>Notes List</h3>
      {
        notes.map(note => (
          <div
            className="note-item"
            key={note.id}
            onClick = { () => {
              history.push(`/notes/${note.id}`)
            }}
          >
            <h4>{note.title}</h4>
            <p>{note.textBody}</p>
          </div>
        ))
      }
    </div>
  );
}
 
export default NotesList;