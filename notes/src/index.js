import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CreateNote from "./components/CreateNote";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <div className="App">
      <div className="leftPanel">
        <h1 className="leftHeader">Lambda Notes</h1>
        <button>
          <NavLink to="/" exact>
            View Your Notes
          </NavLink>
        </button>
        <button>
          <NavLink to="/create" exact>
            + Create New Note
          </NavLink>
        </button>
      </div>
      <Route path="/" exact component={App} />
      <Route path="/create" exact component={CreateNote} />
    </div>
  </Router>,
  document.getElementById("root")
);
