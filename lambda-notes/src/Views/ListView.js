import React from 'react';
import { Link } from 'react-router-dom';
import { NoteCard } from '../components';

export const ListView = props => {

  return (
    <div className="ListView">
      <h2 style={{
        'textAlign': 'left',
        'marginLeft': '2%'
      }}>Your Notes:</h2>
      <div className="NotesWrapper" style={{
        display: 'flex',
        'flexWrap': 'wrap',
      }}>
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