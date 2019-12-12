import React from "react";
import {Redirect} from "react-router-dom";
import { connect } from "react-redux";

import {
  login,
  fetchUser
} from "../actions/actions";

// import "../styles/App.css";
// import "../styles/CreateNote.css";
// import "../styles/Sidebar.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = e => {
    e.preventDefault();
    this.props
      .login({
        username: this.state.username,
        password: this.state.password
      })
      .then(res =>
        this.props.fetchUser({username:this.state.username})
      )
      .then(res => {
        this.setState({ username: "", password: "", loggedIn: true })
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Redirect to="/"/>
      );
    } else {
      return (
        <div className="componentContainer">
          <h2>Login:</h2>
          <form onSubmit={this.loginHandler} method="post">
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
            Login
          </button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};
export default connect(
  mapStateToProps,
  { login, fetchUser }
)(Login);