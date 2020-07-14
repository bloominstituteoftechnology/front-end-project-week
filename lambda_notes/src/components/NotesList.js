import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NotesList = props => {
  return (
    <div className="notesListContainer">
      <h2 className='header'>Your Notes:</h2>
        <div className="notesList">
            {props.dummyNotes.map((note, index) => {
              return(
                <Link 
                  key={index + note.title} 
                  className='noteLink' 
                  to={`/note/${note.id}`}
                >
                  <div className='note'>
                    <div>
                      <h4>{note.title}</h4>
                      <hr />
                      <p>{note.body}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
    </div>
  );
}

export default NotesList;