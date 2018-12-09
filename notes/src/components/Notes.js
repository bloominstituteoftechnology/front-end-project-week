import React from 'react';
import {Link} from 'react-router-dom';

const Notes = props => {
  return (
    <div>
      <h2 style={{display: 'inline'}}>notes component</h2>
      {props.notes.map(note => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <h2>{note.title}</h2>
          <h3>{note.textBody}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Notes;
