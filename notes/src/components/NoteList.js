import React from 'react';
import Note from './Note';
import { Route, Link, NavLink } from 'react-router-dom';

function NoteList(props){
  function routeToNote(ev, note) {
    ev.preventDefault();
    console.log(note);
    props.history.push('/note/:id');
    props.getNoteById(note._id)
  }
    return(
      <div className='main-page'>
        <h3>Your Notes:{' '}</h3>
        <ul>
        {props.notes.map(note => {
          return(
            <div
              onClick={ev => routeToNote(ev, note)}
              className='each-note'
              key={note._id}>
            <h4>{note.title}</h4>
            <p>{note.textBody}</p>
            </div>
          )
        })}
        </ul>
      </div>
    )
}



// <Note
//   key={note.id}
//   title={note.title}
//   textBody={note.textBody}
// />
//
// Note.defaultProps = {
//  notes: [],
// };

export default NoteList;
