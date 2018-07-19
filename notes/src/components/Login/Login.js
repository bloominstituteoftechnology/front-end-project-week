import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  addUsername = event => {
    this.setState({ username: event.target.value });
  };
  addPassword = event => {
    this.setState({ password: event.target.value });
  };
  LoginButton = () => {
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password);
    window.location.reload();
  };

  render() {
    return (
      <form className="login-page">
        <div className="login-card">
          <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <div className="google-button">
              SIGN UP WITH GOOGLE
            </div>
          </a>
          <p className="login-text">OR USE EMAIL</p>
          <input
            type="text"
            onChange={this.addUsername}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={this.addPassword}
            placeholder="Password"
          />
          <p className="terms-conditions">
            By clicking on Sign Up, you are agreeing to our{" "}
            <a href="#">Terms & Conditions</a>
          </p>
          <button
            className="login-button"
            onClick={this.LoginButton}
          >
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
