import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.inputHandler}
            type="text"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.inputHandler}
            type="password"
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    );
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    console.log(this.state, 'this.state');
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      // .post('http://localhost:5000/api/login', this.state)
      .post(
        'https://immense-plateau-90586.herokuapp.com/api/register',
        this.state
      )
      .then(response => {
        console.log('response', response.data);
        this.props.onLogin(response.data);
        this.props.history.push('/notes');
      })
      .catch(err => {
        console.log('ERROR You are not authorized', err);
      });
  };
}

export default Login;
