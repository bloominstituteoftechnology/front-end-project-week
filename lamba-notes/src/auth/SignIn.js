import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let APIUrl = 'https://bummingsnotes.herokuapp.com';

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    return (
      <div className='noteSubmit'>
        <h2 className='noteEdit__header'>Sign In</h2>
        <h4>
          Don't have an account? <Link to={'/signup'}>Register here!</Link>
        </h4>
        <form onSubmit={this.handleSubmit}>
          <div className='form__input'>
            <input
              name='username'
              value={this.state.username}
              onChange={this.handleInputChange}
              type='text'
              placeholder='username'
              className='noteEdit__input--title'
            />
          </div>
          <div className='form__input'>
            <input
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              type='password'
              placeholder='password'
              className='noteEdit__input--title'
            />
          </div>
          <div>
            <button className='btn' type='submit'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = `${APIUrl}/api/login`;

    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
      })
      .catch(err => {
        console.log('big time error bruh', err);
      });
    this.setState({ redirectToReferrer: true });
  };
}

export default SignIn;
