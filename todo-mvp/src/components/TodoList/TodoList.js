import React, { Component } from "react";
import { Card, CardTitle, CardText, CardBody} from "reactstrap";

import "./TodoList.css";

class TodoList extends Component {
  render(props) {
    return (
      <div className="TodoList">
        {this.props.todos.map(todo => (
            <div className="card-body" key={todo.id}>
                <div className="card-title">{todo.id} - {todo.title}</div>
                <div className="card-text">{todo.msg}</div>
            </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
