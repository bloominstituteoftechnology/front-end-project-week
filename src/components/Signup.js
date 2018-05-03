import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      rePassword: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  register = () => {
    axios.post(`https://shrouded-shelf-42770.herokuapp.com/users`, {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      rePassword: this.state.rePassword
    })
      .then(response => {
      })
      .catch(error => { console.log('Error: could not register you') });
    this.props.changeFlag();
  }

  render() {
    return (
      <div className="signup">
        <p>Please sign up using your email and any password.</p>
        <form>
          <input
            type="text"
            name='name'
            placeholder='Name...'
            onChange={this.onChange}
          />
          <input
            type="email"
            name='email'
            placeholder='Email...'
            onChange={this.onChange}
          />
          <input
            type="password"
            name='password'
            placeholder='Password...'
            onChange={this.onChange}
          />
          <input
            type="password"
            name='rePassword'
            placeholder='Repeat password...'
            onChange={this.onChange}
          />
          <Link to='/' className='link' onClick={this.register}>
            <button
              type="submit"
            >
              Register
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Signup;
