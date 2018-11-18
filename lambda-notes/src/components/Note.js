import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';
const Note = props => {
  return (
    <NavLink className="notelink" to={`/notes/${props.id}`}>
      <div className="notelist-note">
        <h3 className="heading">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </NavLink>
  );
};



export default Note;

