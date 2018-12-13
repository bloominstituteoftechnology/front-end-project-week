import React, { Component } from "react";
import "./Todos.css";
import { Route, Link } from "react-router-dom";

const Todos = props => {
  return (
    <div className="todos-wrapper">
      <Link to={`/todo/${props.todo._id}`}>
        <div className="todos-card">
          <div className="todos-title">{props.todo.title}</div>
          <div className="todos-textbody">{props.todo.textBody}</div>
          <div className="card-buttons">
            <input
              className="id-input"
              type="text"
              name="id"
              placeholder="Add ID.."
              onChange={props.handleChange}
            />
            <input
              className="delete-button"
              type="submit"
              value="Delete Todo"
              onClick={props.deleteTodos}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Todos;
