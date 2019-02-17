import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { register } from "../actions/index";

const SignupForm = styled.div`
   {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1.4rem;
    padding: 70px 25px 35px;
    margin: auto;
  }

  .error-message {
      color: red;
      margin: auto;
      font-size: 1.1rem;
      padding-bottom: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    margin: auto;
  }

  input {
    margin-bottom: 20px;
    width: 80%;
    height: 43px;
    padding: 10px;
    font-size: 1.2rem;
  }

  button {
    width: 90%;
    margin: 20px 0px;
    height: 35px
    font-size: 1.2rem;
    background-color: darkcyan;
    color: white;
  }
`;

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      passwordOne: "",
      passwordTwo: "",
      error: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.passwordOne !== this.state.passwordTwo) {
      this.setState({ error: "Passwords do not match", passwordOne: '', passwordTwo: '' });
    } else {
      this.props.register({
        username: this.state.username,
        password: this.state.passwordOne
      });
    }
  };

  render() {
    return (
      <SignupForm>
        <h3>Please Sign Into Notable</h3>
        <div className="error-message">{this.state.error}</div>
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
            name="passwordOne"
            id="passwordOne"
            value={this.state.passwordOne}
            placeholder="password"
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            value={this.state.passwordTwo}
            placeholder="retype your password"
            onChange={this.changeHandler}
          />
          <button type="submit">Sign Up</button>
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
  { register }
)(SignIn);
