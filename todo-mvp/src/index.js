import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/App";
import CreateTodo from "./components/CreateTodo/CreateTodo";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/create" component={CreateTodo} />
    </div>
  </Router>,
  document.getElementById("root")
);
