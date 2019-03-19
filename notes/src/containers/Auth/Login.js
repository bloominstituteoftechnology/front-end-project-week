import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLogin = () => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };



  render() {
    return (
        <div>
        <form>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
          <button
            color="primary"
            variant="contained"
            onClick={this.handleLogin}
          >
            Login
          </button>
        </form>
        </div>
    );
  }
}

export default Login;
