import React from 'react';
import { NavLink } from 'react-router-dom'
const Note = props => {
  return (
    <NavLink className="link" to={`/notes/${props.id}`}>
      <div className="note">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </NavLink>
  );
};



export default Note;

