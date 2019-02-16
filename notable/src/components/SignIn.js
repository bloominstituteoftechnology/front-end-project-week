import React from "react";
// import { connect } from "react-redux";
import styled from "styled-components";

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
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(e.target.username.value);
  };

  render() {
    return (
      <SigninForm>
        <h3>Please Sign Into Notable</h3>
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
          <button>Sign up for a new account</button>
        </form>
      </SigninForm>
    );
  }
}

export default SignIn;
