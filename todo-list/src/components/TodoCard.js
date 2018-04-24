import React from 'react';
import '../styles/TodoCard.css';

export const TodoCard = props => {
  return (
    <div className="TodoCard">
      <p className="TodoCard_title">
        {props.note.title}
      </p>
      <p className="TodoCard_body">
        {props.note.body}
      </p>
    </div>
  )
}