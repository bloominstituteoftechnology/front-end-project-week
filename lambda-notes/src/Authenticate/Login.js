import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:""
    }
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user)
    window.location.reload();
  }

  render() {
    return (
      <div>
        <h3>Login Page</h3>
        <form>
          <label>Username:</label>
          <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          />
          <label>Password:</label>
          <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          />
          <button onClick={this.handleLoginSubmit}>Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login;