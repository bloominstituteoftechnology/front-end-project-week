import React from 'react';

const Notes = (props) => {
  return( 
    <div>
      <h2>Hello from Notes</h2>
      {props.notes.map( (note, i) => {
        return (
          <div key={i} id={i}>
            <h3>{note.title}</h3>
            <p>{note.textBody}</p>
          </div>
          )
      })}
    </div>
    )
}

export default Notes;