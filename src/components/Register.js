import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const localAPI = "http://localhost:4000";

const deployedAPI = "https://adamsnotes.herokuapp.com";

const initialUser = {
  username: "",
  password: ""
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: { ...initialUser },
      message: ""
    };
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .post(`${localAPI}/api/register`, this.state.user)
      .then(res => {
        console.log(res.status);
        if (res.status === 201) {
          this.setState({
            message: "Registration Successful",
            user: { ...initialUser }
          });
        } else {
          throw new Error();
        }
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        this.setState({
          message: "registration failed",
          user: { ...initialUser }
        });
      });
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.submitHandler} className="login">
          <h1>Adam's Notes</h1>
          <h1>Register</h1>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.user.username}
            onChange={this.changeHandler}
            className="login-input"
            placeholder="Username"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.changeHandler}
            className="login-input"
            placeholder="Password"
          />
          <button className="form-button">Register</button>
          <p>{this.state.message}</p>
          <Link className="rr-link " to="/">
            <p>back to login page</p>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
