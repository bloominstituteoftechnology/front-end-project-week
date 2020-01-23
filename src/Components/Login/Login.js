import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  userInput = event => {
    this.setState({
      username: event.target.value
    });
  };

  passwordInput = event => {
    this.setState({
      password: event.target.value
    });
  };

  loginHandler = event => {
    if (`${this.state.username}` !== "" && `${this.state.password}` !== "") {
      localStorage.setItem("username", `${(this.state.username)}`);
      localStorage.setItem("password", `${this.state.password}`);
      window.location.reload();
    } else {
      alert("Missing username or password");
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <input onChange={this.userInput} placeholder="Username..." />
        <input onChange={this.passwordInput} placeholder="Password..." />
        <button className="login-button" onClick={this.loginHandler}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
