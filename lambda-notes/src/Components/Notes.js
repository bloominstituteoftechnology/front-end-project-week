import React from 'react';
import { Link } from 'react-router-dom';

const Notes = props => {
  return (
    <div className='notes-container'>
      <h2>Your Notes:</h2>
      <div className='notes-display'>
        {props.notes.map(note => {
          return (
            <Link to={`/note/${note._id}`}>
              <div 
                key={note._id}
              >
                <h3>{note.title}</h3>
                <p>{note.textBody}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;