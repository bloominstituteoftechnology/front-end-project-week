import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

  }

  submitLogin = () => {
    if (this.state.username && this.state.password) {
      
      localStorage.setItem("user", this.state.username);
      localStorage.setItem("password", this.state.password);
      window.location.reload();
    }
  }
  
  loginHandler = event => {
    this.setState({
      [event.target.name]: event.target.value;
    })
  }

  render() {
    return(
      
    )
  }
}