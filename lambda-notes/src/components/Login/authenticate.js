import React from "react";

import Login from "./Login";
import App from "../../App";
import ListView from "../ListView";

const authenticate = App => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        isLoggedIn: true
      };
    }

    changeHandler = e => {
      this.setState({[e.target.name]: e.target.value});
    };

    loginHandler = (e, user) => {
      e.preventDefault();
      const username = localStorage.setItem("user", user);
      this.setState({isLoggedIn: true, username: username});
    };

    logoutHandler = () => {
      // e.preventDefault();
      this.setState({isLoggedIn: false});
    };

    render() {
      return !this.state.isLoggedIn ? (
        <Login login={this.loginHandler} />
      ) : (
        <App logout={this.logoutHandler} user={localStorage.getItem("user")} />
      );
    }
  };
};

export default authenticate;
