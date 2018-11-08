import React, { Component } from "react";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props);
    return (
      <div className="login-container">
        <form className="login" onSubmit={e => this.props.loginHandler(e, this.state.username)}>
          <h1>Lambda Forms</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.changeHandler}
            value={this.props.value}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.changeHandler}
            value={this.props.value}
            className="login-input"
          />
          <button className="form-button">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
