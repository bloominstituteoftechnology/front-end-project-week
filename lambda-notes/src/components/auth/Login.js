import React, { Component } from "react";
import "./auth.css";

import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLoginForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLoginSubmit = e => {
    e.preventDefault();

    const { firebase, history } = this.props;

    const { email, password } = this.state;
    firebase
      .login({
        email,
        password
      })
      .then(history.push("/"))
      .catch(err => alert("Invalid Login Info"));
  };
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleLoginSubmit}>
          <div className="login-icon-text">
            <i className="fas fa-lock" />
            <span>Login</span>
          </div>
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={this.handleLoginForm}
            value={this.state.email}
            name="email"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={this.handleLoginForm}
            value={this.state.password}
            name="password"
          />
          <input type="submit" value="Login" id="login-submit" />
          <Link to="/sign-up">
            <h4>Don't have an account? Sign up here</h4>
          </Link>
        </form>
      </div>
    );
  }
}

// export default firebaseConnect()(Login);
export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Login);
