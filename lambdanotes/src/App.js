import React, { Component } from "react";
import "./App.css";
import ChangeTodo from "./components/ChangeTodo";
import GetOneTodo from "./components/GetOneTodo";
import MakeTodo from "./components/MakeTodo";
import TodosList from "./components/TodosList";
class App extends Component {
  state = {
    todos: [
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
      },
      {
        doTitle: "this is a mock todo",
        doDescription: "This is supposed to describe what I do"
      }
    ],
    isShowing: {
      todos: false,
      create: false,
      patch: false,
      oneTodo: false,
      showAll: false
    },
    searchWord: ""
  };
  target = null;

  componentDidMount() {
    this.viewNotes();
  }
  render() {
    return (
      <div className="container">
        <div className="leftRail">
          <h1 className="leftRailTitle">LambdaNotes</h1>
          <button
            className="waves-effect waves-light btn"
            onClick={() => this.viewNotes()}
          >
            View Notes
          </button>
          <button
            className="waves-effect waves-light btn"
            onClick={() => this.createView()}
          >
            + Create note
          </button>
        </div>
        {this.state.isShowing.todos ? (
          <div className="rightRail">
            <h1 className="header">Your Notes:</h1>
            <form className="search">
              <input
                type="text"
                name="searchWord"
                value={this.state.searchWord}
                onChange={this.searchTodo}
                placeholder="Search for your note"
              />
            </form>
            <TodosList
              todos={this.state.todos}
              searchWord={this.state.searchWord}
              showAll={this.state.isShowing.showAll}
              target={this.handleTarget}
            />
          </div>
        ) : null}
        {this.state.isShowing.create ? (
          <MakeTodo addTodo={this.addTodo} />
        ) : null}
        {this.state.isShowing.oneTodo ? (
          <GetOneTodo
            todos={this.state.todos}
            target={this.target}
            deleteTodo={this.deleteTodo}
            patch={this.patchTodo}
          />
        ) : null}
        {this.state.isShowing.patch ? (
          <ChangeTodo
            todo={this.state.todos[this.target]}
            updateTodo={this.updateTodo}
          />
        ) : null}
      </div>
    );
  }

  searchTodo = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      isShowing: {
        todos: true,
        patch: false,
        create: false,
        oneTodo: false,
        showAll: true
      }
    });
  };

  updateTodo = updatedTodo => {
    let tempHold = this.state.todos;
    tempHold[this.target] = updatedTodo;
    this.setState({
      ...this.state,
      todos: tempHold
    });
  };

  patchTodo = target => {
    this.target = target;
    this.setState({
      ...this.state,
      isShowing: {
        todos: false,
        patch: true,
        create: false,
        onTodo: false,
        showAll: false
      }
    });
  };

  deleteTodo = target => {
    let string = this.state.todos;
    string.splice(target, 1);
    this.target = null;
    this.setState({
      todos: string,
      isShowing: {
        todos: true,
        patch: false,
        create: false,
        oneTodo: false,
        showAll: false
      }
    });
  };

  handleTarget = i => {
    this.target = i;
    this.setState({
      ...this.state,
      isShowing: {
        todos: false,
        patch: false,
        create: false,
        oneTodo: true,
        showAll: false
      }
    });
  };

  addTodo = newTodo => {
    this.target = null;
    this.setState({
      todos: [newTodo, ...this.state.todos],
      isShowing: {
        todos: true,
        patch: false,
        create: false,
        oneTodo: false,
        showAll: false
      }
    });
  };

  createView() {
    this.target = null;
    this.setState({
      ...this.state,
      isShowing: {
        todos: false,
        patch: false,
        create: true,
        oneTodo: false,
        showAll: false
      }
    });
  }

  viewNotes() {
    this.target = null;
    this.setState({
      ...this.state,
      isShowing: {
        todos: true,
        patch: false,
        create: false,
        oneTodo: false,
        showAll: false
      }
    });
  }
}

export default App;
