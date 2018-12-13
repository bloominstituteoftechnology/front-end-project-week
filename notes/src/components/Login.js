import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      remail: "",
      rpassword: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLoginSubmit = e => {
    e.preventDefault();
    axios
      .post("https://notes-api-backend.herokuapp.com/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.setState({ email: "", password: "" });
        this.props.logInToggle();
      })
      .catch(err => console.log(err));
  };
  handleRegisterSubmit = e => {
    e.preventDefault();
    axios
      .post("https://notes-api-backend.herokuapp.com/register", {
        email: this.state.remail,
        password: this.state.rpassword
      })
      .then(res => {
        this.setState({ remail: "", rpassword: "" });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="loginPage">
        <h1>Welcome to Lambda Notes!</h1>
        <div className="forms">
          <form className="loginForm">
            <p>Login to see your notes!</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleInputChange}
              value={this.state.email}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
              required
            />
            <input
              type="submit"
              value="Login"
              onClick={this.handleLoginSubmit}
            />
          </form>
          <form className="registerForm">
            <p>Create an account!</p>
            <input
              type="email"
              name="remail"
              placeholder="Email"
              onChange={this.handleInputChange}
              value={this.state.remail}
              required
            />
            <input
              type="password"
              name="rpassword"
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.rpassword}
              required
            />
            <input
              type="submit"
              value="Register"
              onClick={this.handleRegisterSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
