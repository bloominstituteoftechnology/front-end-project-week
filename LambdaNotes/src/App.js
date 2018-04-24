import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap/css/bootstrap.css";
// components
import CreateTodoForm from "./components/CreateTodoForm.js";
import ControlPanel from "./components/ControlPanel";
import Todos from "./components/Todos.js";
import Todo from "./components/Todo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          {/* Render ControlPanel here */}
          <div className="col-md-4">
            <ControlPanel />
          </div>
          {/* Render Todos here */}
          <div className="col-md-8">
            <Route exact path="/" component={Todos} />
          </div>
          {/* Render CreateTodoForm only at /addTodo */}
          <div className="col-md-8">
            <Route exact path="/addTodo" component={CreateTodoForm} />
          </div>
          {/* Render Todo only at /todo/:id */}
          <div className="col-md-8">
            <Route exact path="/todo/:id" component={Todo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
