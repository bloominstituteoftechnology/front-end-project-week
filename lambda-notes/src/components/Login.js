import React from "react";
import axios from "axios";

const url = "https://fsw14-lambda-notes.herokuapp.com/api";

const initialUser = {
  username: "",
  password: ""
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      isRegistering: false
    };
  }

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      user: { ...this.state.user, [name]: value }
    });
  };

  login = event => {
    event.preventDefault();
    if (this.state.user.username && this.state.user.password) {
      axios
        .post(`${url}/login`, this.state.user)
        .then(res => {
          if (res.data) {
            localStorage.setItem("note_token", res.data.token);
            window.location.reload();
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          console.log(err);
          alert("Incorrect username or password");
          this.setState({ user: initialUser });
        });
    } else {
      alert(
        "Please fill out both username and password fields before submitting"
      );
      this.setState({ user: initialUser });
    }
  };

  register = event => {
    event.preventDefault();
    if (this.state.user.username && this.state.user.password) {
      axios
        .post(`${url}/register`, this.state.user)
        .then(res => {
          if (res.data && res.data.length) {
            axios.post(`${url}/login`, this.state.user).then(res => {
              if (res.data) {
                localStorage.setItem("note_token", res.data.token);
                window.location.reload();
              } else {
                throw new Error();
              }
            });
          } else {
            console.log(res);
            throw new Error();
          }
        })
        .catch(err => {
          console.log(err);
          alert("Registration failed, please try again");
          this.setState({ user: initialUser });
        });
    } else {
      alert(
        "Please fill out both username and password fields before submitting"
      );
      this.setState({ user: initialUser });
    }
  };

  toggleRegister = event => {
    event.preventDefault();
    this.setState({ isRegistering: !this.state.isRegistering });
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-content-wrapper">
          <h1>Lambda Notes</h1>
          <p>
            {this.state.isRegistering
              ? "Enter username and password to register!"
              : "Enter username and password to log in!"}
          </p>

          <form
            className="login-form"
            onSubmit={this.state.isRegistering ? this.register : this.login}
          >
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={this.state.user.username}
              onChange={this.changeHandler}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              value={this.state.user.password}
              onChange={this.changeHandler}
            />
            <button>{this.state.isRegistering ? "Register" : "Log In"}</button>
          </form>
          <button onClick={this.toggleRegister}>
            {this.state.isRegistering
              ? "Already registered? Click here to login!"
              : "Not registered yet? Click here to sign up!"}
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
