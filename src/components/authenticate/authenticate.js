import React from "react";
import axios from "axios";
import "./authenticate.css";
import Homepage from "./homepage";

const url = process.env.REACT_APP_DB_URL;

const initialUser = {
  username: "",
  password: ""
};

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        user: { ...initialUser },
        message: "",
        register: false,
        homepage: true
      };
    }

    inputHandler = event => {
      const { name, value } = event.target;
      this.setState({ user: { ...this.state.user, [name]: value } });
    };

    submitHandler = event => {
      event.preventDefault();
      axios
        .post(`${url}/note/login`, this.state.user)
        .then(res => {
          if (res.status === 201 && res.data) {
            localStorage.setItem("bit_token", res.data);
            this.setState({ loggedIn: true });
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          this.setState({
            message: "Login Failed",
            user: { ...initialUser }
          });
        });
    };

    homepageToggle = () => {
      this.setState({ homepage: !this.state.homepage });
    };

    submitHandlerReg = event => {
      event.preventDefault();
      axios
        .post(`${url}/note/register`, this.state.user)
        .then(res => {
          if (res.status === 201 && res.data) {
            localStorage.setItem("bit_token", res.data);
            this.setState({ loggedIn: true });
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          this.setState({
            message: "Sign-up Failed",
            user: { ...initialUser }
          });
        });
    };

    toggleHandler = event => {
      event.preventDefault();
      !this.state.register
        ? this.setState({ register: true })
        : this.setState({ register: false });
    };

    render() {
      if (this.state.loggedIn) return <App rerender={this.rerender} />;
      else {
        return (
          <div>
            {this.state.homepage ? (
              <Homepage homepageToggle={this.homepageToggle} />
            ) : (
              <div className="auth-wrapper">
                <div className="login-wrapper">
                  <h1>Notes</h1>
                  {!this.state.register ? <h2>Login</h2> : <h2>Register</h2>}
                  <form
                    onSubmit={
                      !this.state.register
                        ? this.submitHandler
                        : this.submitHandlerReg
                    }
                    className="sign-in-form"
                  >
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={this.state.user.username}
                      onChange={this.inputHandler}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.user.password}
                      onChange={this.inputHandler}
                    />
                    <button type="submit">
                      {!this.state.register ? (
                        <h3>Sign in</h3>
                      ) : (
                        <h3>Sign up</h3>
                      )}
                    </button>
                  </form>
                  <h3 onClick={this.toggleHandler} className="signUp-toggle">
                    Sign up
                  </h3>
                  {this.state.message ? (
                    <h4>{this.state.message}</h4>
                  ) : (
                    undefined
                  )}
                </div>
              </div>
            )}
          </div>
        );
      }
    }
  };

export default Authenticate;
