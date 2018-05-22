import React from 'react';
import App from './App';

const ListItems = props => {
    return (
      <ul>
        {props.todos.map(todo => {
          return <li key={todo.id}>{todo.title}{todo.content}</li>;
        })}
      </ul>
    );
  };
  
  export default ListItems;