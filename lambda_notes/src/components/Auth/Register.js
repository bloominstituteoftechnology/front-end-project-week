import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const initialUser = {
  username: "",
  password: ""
};

class Register extends Component {
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
    const url = "https://api-lambda-notes.herokuapp.com/api/auth/register";

    axios
      .post(url, this.state.user)
      .then(res => {
        console.log("RES", res);
        localStorage.setItem("jwtToken", res.data.token);
        this.props.history.push("/login");
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
            />
          </div>
          <div>
            <button>Register</button>
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

export default withRouter(Register);
