import React, { Component } from 'react';
import axios from 'axios';

let APIUrl = 'https://bummingsnotes.herokuapp.com';

class SignUp extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    return (
      <div className='noteSubmit'>
        <h2 className='noteEdit__header'>Register a free account</h2>
        <h4>Lambda Notes: your ultimate life hack- registration is free!</h4>
        <form onSubmit={this.handleSubmit}>
          <div className='noteEdit__input--title'>
            <input
              name='username'
              value={this.state.username}
              onChange={this.handleInputChange}
              type='text'
              placeholder='Username'
              className='noteEdit__input--title'
            />
          </div>

          <div className='noteEdit__input--title'>
            <input
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              type='password'
              placeholder='Password'
              className='noteEdit__input--title'
            />
          </div>
          <div>
            <button type='submit' className='btn'>
              Sign Up
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
    const endpoint = `${APIUrl}/api/register`;

    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log('big time error bruh', err);
      });
  };
}

export default SignUp;
