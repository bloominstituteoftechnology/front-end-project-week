import React from "react";
import {
  LoginH1,
  LoginForm,
  LoginHint,
  LoginInput,
  LoginButton
} from "../Styles";

const Login = props => {
  return (
    <div>
      <LoginH1>Login</LoginH1>
      <LoginForm onSubmit={props.loginEvent}>
        <LoginInput
          type="text"
          placeholder="Username"
          onChange={props.handleUsername}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          onChange={props.handlePassword}
        />
        <LoginButton>Login</LoginButton>
      </LoginForm>

      <LoginHint>Hint: user: shawn</LoginHint>
      <LoginHint>Hint: password: cat</LoginHint>
    </div>
  );
};

export default Login;
