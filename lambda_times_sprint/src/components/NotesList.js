import React from 'react';

import { Link } from 'react-router-dom';
// import Note from './Note';

function NotesList(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>No notes found. Fetching data...</h1>
    }
    return (
        <div className="notes-list-wrapper">
          <h2>Your Notes:</h2>
          <div className="notes-card-wrapper">
            {props.notesList.map(note => (
            // <div className="note-card" key={tag.id}>
                
                /* <h3 */
                // onClick={() => props.history.push(`/tags/${note._id}`)}
                <Link to={`/tags/${note._id}`} >
                <NoteDetails note={note} />
              </Link>
                
                /* {tag.title}
                </h3>
                <p>({tag.textBody})</p>
            </div> */
            ))}
            </div>
        </div>
    );
}

function NoteDetails({ note }) {
  const { title, textBody } = note;
  return (
    <div className="note-card">

      <h2 className="title">{title}</h2>
      <div className="text-body">{textBody}</div>
    
      </div>
  );
  }

export default NotesList;