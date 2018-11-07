import React from 'react';
import { Link } from 'react-router-dom';


const Notes = (props) => {

  return( 
    <div>
      <h2>Hello from Notes</h2>
      {props.notes.map( (note) => {
        return (
            <Link to={`/notes/:${note._id}`}key={note._id}>
              <div>
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