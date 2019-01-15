// React import
import React from 'react';
// CSS imports
import './Note.css';
// React router imports
import { Link } from 'react-router-dom';

const Note = props => {
  const { title, textBody, _id } = props.note;
  return (
    <Link to={`/note/get/${_id}`} className="cardLink">
      <div className="note">
        <h3 className="noteTitle">{title}</h3>
        <p className="noteBody">{textBody}</p>
      </div>
    </Link>
  );
};

export default Note;
