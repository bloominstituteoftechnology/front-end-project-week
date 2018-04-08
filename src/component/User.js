import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, register } from '../actions';
import NavBar from './NavBar';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      newAccount: false
    };
  }

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignIn = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (password.length <= 0 || username.length <= 0) {
      return alert('Please provide both username and password');
    }
    return this.props.login(username, password);
  };

  handleSignUp = event => {
    event.preventDefault();
    const { username, password, confirmPassword } = this.state;

    if (confirmPassword === password && username.length >= 6) {
      return this.props.register(username, password);
    } else if (username.length < 6) {
    return alert('Username name must be 6 characters or longer');
    } else if (password.length < 7) {
    return alert('Password must be 7 characters or longer');
    }
    return alert('Passwords do not match');
  };

  signUpToggle = event => {
    event.preventDefault();
    const active = this.state.newAccount;
    this.setState({ newAccount: !active });
  };

  render() {
    return (
      <div className='nav'>
        <NavBar />
        <div className='nav-landing'>
          <form style={this.state.newAccount ? { display: 'none' } : null}>
            <div>Please Sign In</div>
            <br />
            {this.props.error ? (
              <h3 className='LogInError'>Incorrect username/password</h3>
            ) : null}
            <br />
            <input
              className='user-form'
              type='text'
              placeholder='username'
              value={this.state.username}
              onChange={this.handleOnChange}
              name='username'
              required
            />
            <br />
            <input
              className='user-form'
              type='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleOnChange}
              name='password'
              required
            />
            <br />
            <br />
            <button className='user-button' onClick={this.handleSignIn}>Hellooo</button>
            <br />
            <br />
            <p>
              Don't have an account?{' '}
              <a href='' onClick={this.signUpToggle}>
                Sign up for free
              </a>
            </p>
          </form>
          <form style={this.state.newAccount ? null : { display: 'none' }}>
            <div>Create New Account</div>
            <input
              className='user-form'
              type='text'
              placeholder='username'
              value={this.state.username}
              onChange={this.handleOnChange}
              name='username'
              required
            />
            <br />
            <input
              className='user-form'
              type='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleOnChange}
              name='password'
              required
            />
            <br />
            <input
              className='user-form'
              type='password'
              placeholder='confirm password'
              value={this.state.confirmPassword}
              onChange={this.handleOnChange}
              name='confirmPassword'
              required
            />
            <br />
            <br />
            <button className='user-button' onClick={this.handleSignUp}>(▰˘◡˘▰)</button>
            <br />
            <br />
            <p>
              Already have an account?{' '}
              <a href='' onClick={this.signUpToggle}>
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    error: state.error,
    signedUp: state.signedUp
  };
};

export default connect(mapStateToProps, { login, register })(LogIn);
