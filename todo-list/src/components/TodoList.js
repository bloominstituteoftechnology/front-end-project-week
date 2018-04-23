import React from 'react';
import { TodoCard } from './TodoCard';

export const TodoList = props => {
  return (
    <div className="TodoList">
      {props.notes.map(note => 
        <TodoCard note={note}/>
      )}
    </div>
  )
}