import React from "react";
import LoginForm from "../LoginForm/LoginForm.js";

const authenticate = HOCApp =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loggedIn: false };
    }

    componentDidMount() {
      //check local storage to see if JWT token exists
      if (localStorage.getItem("jwt")) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      console.log(this.state.loggedIn);
      return this.state.loggedIn ? <HOCApp /> : <LoginForm />;
    }
  };

export default authenticate;
