import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import ListView from "./views/ListView";
import CreateNoteView from "./views/CreateNoteView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/">
              View Your Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-note">Create New Note</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={ListView} />
        <Route path="/create-note" component={CreateNoteView} />
      </div>
    );
  }
}

export default withRouter(App);
