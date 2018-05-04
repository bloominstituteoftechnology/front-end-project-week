import React from 'react';
import axios from 'axios';

// This will be a class component because we have a form in here
class Signin extends React.Component {
  state = {
    username: 'jack',
    password: 'Black'
  };
  render() {
    return (
      <form onSubmit={this.submitHandler} className="form">
        <div className="form-row">
          <label>Username</label>
          <input
            name="username"
            value={this.state.username}
            onChange={this.inputHandler}
            type="text"
          />
        </div>
        <div className="form-row">
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.inputHandler}
            type="password"
          />
        </div>
        <div className="form-row">
          <button>Sign In</button>
        </div>
      </form>
    );
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();

    axios
      .post('https://wsw-backendproject.herokuapp.com/api/login', this.state)
      .then(response => {
        console.log('response from c.l in Signin.js:', response.data);
        console.log(this.props);
        this.props.onSignin(response.data);
        this.props.history.push('/notes')
      })
      .catch(err => {
        console.log('ERROR: You are not authorized', err);
      });
  };
}

export default Signin;