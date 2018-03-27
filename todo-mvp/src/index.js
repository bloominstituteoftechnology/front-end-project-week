import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import ViewTodo from "./components/ViewTodo/ViewTodo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/create" component={ CreateTodo } />
      <Route path="/view/:id" component={ ViewTodo } />
    </div>
  </Router>,
  document.getElementById("root")
);
