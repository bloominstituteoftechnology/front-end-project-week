import React from 'react';
import { NavLink } from 'react-router-dom';

import Note from './Note';

const Notes = props => {
  const { notes } = props;
  return (
    <div className="notes">
      {notes.map(note => (
        <NavLink to={`/edit/${note._id}`}>
          <Note note={note} />
        </NavLink>
      ))}
    </div>
  );
};

export default Notes;
