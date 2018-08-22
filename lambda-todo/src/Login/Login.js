import React, { Component } from "react";
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleLoginInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitInput = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };
  render() {
    return (
      <div className="login-page">
      <h1 className="login-title">Lambda Notes</h1>
        <div className="login-box">
          <form>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={this.handleLoginInput}
              value={this.state.username}
              className="login-input"
            />
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={this.handleLoginInput}
              value={this.state.password}
              className="login-input"
            />
            <button className="login-btn" onClick={this.handleSubmitInput}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Login; 
