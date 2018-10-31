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

  handleSignupForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSignupSubmit = e => {
    e.preventDefault();

    const { firebase, history } = this.props;
    const { email, password } = this.state;

    const createNewUser = ({ email, password }) => {
      firebase
        .createUser({ email, password })
        .catch(err => alert("This user already exists"));
    };

    createNewUser({
      email: this.state.email,
      password: this.state.password
    });
    // .then(history.push("/"))
    // .catch(err => alert("An error occured, please try again"));
  };
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSignupSubmit}>
          <div className="login-icon-text">
            <i className="fas fa-user-plus" />
            <span>Sign Up</span>
          </div>
          <input
            type="email"
            placeholder="Enter an Email"
            onChange={this.handleSignupForm}
            value={this.state.email}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Enter a Password"
            onChange={this.handleSignupForm}
            value={this.state.password}
            name="password"
            required
            minLength="6"
          />
          <input type="submit" value="Sign Up" id="login-submit" />
        </form>
      </div>
    );
  }
}

export default firebaseConnect()(Signup);
