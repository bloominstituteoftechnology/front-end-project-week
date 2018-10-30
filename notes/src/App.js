import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import ListView from "./views/ListView";
import CreateEditNoteView from "./views/CreateEditNoteView";
import SingleNoteView from "./views/SingleNoteView";
import { Auth0Lock } from "auth0-lock";

var lock = new Auth0Lock(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_DOMAIN_URL
);
console.log(process.env);
class App extends Component {
  render() {
    console.log("PROCESS: ", process.env);
    return (
      <div className="App">
        <ul className="navbar">
          <h1>Lambda Notes</h1>
          <li>
            <NavLink exact to="/">
              View Your Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-note">+ Create New Note</NavLink>
          </li>
        </ul>
        <Route exact path="/" component={ListView} />
        <Route path="/create-note" component={CreateEditNoteView} />
        <Route path="/notes/:id" component={SingleNoteView} />

        <div
          onClick={function() {
            lock.show();
          }}
        >
          Log In
        </div>
      </div>
    );
  }
}

export default withRouter(App);
