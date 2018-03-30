import React from 'react';
import { Link } from 'react-router-dom';

export const Note = ({ id, title, text, completed }) => (
  <Link className="Note__link" to={`/note/${id}`}>
    <div className="Note">
      <h4>{title}</h4>
      <p className="Note__text">{text.length > 111 ? `${text.slice(0, 108)}...` : text}</p>
    </div>
  </Link>
);
