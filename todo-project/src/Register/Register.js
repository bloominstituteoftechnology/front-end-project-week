import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './Register.css';


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

  registerUser() {
    axios 
      .post('https://fsw-14-project-notes.herokuapp.com/register', {username: this.state.username, password: this.state.password})
      .then(response => {
        console.log(response)
        window.location.replace('/')
      })
      .catch(error => {
        console.log(error)
        window.alert('Username already taken')
      })
  }

  render() {
    return (
      <Form className="login-form">
      <div className='loginContainer'>
        <h3>Lambda Notes</h3>
        <div>Register</div>
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
          <Button color="success" size="large" onClick={() => this.registerUser()}>
            Register
          </Button>
          <div className='register'>Already registered? <NavLink to='/'>Click here to log in </NavLink></div>
        </FormGroup>
        </div>
      </Form>
    );
  }
}



export default Login;