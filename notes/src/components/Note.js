import React from 'react';
import { NavLink } from 'react-router-dom';

const Note = props => {
  const { note } = props;
  return (
    <div className="note">
      <NavLink to={`/view/${note._id}`}>
        <h3>{note.title}</h3>
      </NavLink>
      <p>{note.textBody}</p>
    </div>
  );
};

export default Note;
