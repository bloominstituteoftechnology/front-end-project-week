import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/TodoCard.css';

export const TodoCard = props => {
  return (
    <div className="TodoCard">
      <Link to={`/view/${props.note.id}`} className="TodoCard_link">
      <p className="TodoCard_title">
        {props.note.title}
      </p>
      <p className="TodoCard_body">
        {props.note.body}
      </p>
      </Link>
    </div>
  )
}