import React, { Component } from "react";

class ChangeTodo extends Component {
  state = {
    doTitle: this.props.todo.doTitle,
    doDescription: this.props.todo.doDescription
  };

  render() {
    return (
      <form onSubmit={this.handleUpdate} className="patchTodo">
        <h1 className="header">Change Note:</h1>
        <input
          type="text"
          name="doTitle"
          className="todosTitle"
          value={this.state.doTitle}
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="doDescription"
          className="todosDescription"
          value={this.state.doDescription}
          onChange={this.handleInput}
        />
        <button className="saveTodo" type="onSubmit">
          Update Todo
        </button>
      </form>
    );
  }

  handleUpdate = e => {
    e.preventDefault();
    if (this.state.doTitle === "" || this.state.doDescription === "") return;
    this.props.updateTodo(this.state);
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default ChangeTodo;
