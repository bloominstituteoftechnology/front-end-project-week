import React from 'react';

const Notes = (props) => {
  return( 
    <div>
      <h2>Hello from Notes</h2>
      {props.notes.map( (note, i) => {
        return <h3>{note.title}</h3>
      })}
    </div>
    )
}

export default Notes;