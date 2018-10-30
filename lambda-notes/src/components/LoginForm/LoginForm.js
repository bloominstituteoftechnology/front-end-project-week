import React from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import { Route } from "react-router-dom";

import "./Login.css";

const LoginForm = props => {
  return (
    <div className="form">
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <Login /> */}
      <div className="login-tabs">
        <div className="tab login selected">
          <a href="/login">LOGIN</a>
        </div>
        <div className="tab register">
          <a href="/register">REGISTER</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
