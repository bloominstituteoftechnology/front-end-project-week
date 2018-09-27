
import React, { Component } from 'react';
import axios from 'axios';


class Signup extends Component {
    state = {
        username: '',
        password: ''
    };
  render() {
    return (
      <form onSubmit={this.register}>
          <div>
            <label>Username</label>
            <input
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </div>
        <div>
            <button type = "submit">Submit</button>
          </div>
      </form>
    );
  }
  handleChange = event => {
      const { name , value } = event.target;

      this.setState({ [name]: value });
  };
  register = event => {
      event.preventDefault();

      axios.post('https://lambdanotes-backend.herokuapp.com/api/register', this.state)
      .then( res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
        this.props.history.push('/login');
       })
      .catch(err => {
          console.err(err);
      })
    
  };
}

export default Signup;
