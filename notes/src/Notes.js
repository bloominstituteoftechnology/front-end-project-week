import React from 'react';
import { Route, Link } from 'react-router-dom';


const Notes = (props) => {

  return( 
    <div>
      <h2>Hello from Notes</h2>
      {props.notes.map( (note, i) => {
        return (
            <div key={i}>
              <h3>{note.title}</h3>
              <p>{note.textBody}</p>
            </div>
          )
      })}
      
        
    </div>
    )
}

export default Notes;