import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';
import { NoteCard } from '../components';

export const ListView = props => {

  return (
    <div className="ListView">
      <h2 >Your Notes:</h2>
      <div className="NotesWrapper" >
        {props.notes.map((note, i) => (
          <Link
            key={note._id}
            to={ `/note/${note._id}` }>
            <NoteCard {...note} />
          </Link>
        ))}
      </div>
    </div>
  )
}