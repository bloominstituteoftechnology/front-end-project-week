import React from 'react';
import { Link } from 'react-router-dom';

const Notes = props => {
  return (
    <div className='notes-container'>
      <h4>Your Notes:</h4>
      <div className='notes'>
        {props.notes.map(note => {
          return (
            <div className='note' key={note.id}>
              <Link to={`/view/${note.id}`}>
                <h5>{note.title}</h5>
                <p>{note.text}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
