import React, { Component } from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const initialUser = {
  username: '',
  password: ''
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: ''
    };
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post(`${url}/register`, this.state.user)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            message: 'Registration successful',
            user: { ...initialUser }
          });
        } else {
          throw new Error('Something happened when registering');
        }
      })
      .catch(error => {
        console.log('the error is.... is...', error);
        this.setState({
          message: 'Registration failed. The error is.. ',
          error,
          user: { ...initialUser }
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
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
            type="text"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.message ? <h4>{this.state.message}</h4> : undefined}
      </div>
    );
  }
}
