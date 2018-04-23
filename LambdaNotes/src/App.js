import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// components
import CreateTodoForm from "./components/CreateTodoForm.js";
import Todos from "./components/Todos.js";
import Todo from "./components/Todo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Render Todos here */}
        <Todos />
        {/* Render Routes here */}
        <Route path="/addTodo" component={CreateTodoForm} />
        <Route path="/todo/:id" component={Todo} />
      </div>
    );
  }
}

export default App;
