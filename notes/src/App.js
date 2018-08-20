import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import ListView from "./components/ListView";
import CreateNote from "./components/CreateNote";
import Home from "./components/Home";
import { Link, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="side-bar">
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavButton" to="/notes">
              View Notes
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="activeNavButton" to="/create">
              Create Notes
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/notes" component={ListView} />
        <Route exact path="/create" component={CreateNote} />
      </div>
    );
  }
}

export default App;
