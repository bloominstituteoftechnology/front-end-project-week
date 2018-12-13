import React, { Component } from 'react';
import { registerUser, loginUser } from '../actions';
import { connect } from 'react-redux';


 class Login extends Component {
  constructor(props){
    super(props);
    this.state = ({
      username: '',
      password: '',
    })
  }
   handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
   handleLogin = event => {
    event.preventDefault();
    if (this.state.username.length === 0){
      alert('You must provide a username');
      return;
    } else {
      if (this.state.password.length === 0){
        alert('You must provide a password');
        return;
      }
    }
    const user = { username: this.state.username, password: this.state.password };
    if (this.props.register) {
      this.props.registerUser(user);
      this.props.history.push('/notes');
    } else if (this.props.login) {
      this.props.loginUser(user);
      this.props.history.push('/notes');
    }
    this.setState({
      username: '',
      password: '',
    })
  }
   render(){
    return(
      <div className='login'>
      <h2>Welcome to Lambda Notes!</h2>
      <h4>Please sign in</h4>
        <form onSubmit={this.handleLogin}>
          <input
            name='username'
            type='text'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}/>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}/>
            <button className='button login-button' type='submit'>Login</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    authorizing: state.authReducer.authorizing,
    token: state.authReducer.token,
    error: state.authReducer.error,
    loggedIn: state.authReducer.loggedIn,
  }
}
   export default connect(
     mapStateToProps,
     {
       registerUser,
       loginUser,
     }
   )(Login);
