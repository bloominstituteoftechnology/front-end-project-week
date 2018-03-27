import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { createNote } from '../Actions';
// import Note from './Note';

function NotesList(props) {

  return (
    <div>
      <ul className='notesList'>
        {props.notes.map((note, idx) => {
          return (
            <li className='note' key={note.id}>
              <div className='noteTitle'><h3>{note.title}</h3></div>
              <div className='noteContent'><p>{note.content}</p></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NotesList;