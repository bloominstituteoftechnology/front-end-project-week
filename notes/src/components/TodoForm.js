import React, { Component } from "react";
import "./TodoForm.css";
import { Link } from "react-router-dom";

const TodoForm = props => {
  return (
    <div className="todo-form-container">
      <div className="form-card">
        <Link to={"/"}>
          <h2>Add todo</h2>
        </Link>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Add title.."
            onChange={props.handleChange}
          />
          <textarea
            type="text"
            name="textBody"
            placeholder="Add text.."
            onChange={props.handleChange}
          />
          <input type="submit" value="Add Todo" onClick={props.handleSubmit} />
        </form>
        <input type="submit" value="Update Todo" onClick={props.updateTodos} />
      </div>
    </div>
  );
};

export default TodoForm;
