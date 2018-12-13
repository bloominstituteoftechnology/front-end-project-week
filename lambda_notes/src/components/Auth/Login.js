import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "./form.css";

const initialUser = {
  username: "",
  password: ""
};

class Login extends Component {
  state = {
    user: { ...initialUser },
    message: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  handleSubmit = e => {
    e.preventDefault();
    const url = "https://api-lambda-notes.herokuapp.com/api/auth/login";

    axios
      .post(url, this.state.user)
      .then(res => {
        console.log("RES", res);
        localStorage.setItem("jwtToken", res.data.token);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("ERR", err);
        this.setState({
          message: "Authentication failed",
          user: { ...initialUser }
        });
      });
  };

  render() {
    return (
      <div className="auth-form-group">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
              required
            />
          </div>
          <div>
            <input
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              required
            />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        {this.state.message ? (
          <h4 style={{ textAlign: "center" }}>{this.state.message}</h4>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default withRouter(Login);
