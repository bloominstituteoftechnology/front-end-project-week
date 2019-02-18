import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loginReq } from "../actions/index";

const SigninForm = styled.div`
   {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 1.4rem;
    padding: 70px 25px 35px;
    margin: auto;
  }

  .unauthorized {
    color: red;
    margin: auto;
    font-size: 1.1 rem;
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
  }

  render() {
    return (
      <SigninForm>
        <h3>Please Sign Into Notable</h3>
        {this.state.unauth ? (<div className="unauthorized"> Incorrect username or password </div>): null}
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
          <button onClick={this.sendToSignUp} >Sign up for a new account</button>
        </form>
      </SigninForm>
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
