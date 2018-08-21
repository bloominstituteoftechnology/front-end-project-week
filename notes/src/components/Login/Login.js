import React from "react";
import "./Login.css";
import firebase, { auth, provider } from "./firebase";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        //this.setState({ user });
      }
    });
  }

  addUsername = event => {
    this.setState({ username: event.target.value });
  };
  addPassword = event => {
    this.setState({ password: event.target.value });
  };
  LoginButton = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      localStorage.setItem("username", user.email);
      localStorage.setItem("password", user.l);
      window.location.reload();
      //this.setState({ user });
    });
  };
  GoogleLogin = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      localStorage.setItem("username", user.email);
      localStorage.setItem("password", user.l);
      window.location.reload();
      //this.setState({ user });
    });
  };

  render() {
    console.log("this.state.user is: ", this.state.user);
    return (
      <form className="login-page">
        <div className="login-card">
          <div className="google-button" onClick={this.GoogleLogin}>
            SIGN IN WITH GOOGLE
          </div>

          <p className="login-text">OR USE EMAIL</p>
          <input type="text" onChange={this.addUsername} placeholder="Email" />
          <input type="password" onChange={this.addPassword} placeholder="Password" />
          <p className="terms-conditions">
            By clicking on Sign Up, you are agreeing to our <a href="#">Terms & Conditions</a>
          </p>
          <button className="login-button" onClick={this.LoginButton}>
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
