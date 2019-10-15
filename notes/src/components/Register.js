import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {
  register
} from "../actions/actions"

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
      .then(() => {
        localStorage.setItem("jwt", this.props.token)
        this.setState({ username: "", password: "", registered: true })
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.registered) {
      return <Redirect to="/"/>
    }
    else if (this.props.fetching) {
      return (
        <div className="componentContainer">
          <h2>Register:</h2>
          <form disabled>
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
            />
            <button type="submit" disabled className="sidebarButton createButton">
            Register
          </button>
          </form>
          
          <div>One moment while we add you...</div>
        </div>
      )
    }
     else {
      return (
        <div className="componentContainer">
          <h2>Register:</h2>
          <form onSubmit={this.props.register ? this.newUserHandler : null} method="post">
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
    registered: state.registered,
    fetching: state.fetching,
    token: state.token
  };
};
export default connect(
  mapStateToProps,
  { register }
)(Register);
