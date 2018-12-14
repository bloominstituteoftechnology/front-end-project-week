import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//let API = "https://lambda-notes-sgear.herokuapp.com";
let API = "http://localhost:9000";
class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${API}/auth/register`, this.state)
      .then(response => {
        console.log(response);
        localStorage.setItem("jwt", response.data.token);
        console.log("sign up props: ", this.props);
        this.props.history.push("/");
      })
      .catch(err => console.log("error registering"));
  };

  render() {
    return (
      <div className="signup">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="usernameDiv">
            <label className="usernameLabel">Username: </label>
            <input
              className="usernameInput"
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              type="text"
            />
          </div>
          <div className="passwordDiv">
            <label className="passwordLabel">Password: </label>
            <input
              className="passwordInput"
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
            />
          </div>
          <div>
            <button className="loginButton" type="submit">
              Register
            </button>
          </div>
        </form>
        <Link className="loginLink" to="/">
          Already have an account? Log In Here
        </Link>
      </div>
    );
  }
}
export default Register;
