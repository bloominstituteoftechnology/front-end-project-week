import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import ListView from "./views/ListView";
import CreateEditNoteView from "./views/CreateEditNoteView";
import SingleNoteView from "./views/SingleNoteView";
import { Auth0Lock } from "auth0-lock";
import auth0 from "auth0-js";
import SearchBarView from "./views/SearchBarView";

var options = {
  socialButtonStyle: "small",
  languageDictionary: {
    emailInputPlaceholder: "something@youremail.com",
    title: "Lambda Notes"
  },
  theme: {
    labeledSubmitButton: false,
    primaryColor: "#81125b",
    logo: "http://i63.tinypic.com/2djyk3k.png"
  }
};

var lock = new Auth0Lock(
  process.env.REACT_APP_CLIENT_ID,
  process.env.REACT_APP_DOMAIN_URL,
  options
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
            <li className="create-note">
              <NavLink to="/create-note">+ Create New Note</NavLink>
            </li>
            <div className="log-out" onClick={this.logout}>
              Log Out
            </div>
          </ul>
          <Route exact path="/" component={ListView} />
          <Route path="/create-note" component={CreateEditNoteView} />
          <Route path="/notes/:id" component={SingleNoteView} />
        </div>
      );
    } else {
      return (
        <div className="log-in-container">
          <div className="log-in">
            <h1> Welcome to Lambda Notes!</h1>
            <div
              className="log-in-button"
              onClick={function() {
                lock.show();
              }}
            >
              Log In or Sign Up
            </div>
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
