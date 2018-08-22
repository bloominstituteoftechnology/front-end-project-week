import React from 'react';
import { Link } from 'react-router-dom';

const Notes = props => {
  return (
    <div className='notes-container'>
      <h4>Your Notes:</h4>
      <div className='notes'>
        {props.notes.map(note => {
          let preview = note.text;
          if (note.text.length > 100) {
            preview = note.text.slice(0,90) + '...';
          }
          return (
            <div className='note' key={note.id}>
              <Link to={`/view/${note.id}`}>
                <h5>{note.title}</h5>
                <p>{preview}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notes;


/* PROBLEM: When I delete an item from the array, the id and index numbers are thrown off
    I need to find a way to match the id from the url to it's corresponding array
    element when this happens. Maybe use array.indexOf(array.id === id) ? */
