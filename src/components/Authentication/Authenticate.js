import React from "react";
import { Route } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../../components/Register.js";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) return <App />;
      return (
        <div className="loginPage">
          <Route exact path="/register" component={Register} />;
          <Route exact path="/" component={Login} />;
        </div>
      );
    }
  };

export default Authenticate;
