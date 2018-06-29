import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button_ from '../Button_/Button_';
import { registerUser, logInUser } from '../../actions/index';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
    };
  }
  handleInput = e => {
    e.key === 'Enter' ? e.preventDefault() : console.log();
    this.setState({ [e.target.name]: e.target.value });
  };
  createAccount = e => {
    this.props.registerUser(this.state);
    this.setState({ name: '', username: '', password: '' });
  };
  logIn = e => {
    const { username, password } = this.state;
    this.props.logInUser({ username, password });
    this.setState({ name: '', username: '' });
  };

  render() {
    const register = (
      <div className="form-group">
        <h1>Register</h1>
        <input className="custom-input" type="text" name="name" placeholder="Name" value={this.state.title} />
        <input className="custom-input" type="email" name="username" placeholder="email" value={this.state.title} />
        <input
          className="custom-input"
          type="password"
          name="password"
          placeholder="password"
          value={this.state.title}
        />
        <Link to="/">
          <Button_ text="Check in" action={this.createAccount} />
        </Link>
      </div>
    );
    const login = (
      <div className="form-group">
        <h1>Login</h1>
        <input className="custom-input" type="email" name="username" placeholder="email" value={this.state.title} />
        <input
          className="custom-input"
          type="password"
          name="password"
          placeholder="password"
          value={this.state.title}
        />
        <Link to="/">
          <Button_ text="Come in..." action={this.logIn} />
        </Link>
      </div>
    );
    return (
      <form className="custom-form" onChange={this.handleInput} onKeyPress={this.handleInput}>
        {this.props.location.pathname === '/register' && register}
        {this.props.location.pathname === '/login' && login}
      </form>
    );
  }
}

const mapStateToProps = state => {
  loggedId: state.authUser;
};

export default connect(
  () => {},
  { registerUser, logInUser }
)(Auth);
