import React from 'react';

export const TodoCard = props => {
  return (
    <div className="TodoCard">
      <div>{props.note.title}</div>
      <div>{props.note.body}</div>
    </div>
  )
}