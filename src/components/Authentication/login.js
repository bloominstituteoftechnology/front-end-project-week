import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
        <div>

        <h3>Welcome to Lambda Note</h3>
        <h3>Please Login</h3>
       <input type="text" name='user' onChange={this.handeInput}></input>
       <input type="text" name='password' onChange={this.handeInput}></input>
       <button onClick={this.handleLoginSubmit}>Submit</button>

        </div>
    );
  }
}

export default Login;
