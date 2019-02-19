import React from "react";
import { connect } from "react-redux";

import { loginReq } from "../actions/index";
import { SignupForm } from "../css/styles";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      unauth: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.loginReq({
      username: this.state.username,
      password: this.state.password
    });
  };

  sendToSignUp = e => {
    e.preventDefault();
    this.props.history.push(`/signup`);
  };

  render() {
    return (
      <SignupForm>
        <h3>Please Sign Into Notable</h3>
        {this.state.unauth ? (
          <div className="error-message"> Incorrect username or password </div>
        ) : null}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="username"
            id="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.changeHandler}
          />
          <button type="submit">Sign In</button>
        </form>
        <form>
          <button onClick={this.sendToSignUp}>Sign up for a new account</button>
        </form>
      </SignupForm>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { loginReq }
)(SignIn);
