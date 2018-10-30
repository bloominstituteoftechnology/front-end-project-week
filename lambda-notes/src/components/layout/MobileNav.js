import React, { Component } from "react";
import { Link } from "react-router-dom";

import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

import "../auth/auth.css";

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  handleLogoutClick = () => {
    const { firebase } = this.props;
    firebase.logout().then((window.location = "/login"));
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <nav className="nav-bar">
        {isAuthenticated ? (
          <Link to="/">
            <h5>All notes</h5>
          </Link>
        ) : null}

        {isAuthenticated ? (
          <Link to="/add">
            <h5>Create New Note</h5>
          </Link>
        ) : null}

        {isAuthenticated ? (
          <button onClick={this.handleLogoutClick}>Logout</button>
        ) : null}
      </nav>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(MobileNav);
