import React, { Component } from "react";
import { Card, CardTitle, CardText, CardBody} from "reactstrap";

import "./TodoList.css";

class TodoList extends Component {
  render(props) {
    return (
      <div className="TodoList">
        {this.props.todos.map(todo => (
            <Card className="Card" key={todo.id} body>
                <CardTitle className="CardTitle">{todo.id} - {todo.title}</CardTitle>
                <CardText className="CardText">{todo.msg}</CardText>
            </Card>
        ))}
      </div>
    );
  }
}

export default TodoList;
