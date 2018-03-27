import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./ListTodo.css";

class ListTodo extends Component {
  render(props) {
    return (
      <div><h2>Your Notes: </h2>
        <div className="ListTodo">
          {this.props.todos.map(todo => (
                <div className="card-body" key={todo.id}>
                  <div className="card-title">
                    <Link className = "card-link" to={`/view/${todo.id}`}>
                    {todo.id} - {todo.title}
                    </Link>
                  </div>
                    <div className="card-text">{todo.msg}</div>
                </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListTodo;
