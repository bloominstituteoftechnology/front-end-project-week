import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './login.css';


const initialUser = {
  email: '',
  password: '',
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
    };
  }

  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  }

  submitHandler = (event) => {
    event.preventDefault();
    axios.post(`https://back-end-project-week-api.herokuapp.com/api/login`, this.state.user)
      .then((res) => {
        if (res.status === 200 && res.data) {
          localStorage.setItem('secret_token', res.data);
          this.props.history.push('/');
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        this.setState({
          message: 'Authentication failed.',
          user: { ...initialUser },
        });
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.user.email}
            onChange={this.inputHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <button type="submit" className="login-button">Login</button>
          <h4 className="button-sep">or</h4>
          <Link to="/register" >
            <button 
            className="login-button"
            >
            Register
            </button>
          </Link>
        </form>
        { this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        }
      </div>

    );
  }
}
