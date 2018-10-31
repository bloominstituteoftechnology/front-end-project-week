import React, { Component } from "react";
import './login.css';

class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: ""
      };
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      handleLoginSubmit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };

      render() {
          return (
            <form className="login-form">
                <h2>Lambda Notes Login</h2>
                <div>Login</div>
                <input
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                />
            <button
                className="login-button"
                onClick={this.handleLoginSubmit}
            >
                Login
            </button>
            </form>
          );
      }
}

export default Login;