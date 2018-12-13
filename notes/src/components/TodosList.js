import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import TodoSearch from "./TodoSearch";

const TodosList = props => {
  return (
    <div>
      <TodoSearch
        handleChange={props.handleChange}
        filterTodos={props.filterTodos}
        sortTodos={props.sortTodos}
        exportCSV={props.exportCSV}
      />
      <div>
        {props.reduxProps.todos.map((todo, index) => {
          return (
            <Todos
              todo={todo}
              key={index}
              deleteTodos={props.deleteTodos}
              handleChange={props.handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodosList;
