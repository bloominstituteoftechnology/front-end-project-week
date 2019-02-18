import React, { Component } from 'react'
import axios from 'axios';
import Modal from '../styles/Modal';
import Input from '../styles/LoginInput';

export default class Login extends Component {
  
  state = {
     username: '',
     password: ''
  }
  handleInput = (event) => {
     event.preventDefault();
     const target = event.target;
     this.setState({
        [target.name] : target.value
     })
  }
  handleSubmit = (event) => {
     event.preventDefault();
     const credentials = this.state;
     if(!credentials.username) alert('Pleaser enter a valid username');
     if(!credentials.password) alert('Pleaser enter a valid password');
     const endpoint = 'http://localhost:3300/api/login';
     axios.post(endpoint, credentials)
          .then(response => {
             console.log(response);
             localStorage.setItem('jwt', response.data.token);
          })
          .catch(err => {
             console.log(`errorMessage: `, err);
          });
      
    this.setState({
      username: '',
      password:''
      });    
  } 
 
  render() {
    return (
      <div>
       <h1>Log-in form</h1>
       <Modal>
        <form onSubmit={this.handleSubmit}>
        <div>         
           
            <Input type='text' name='username'
                   value={this.state.username}
                   onChange={this.handleInput}
                   placeholder='User name'></Input>
         </div>
         <div>
           
            <Input type='text' name='password'
                   value={this.state.password}
                   onChange={this.handleInput}
                   placeholder='Password'></Input>
         </div>
         <div>
           <button type='submit' className='sign'>Sign In</button>
         </div>
       </form>
       </Modal>
      </div>
    )
  }
}
