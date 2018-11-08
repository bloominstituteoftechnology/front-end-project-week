import React from 'react';
import { Link } from 'react-router-dom';


function Notes(props) {
  function routeToNote(event, note) {
    event.preventDefault();
    props.history.push(`/notes/${note._id}`);
    props.getNoteById(note._id)
  }

  return( 
    <div>
      {console.log(props.notes)}
      <h2>Hello from Notes</h2>
      
      {props.notes.map((note, i)=> {
        return (
            <div 
              onClick={event => routeToNote(event, note)}
              key={i}>
              {console.log(note)}
              <div >
                <h3>{note.title}</h3>
                <p>{note.textBody}</p>
              </div>
            </div>
          )
      })}
      
        
    </div>
    )
}

export default Notes;