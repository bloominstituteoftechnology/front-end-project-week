import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Login } from '../actions';
import './Login.css';

class CreateNote extends React.Component {
  state = {
    username: '',
    password: '',
    redirect: false,
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.Login(username, password);
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.onSubmit}>
          <h2>Login:</h2>
          <input onChange={this.onChange} value={this.state.title} name='username' placeholder='username' required='true'/>
          <input onChange={this.onChange} value={this.state.entry} name="password" placeholder='password' type='password' required='true' />
          <button type='submit'>Log In</button>
        </form>
        <div className='register-prompt'>Don't have an account? <Link to='/register' >Create one here.</Link></div>
        {this.state.redirect ? <Redirect to='/' /> : null }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sorted: state.sorted,
  };
}

export default connect(mapStateToProps, { Login })(CreateNote);