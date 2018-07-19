import React from 'react';
import { Link } from 'react-router-dom';

const Notes = props => {
      return (
      <div className='notes'>
        <h1>Your Notes:</h1>
        <ul>
          {props.notes.map(note=>{
            return(
              <div className='note'><Link style={{ textDecoration: 'none' }} to={`/note/${note.id}`} key={Math.random()}>
                <div className='note-text'>
                  <h2>{note.title.substring(0,15)}</h2>
                  <p>{note.textBody.substring(0,120)}...</p>
                </div>
              </Link></div>
            )
          })}
        </ul>
      </div>
    )
}

export default Notes;
