import React, { Component } from "react";
// import Login from "./login";
import Auth from "./auth";

const Authenticate = App =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("user")) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    render() {
      if (this.state.loggedIn) return <App />;
      return <Auth />;
    }
  };

export default Authenticate;
