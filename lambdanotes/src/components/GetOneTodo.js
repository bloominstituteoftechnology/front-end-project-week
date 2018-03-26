import React from "react";

const getOneTodo = props => {
  const todos = props.todos;
  const target = props.target;
  const deleteTodo = props.deleteTodo;
  const patch = props.patch;

  return (
    <div className="oneTodo">
      <div className="buttonTodo">
        <button className="selectTodo" onClick={() => patch(target)}>
          Edit
        </button>
        <button className="selectTodo" onClick={() => deleteTodo(target)}>
          Delete
        </button>
      </div>
      <h1 className="todoTitle">{todos[target].doTitle}</h1>
      <p className="todoDescription">{todos[target].doDescription}</p>
    </div>
  );
};

export default getOneTodo;
