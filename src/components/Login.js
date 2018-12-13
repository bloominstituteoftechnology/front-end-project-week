import React from "react";
import "./styles.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form>
          <span>Username</span>
          <input type="text" name="username" />
          <span>Password</span>
          <input type="text" name="password" />
          <button onClick={this.props.login} type="submit" name="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
