import React from "react";
import "./LoginPage.css";

const LoginPage = props => {
  return (
    <div className="login-wrapper">
      <div className="login-section">
        <h2>Login to Trello</h2>
        <form onSubmit={props.updateUser}>
          <div className="my-inputs">
            <input
              className="login-input"
              type="text"
              placeholder="Your username.."
              name="username"
              value={props.usernameInput}
              onChange={props.usernameChange}
            />
            <input
              className="login-input"
              type="text"
              placeholder="Your password.."
              name="password"
              value={props.passwordInput}
              onChange={props.passwordChange}
            />
          </div>
          <div className="my-button">
            <button className="login-button" onClick={props.updateUser}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
