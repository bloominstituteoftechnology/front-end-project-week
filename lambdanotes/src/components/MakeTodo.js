import React, { Component } from "react";

class MakeTodo extends Component {
  state = {
    doTitle: "",
    doDescription: ""
  };

  handleInput = e => {
    e.preventDefault();
    return this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.doTitle === "" || this.state.doDescription === "") return;
    this.props.addTodo(this.state);
    this.setState({
      doTitle: "",
      doDescription: ""
    });
  };

  render() {
    return (
      <form className="editTodo">
        <h1 className="header">Create New Note:</h1>
        <input
          className="todoTitle"
          type="text"
          name="doTitle"
          placeholder="Todo Title"
          value={this.doTitle}
          onChange={this.handleInput}
        />
        <input
          className="todoContent"
          type="text"
          name="doDescription"
          placeholder="Todo Content"
          value={this.doDescription}
          onChange={this.handleInput}
        />
        <button className="saveTodo" onClick={this.handleSubmit}>
          Save
        </button>
      </form>
    );
  }
}

export default MakeTodo;
