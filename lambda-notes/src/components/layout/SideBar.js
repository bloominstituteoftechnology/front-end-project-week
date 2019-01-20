import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class SideBar extends Component {
  state = {
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      localStorage.setItem("userID", auth.uid);
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }
  handleLogoutClick = () => {
    const { firebase } = this.props;
    firebase.logout();
  };
  render() {
    const { isAuthenticated } = this.state;
    return (
      <div className="side-bar">
        <Link to="/">
          <h1>
            Lambda <br />
            Notes
          </h1>
        </Link>
        {isAuthenticated ? (
          <Link to="/">
            <div className="view-note">View Your Notes</div>
          </Link>
        ) : null}
        {isAuthenticated ? (
          <Link to="/add">
            <div className="create-note">
              <i className="fas fa-plus" />
              Create New Note
            </div>
          </Link>
        ) : null}

        {isAuthenticated ? (
          <React.Fragment>
            <h5> logged in as {this.props.auth.email}</h5>
            <button onClick={this.handleLogoutClick}>Logout</button>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(SideBar);
