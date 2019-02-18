import React, { Component } from 'react'
import axios from 'axios';
import Modal from '../styles/Modal';
import Input from '../styles/LoginInput.js';

export default class Register extends Component {
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
    if(!credentials.username) alert('Pleaser enter username');
    if(!credentials.password) alert('Pleaser enter password');
    const endpoint = 'http://localhost:3300/api/register';
    axios.post(endpoint, credentials)
         .then(response => {
            console.log(response);
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
     <h1>Sign-Up/Register</h1>
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
           <button type='submit' className='register'>Register</button>
         </div>
       </form>
       </Modal>
      </div>
   )
 }
}
