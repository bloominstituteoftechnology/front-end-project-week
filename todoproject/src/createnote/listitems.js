import React from 'react';


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


  //add card structure to return statement above *****