import React, { Component } from "react";
import "./auth.css";

// import { compose } from "redux";
// import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class Signup extends Component {
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
      .catch(err => alert("An error occured, please try again"));
  };
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleLoginSubmit}>
          <div className="login-icon-text">
            <i className="fas fa-user-plus" />
            <span>Sign Up</span>
          </div>
          <input
            type="email"
            placeholder="Enter an Email"
            onChange={this.handleLoginForm}
            value={this.state.email}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Enter a Password"
            onChange={this.handleLoginForm}
            value={this.state.password}
            name="password"
            required
          />
          <input type="submit" value="Sign Up" id="login-submit" />
        </form>
      </div>
    );
  }
}

export default firebaseConnect()(Signup);
