import React from "react";
import { connect } from "react-redux";

// import {
//   register
// } from "../actions/actions";

import "../styles/App.css";
import "../styles/CreateNote.css";
import "../styles/Sidebar.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      registered: false
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  newUserHandler = e => {
    e.preventDefault();
    this.props
      .register({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("jwt", res.data.token)
        this.setState({ username: "", password: "", registered: true })
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.registered) {
      return (
        <div className="componentContainer">
          <h2>Register:</h2>
          <form onSubmit={this.newUserHandler} method="post">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.inputChange}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputChange}
              placeholder="password"
            />
            <button type="submit" className="sidebarButton createButton">
            Register
          </button>
          </form>
          
          <div>Thank you for registering!</div>
        </div>
      );
    } else {
      return (
        <div className="componentContainer">
          <h2>Register:</h2>
          <form onSubmit={this.newUserHandler} method="post">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.inputChange}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputChange}
              placeholder="password"
            />
            <button type="submit" className="sidebarButton createButton">
            Register
          </button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    registered: state.registered
  };
};
export default connect(
  mapStateToProps,
  // { register }
)(Register);
