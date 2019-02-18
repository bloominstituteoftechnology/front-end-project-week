import React, { Component } from 'react'
import axios from 'axios';
import Modal from '../styles/Modal';
import Input from '../styles/LoginInput.js';

export default class Register extends Component {
  state = {
    email: '',
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
    if(!credentials.email) alert('Pleaser enter email');
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
     email: '',
     password:''
     });    
 } 

 render() {
   return (
     <div>
    
     <Modal>
       <h1 className='h1'>Sign-Up/Register:</h1>
        <form onSubmit={this.handleSubmit}>
        <div>         
            <p className='para'>Your Email:</p>
            <Input type='email' name='email'
                   value={this.state.email}
                   onChange={this.handleInput}
                   placeholder='Email'></Input>
         </div>
         <div>
            <p className='para'>Password:</p>
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
