import React, { Component } from "react";
import axios from "axios";

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
    console.log(this.state.user);
    axios
      .post("https://adamsnotes.herokuapp.com/api/register", this.state.user)
      .then(res => {
        if (res.status === 201) {
          this.setState({
            message: "Registration Successful",
            user: { ...initialUser }
          });
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          message: "registration failed",
          user: { ...initialUser }
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h1>Register</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.user.username}
            onChange={this.changeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.changeHandler}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
