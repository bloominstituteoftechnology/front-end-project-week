import React, { Component } from 'react';
import Login from './Login';

class LoginPage extends Component {
  constructor(){
    super();
    this.state=({
      usernameText: '',
      passwordText: ''
    })
  }

  handleChange = ev =>{
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  login = ev => {
      console.log(this.state.usernameText);
    if(this.state.usernameText && this.state.passwordText){
        localStorage.setItem('username', this.state.usernameText);
     localStorage.setItem('password', this.state.passwordText) 
    }else{
        alert('You must have a \nUSERNAME \nand \nPASSWORD!')
    }
     
    
  }
  

  render() {
    return (
      <Login login={this.login} handleChange={this.handleChange} usernameText={this.state.usernameText} passwordText={this.state.passwordText} />
    
    );
  }
}

export default LoginPage;