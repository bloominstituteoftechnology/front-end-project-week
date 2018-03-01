import React, { Component } from "react";
import "./App.css";

let todos = [
  {
    doTitle: "this is a mock todo",
    doDescription: "This is supposed to describe what I do"
  },
  {
    doTitle: "this is a mock todo",
    doDescription: "This is supposed to describe what I do"
  },
  {
    doTitle: "this is a mock todo",
    doDescription: "This is supposed to describe what I do"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.addTodo = this.addTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter(function(e, i) {
        return i !== index;
      })
    });
  }

  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <h1 className="navbar-brand">
            Amount of todos:{" "}
            <span className="badge badge-pill badge-secondary">
              {this.state.todos.length}
            </span>
          </h1>
        </nav>

        <div className="row mt-5">
          <hr />
          <InputTodo onAddTodo={this.addTodo} />
          <hr />
        </div>

        <div className="row mt-5">
          <div className="col">
            <ul className="list-group">
              {this.state.todos.map((todo, index) => (
                <li className="list-group-item" key={index}>
                  <h4 className="list-group-item-heading">{todo.doTitle}</h4>
                  <p className="text-justify">{todo.doDescription}</p>
                  <button
                    className="btn btn-danger btn-sm float-right"
                    onClick={this.removeTodo.bind(this, index)}
                  >
                    <span>
                      <i className="fa fa-trash-o" aria-hidden="true" />
                    </span>&nbsp;&nbsp; Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doTitle: "",
      doDescription: ""
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  inputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      doTitle: "",
      doDescription: ""
    });
  }

  render() {
    return (
      <div className="col">
        <br />
        <br />
        <br />
        <h4>Add New Todo</h4>
        <br />
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <input
              name="doTitle"
              type="text"
              className="form-control"
              id="inputTodoTitle"
              value={this.state.doTitle}
              onChange={this.inputChange}
              aria-describedby="Todo Title"
              placeholder="Enter Title"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="inputTodoDescription"
              className="control-label text-muted"
            >
              <small>Description</small>
            </label>
            <textarea
              name="todoDescription"
              type="text"
              className="form-control"
              id="inputTodoDescription"
              value={this.state.doDescription}
              onChange={this.inputChange}
              aria-describedby="Todo Description"
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary float-right">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
