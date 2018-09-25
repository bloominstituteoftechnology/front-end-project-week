import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import ListView from "./views/ListView";
import CreateNoteView from "./views/CreateNoteView";
import SingleNoteView from "./views/SingleNoteView";

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
        <Route path="/note/get/:id" component={SingleNoteView} />
      </div>
    );
  }
}

export default withRouter(App);
