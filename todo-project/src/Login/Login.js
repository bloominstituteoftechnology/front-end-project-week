import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './Login.css';
import image from './marble-surface-wall-1323712.jpg'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login() {
    axios
      .post('https://fsw-14-project-notes.herokuapp.com/login', {username: this.state.username, password: this.state.password})
      .then(response => {
        console.log(response)
        const user = response.data.welcome
        const id = response.data.id
        localStorage.setItem('username', user)
        localStorage.setItem('id', id)
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
        window.alert('Invalid username or password')
      })
  }

  render() {
    return (
      <Form className="login-form">
      <div className='loginContainer'>
        <h3>Lambda Notes</h3>
        <div>Please Login</div>
        <FormGroup>
          <Input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <Button color="success" size="large" onClick={() => this.login()}>
            Log In
          </Button>
        </FormGroup>
        <div className='register'>Need to register? <NavLink to='/register'>Click here</NavLink></div>
        </div>
      </Form>
    );
  }
}

document.body.style.backgroundImage = `url(${image})`;

export default Login;
