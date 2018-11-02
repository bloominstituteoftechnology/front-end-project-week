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
      isAuthenticated: false,
      mobileMenuToggle: false
    };
  }

  // gets auth object from firebase
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
    firebase.logout();
  };

  mobileMenuToggle = () => {
    this.setState({
      mobileMenuToggle: !this.state.mobileMenuToggle
    });
  };
  render() {
    const { isAuthenticated } = this.state;
    return (
      <React.Fragment>
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

          {isAuthenticated ? (
            <i className="fas fa-bars" onClick={this.mobileMenuToggle} />
          ) : null}
        </nav>
        {this.state.mobileMenuToggle ? (
          <div className="mobile-menu-toggle">
            <i class="fas fa-times" onClick={this.mobileMenuToggle} />
            <h5
              onClick={() => (
                this.mobileMenuToggle(), this.props.history.push("/")
              )}
            >
              All Notes
            </h5>
            <h5
              onClick={() => (
                this.mobileMenuToggle(), this.props.history.push("/add")
              )}
            >
              <i className="fas fa-plus" />
              Add Note
            </h5>

            <button
              onClick={() => (
                this.mobileMenuToggle(), this.handleLogoutClick()
              )}
            >
              Logout
            </button>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

// connecting to firebase auth
export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(MobileNav);
