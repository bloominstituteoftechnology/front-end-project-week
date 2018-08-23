import React from 'react';
import '../App.css';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSignup = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    axios.post('https://nameless-harbor-91626.herokuapp.com/register', {username, password}).then(response => {
      localStorage.setItem('token', response.data.token);
      this.props.history.push('/home');
    }).catch(err => {
      console.log(err);
    })

  }

  render() {
    console.log('register location', this.props.location);
    return (
      <div>
        <form className="login">
        <h1 className="loginTitle">Lambda Notes</h1>
        <h2>Sign Up</h2>
        <div>Username: <input name="username" placeholder="Username"
        onChange={this.handleChange} value={this.state.username} /></div><br/>
        <div>Password: <input type="password" name="password" placeholder="Password"
        onChange={this.handleChange} value={this.state.password} /></div><br/>
        <input className="sidebar-button login-button" type="submit" value="Sign Up" onClick={this.handleSignup} /><br/>
        <NavLink to='/' className="Goto-Login">"Have an account already? Login here"</NavLink>
        </form>
      </div>
    );
  }
}

export default Register;
