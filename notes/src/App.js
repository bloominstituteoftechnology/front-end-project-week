import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import ListView from "./views/ListView";
import CreateEditNoteView from "./views/CreateEditNoteView";
import SingleNoteView from "./views/SingleNoteView";
import { Auth0Lock } from "auth0-lock";
import auth0 from "auth0-js";

var lock = new Auth0Lock(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_DOMAIN_URL
);

var webAuth = new auth0.WebAuth({
  domain: process.env.REACT_APP_DOMAIN_URL,
  clientID: process.env.REACT_APP_CLIENT_ID,
  redirectUri: "http://localhost:3000/"
});

webAuth.parseHash((err, authResult) => {
  if (authResult) {
    // Save the tokens from the authResult in local storage or a cookie
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("expires_at", expiresAt);
  } else if (err) {
    // Handle errors
    console.log(err);
  }
});

console.log(process.env);
class App extends Component {
  render() {
    if (this.isAuthenticated()) {
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
          <div onClick={this.logout}>LOG OUT</div>
        </div>
      );
    } else {
      return (
        <div>
          <h1> Please Log In to see your notes</h1>
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

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    window.location.reload();
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}

export default withRouter(App);
