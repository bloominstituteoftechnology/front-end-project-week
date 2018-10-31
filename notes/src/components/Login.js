import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };
  render() {
    return (
      <>
        <h2>Log in</h2>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button onClick={this.handleSubmit} onSubmit={this.handleSubmit}>
            Log In
          </button>
        </form>
      </>
    );
  }
}

export default Login;
