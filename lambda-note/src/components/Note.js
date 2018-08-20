import React from 'react';

function Note (props) {
  return (
    <div>
      <h2>Your Notes</h2>
      {props.notes.map(note => {
        return (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Note;