import React, {Component} from 'react';
import classes from './index.css';
import {logIn, registerUser} from '../../Actions/NoteActions';
import {store} from '../../';

export class LogIn extends Component {
  constructor(props){
    super();
    this.state= {
      username:'',
      password:'',
      newUser: false,
    };
  }
  updateState = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  newUser = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      const newUser = {username: this.state.username, password: this.state.password};
      store.dispatch(registerUser(newUser));
      this.setState({username: '', password: '', newUser: true});
    } else {
      console.log('error');
    }
  }
  isUser = () => {
    if (this.state.username !== '' && this.state.password !== ''){
      const user = {username: this.state.username, password: this.state.password};
      store.dispatch(logIn(user));
    } else {
      console.log('error');
    }
  }

  render() {
    let welcomeMessage = null;
    if (this.state.newUser === true) {
      welcomeMessage = (
        <h3>welcome to <span className={classes.Data}>Data Collection inc.</span> Lambda Notes user! </h3>
      );
    }
    return (
      <div className={classes.Container}>
        <h1 className={classes.Container__Header}>Lambda Notes.</h1>
        <h2 className={classes.Container__SubHeader}>Motto is WIP.</h2>
        <div className={classes.Container__ContentContainer}>
          {welcomeMessage}
          <input
            name= 'username'
            className={classes.Container__Input}
            placeholder='username'
            value={this.state.username}
            onChange={this.updateState}
          />
          <input
            name='password'
            className={classes.Container__Input + ' ' + classes.Container__Margin_10}
            placeholder='password'
            type='password'
            value={this.state.password}
            onChange={this.updateState}
          />
          <div className={classes.Container__ButtonsContainer}>
            <button className={classes.Container__Button} onClick={this.isUser}>Login</button>
            <button className={classes.Container__Button} onClick={this.newUser}>Register</button>
          </div>
        </div>
      </div>
    );
  }
}
