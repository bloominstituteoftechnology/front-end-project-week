import React from "react";

import App from "../App";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.login(e, this.state.username)}>
          <input
            type="text"
            name="username"
            onChange={this.changeHandler}
            placeholder="Username"
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            onChange={this.changeHandler}
            placeholder="Password"
            value={this.state.password}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
