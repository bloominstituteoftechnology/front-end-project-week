import React from 'react';
import { connect } from 'react-redux';
import { signUp, signIn } from '../actions';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleSignUp = () => {
    this.props.signUp(this.state);
  }

  handleSignIn = () => {
    if(this.state.username !== '' && this.state.password !== ''){
      this.props.signIn(this.state);
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  


  render() {
    console.log('render user', this.props.user);
    if(this.props.user.loggedIn){
      this.props.history.push('/a/list');
    }
    return (
      <div className="login">
        <div className="title">Lambda Notes</div>
        <input name="username" value={this.state.name} placeholder="Username" onChange={this.handleOnChange}/><br />
        <input name="password" value={this.state.value} placeholder="Password" onChange={this.handleOnChange}/><br />
        <button className="signin" onClick={() => {this.handleSignIn()}}>Sign in</button><br />
        <div>- or -</div>
        <button onClick={() => {this.handleSignUp()}}>Sign up</button><br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  } 
}

export default connect(mapStateToProps, {signUp, signIn})(Login);