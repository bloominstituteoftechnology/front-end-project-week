import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  handleSubmit = e => {
    const { username, password } = this.state;
    e.preventDefault();
    axios
      .post("https://adamsnotes.herokuapp.com/api/login", { username, password })
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.setState({ message: "Login successful" });
      })
      .then(this.props.loginHandler(e))
      .then(() => this.props.history.push("/"))
      .catch(err => {
        console.log("login error", err);
        this.setState({ message: "Login failed" });
      });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    return (
      <div className="login-container">
        <form className="login" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.changeHandler}
            value={this.state.username}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.changeHandler}
            value={this.state.password}
            className="login-input"
          />
          <button className="form-button">Login</button>
          <Link className="rr-link " to="/register">
            <p>register</p>
          </Link>
          <p>{this.state.message}</p>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginPage);
