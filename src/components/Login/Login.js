import React from "react";
import "./Login.css";
import firebase, { auth, provider } from "./firebase";
import { Link, Route } from "react-router-dom";
import Signup from "./Signup";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: null,
      register: false
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

  LoginButton = event => {
    event.preventDefault();
    const loginUser = { username: this.state.username, password: this.state.password };
    console.log("loginUser is: ", loginUser);
    axios
      .post(`${process.env.REACT_APP_API}/users/login`, loginUser)
      .then(response => {
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
        window.location.reload();
      })
      .catch(err => {
        alert("Invalid Username or Password");
      });
    /*e.preventDefault();
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      localStorage.setItem("username", user.email);
      localStorage.setItem("password", user.l);
      window.location.reload();
      //this.setState({ user });
    });*/
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

  toggleRegister = event => {
    event.preventDefault();
    this.setState({ register: !this.state.register });
  };

  SignupButton = event => {
    event.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post("http://localhost:8000/api/users/register", newUser)
      .then(response => {
        this.setState({ register: !this.state.register, username: "", password: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        {this.state.register ? (
          <form className="login-page">
            <div className="login-card">
              <div className="google-button" onClick={this.GoogleLogin}>
                SIGN IN WITH GOOGLE
              </div>

              <p className="login-text">CREATE AN ACCOUNT</p>
              <input type="text" onChange={this.addUsername} placeholder="Email" />
              <input type="password" onChange={this.addPassword} placeholder="Password" />
              <p className="terms-conditions">
                By clicking on Sign Up, you are agreeing to our <a href="#">Terms & Conditions</a>
              </p>
              <button className="login-button" onClick={this.SignupButton}>
                Sign Up Now
              </button>
            </div>
            <Route path="/register" component={Signup} />
          </form>
        ) : (
          <form className="login-page">
            <div className="login-card">
              <div className="google-button" onClick={this.GoogleLogin}>
                SIGN IN WITH GOOGLE
              </div>

              <p className="login-text">
                OR USE EMAIL /{" "}
                <span className="register-link" onClick={this.toggleRegister}>
                  {" "}
                  REGISTER
                </span>
              </p>
              <input
                type="text"
                value={this.state.username}
                onChange={this.addUsername}
                placeholder="Email"
              />
              <input
                type="password"
                value={this.state.password}
                onChange={this.addPassword}
                placeholder="Password"
              />
              <p className="terms-conditions">
                By clicking on Log In, you are agreeing to our <a href="#">Terms & Conditions</a>
              </p>
              <button className="login-button" onClick={this.LoginButton}>
                Log in
              </button>
            </div>
            <Route path="/register" component={Signup} />
          </form>
        )}
      </div>
    );
  }
}

export default Login;
