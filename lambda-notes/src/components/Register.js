import React from "react";

// purgatorial code
import { connect } from "react-redux";
import { registerUser } from "../actions/index";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// css
import "../CSS/Register.css";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: null,
    isRegistering: this.props.isRegistering
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    e.preventDefault();
    this.setState({ isRegistering: this.props.isRegistering });
    setTimeout(() => {
      this.props.registerUser({
        username: this.state.username.trim(),
        email: this.state.email.trim(),
        password: this.state.password.trim()
      });
    }, 300);
  };

  render() {
    return (
      <div className="register-form">
        <h1 className="register-header">Register</h1>
        <form type="submit">
          <div className="form-ctrl">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              required
              name="username"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-ctrl">
            <label htmlFor="email">Email Address: </label>
            <input
              type="email"
              required
              name="email"
              onChange={this.handleOnChange}
            />
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
            {this.state.isRegistering ? (
              <div>Registering</div>
            ) : (
              <button onClick={this.handleRegister} type="submit">
                Register User Account
              </button>
            )}
          </div>
        </form>
        <Link to="/login" className="my-3" href="" onClick={this.handleIsMember}>
          Already a Member?
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    token: state.token,
    isRegistering: state.isRegistering,
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(Register)
);
