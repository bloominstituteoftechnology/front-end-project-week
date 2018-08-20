import React from 'react';

const Notes = props => {
  return (
    <div className='notes-container'>
      <h4>Your Notes:</h4>
      <div className='notes'>
        {props.notes.map(note => {
          return (
            <div className='note' key={note.id}>
              <h5>{note.title}</h5>
              <p>{note.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;
