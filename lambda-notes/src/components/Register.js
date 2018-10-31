import React from "react";

// purgatorial code
import { connect } from "react-redux";
import { registerUser } from "../actions/index";
import { withRouter } from "react-router-dom";

// css
import "../CSS/Register.css";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: null
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.registerUser({
      username: this.state.username.trim(),
      email: this.state.email.trim(),
      password: this.state.password.trim()
    });
  }

  render() {
    return (
      <div className="register-form">
        <h1 className="register-header">Register</h1>
        <form type="submit">
          <div className="form-ctrl">
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" onChange={this.handleOnChange} />
          </div>
          <div className="form-ctrl">
            <label htmlFor="email">Email Address: </label>
            <input type="email" name="email" onChange={this.handleOnChange} />
          </div>
          <div className="form-ctrl">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-ctrl">
            {this.props.isRegistering ? (
              <div>Registering</div>
            ) : (
              <button
                onClick={this.handleRegister}
                type="submit"
              >
                Register User Account
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    isRegistering: state.isRegistering
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(Register)
);
