import React from "react";

// Auxillary Packages
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// CSS
import "../CSS/Register.css";

class Login extends React.Component {
  state = {
    username: "",
    email: "",
    error: null,
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="register-form">
        <h1 className="register-header">Login</h1>
        <form type="submit">
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
        <Link to="/" className="my-3" href="" onClick={this.handleIsMember}>
          Need to Register?
        </Link>
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
    mapStateToProps
  )(Login)
);
