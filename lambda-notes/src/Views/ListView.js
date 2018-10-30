import React from 'react';
import { Link } from 'react-router-dom';
import { NoteCard } from '../components';

export const ListView = props => (
  <div className="ListView">
    <h2 style={{
      'text-align': 'left',
      'margin-left': '2%'
    }}>Your Notes:</h2>
    <div className="NotesWrapper" style={{
      display: 'flex',
      'flex-wrap': 'wrap',
      
    }}>
      {props.notes.map( note => (
        <Link to={`/note/${note._id}`}>
          <NoteCard key={note._id} {...note} />
        </Link>
      ))}
    </div>
  </div>
)