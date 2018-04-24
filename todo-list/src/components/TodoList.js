import React from 'react';

import '../styles/TodoList.css';
import { TodoCard } from './TodoCard';

export const TodoList = props => {
  return (
    <div className="TodoList">
      <h4>Your Notes:</h4>
      {props.notes.map(note => (
        <TodoCard key={note.id} note={note} />
      ))}
    </div>
  )
}