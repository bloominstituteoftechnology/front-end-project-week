import React from 'react';
import { NavLink } from 'react-router-dom';

const Note = props => {
  const { note } = props;
  // const title =
  //   note.title.length >= 10 ? `${note.title.substring(0, 11)}...` : note.title;
  const text =
    note.textBody.length >= 116
      ? `${note.textBody.substring(0, 116)}...`
      : note.textBody;
  return (
    <div className="note">
      <NavLink to={`/view/${note.id}`}>
        <h3>{note.title}</h3>
      </NavLink>
      <p>{text}</p>
    </div>
  );
};

export default Note;
