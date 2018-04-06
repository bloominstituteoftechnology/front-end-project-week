import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { withRouter } from 'react-router'

import Loading from './Loading';

import './Login.css';

class CreateNote extends React.Component {
  state = {
    username: '',
    password: '',
  }

  componentWillReceiveProps() {
    console.log('auth', this.props.auth);
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password, this.props.history);
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.onSubmit}>
          <h2>Login:</h2>
          <input onChange={this.onChange} value={this.state.title} name='username' placeholder='username' required='true' maxlength='100'/>
          <input onChange={this.onChange} value={this.state.entry} name="password" placeholder='password' type='password' required='true' maxlength='100'/>
          {this.props.loading ? <Loading /> : <button type='submit'>Log In</button>}
        </form>
        <div className='prompt-cont'><div className='register-prompt'>Don't have an account? <Link to='/register' >Create one here.</Link></div></div>
        {this.props.auth ? <Redirect to='/' /> : null }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    // sorted: state.sorted,
    auth: state.auth.authenticated,
    loading: state.auth.loading,
  };
}

export default withRouter(connect(mapStateToProps, { login })(CreateNote));