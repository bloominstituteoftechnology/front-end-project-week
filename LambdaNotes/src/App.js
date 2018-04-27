import React, { Component } from "react";
import { Route } from "react-router-dom";
// styles
import "./styles/App.css";
import "./bootstrap/css/bootstrap.css";
import "./styles/animation.css";
// components
import CreateTodoForm from "./components/CreateTodoForm";
import ControlPanel from "./components/ControlPanel";
import Todo from "./components/Todo";
import EditTodoForm from "./components/EditTodoForm";
import VisibilityTodos from "./components/VisibilityTodos";

class App extends Component {
  render() {
    return (
      <div className="App fade">
        <div className="row">
          <div className="col-md-4 ControlPanel">
            <ControlPanel />
          </div>
          <div className="col-md-8">
            <Route exact path="/" component={VisibilityTodos} />
          </div>
          <div className="col-md-8 CreateTodoForm">
            <Route exact path="/addTodo" component={CreateTodoForm} />
          </div>
          <div className="col-md-8">
            <Route exact path="/todo/:id" component={Todo} />
          </div>
          <div className="col-md-8 CreateTodoForm">
            <Route exact path="/editTodo" component={EditTodoForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
