import React, { Component } from "react";
import "./SingleTodoView.css";
import { Route, Link } from "react-router-dom";

const SingleTodoView = props => {
  return (
    <div className="view-container">
      <div className="view-card">
        <div className="title">
          {props.reduxProps.todos.map(todo =>
            todo._id === props.match.params.id ? <div>{todo.title}</div> : null
          )}
        </div>
        <div className="cross">
          <Link to={"/"}>
            <i className="fas fa-times" />
          </Link>
        </div>
        <div className="view-subtitle">
          in list <u> Todo List </u>
        </div>
        <div className="labels">
          LABELS
          <div className="label-buttons">
            <button className="label-color" />
            <button className="button-plus">+</button>
          </div>
        </div>
        <div className="body">
          <b>Description</b>
          <div className="text-body">
            {props.reduxProps.todos.map(todo =>
              todo._id === props.match.params.id ? (
                <div>{todo.textBody}</div>
              ) : null
            )}
          </div>
          <b>Add comment</b>
        </div>
        <textarea placeholder="Write a comment..." />
        {/* <div>
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
            <input
              type="submit"
              value="Add Todo"
              onClick={props.handleSubmit}
            />
          </form>
          <input
            type="submit"
            value="Update Todo"
            onClick={props.updateTodos}
          />
        </div> */}
      </div>
    </div>
  );
};

export default SingleTodoView;
