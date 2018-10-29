import React from 'react';

import { Link } from 'react-router-dom';

function NotesList(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>No notes found. Fetching data...</h1>
    }
    return (
        <div className="note-section">
        <div className="notes-list-wrapper">
          <h2>Your Notes:</h2>
          <div className="notes-card-wrapper">
            {props.notesList.map(note => (
            <div className="note-card">
                
               
                <Link to={`/notes/${note.id}`} >
                <NoteDetails note={note} />
              </Link>
                
             
            </div>
            ))}
            </div>
        </div>
        </div>
    );
}

function NoteDetails({ note }) {
  const { title, textBody } = note;
  return (
    <div className="note-card">

      <h2 className="title">{title}</h2>
      <div className="text-body">{textBody.length > 84 ?
                                          textBody.slice(0, 84) + '...' :
                                          textBody}</div>
    
      </div>
  );
  }

export default NotesList;