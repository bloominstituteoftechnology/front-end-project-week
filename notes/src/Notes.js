import React from 'react';
import Note from './Note';
import { Route, Link } from 'react-router-dom';


const Notes = (props) => {

  return( 
    <div>
      <h2>Hello from Notes</h2>
      {props.notes.map( (note, i) => {
        return (
          <Link to={`/:${i}`}key={i} >
            <div 
              
              id={i}>
              <h3>{note.title}</h3>
              <p>{note.textBody}</p>
            </div>
          </Link>
          )
      })}
      
        
    </div>
    )
}

export default Notes;