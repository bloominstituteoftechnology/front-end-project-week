import React from "react";
import Login from "./Login";

const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("jwt")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    logInToggle = () => {
      this.setState({ loggedIn: true });
    };
    render() {
      return this.state.loggedIn ? (
        <App />
      ) : (
        <Login logInToggle={this.logInToggle} />
      );
    }
  };

export default Authenticate;
