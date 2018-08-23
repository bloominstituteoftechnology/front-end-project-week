import React, { Component } from "react";
import { Form, Input, FormGroup, Button } from "reactstrap";
import Login from "./login";
import Register from "./register";
import "./auth.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="title">Welcome to LambdaNotes Login Page</h1>
        <Register />
        <Login />
      </div>
    );
  }
}

export default Auth;
