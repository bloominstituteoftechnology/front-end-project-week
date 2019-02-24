import React, { Component } from 'react'
import axios from 'axios';
import Modal from '../styles/Modal';
import Input from '../styles/LoginInput.js';

// const API = process.env.API_URL || `http://localhost:2300`;
const API = `https://venkynotesapi.herokuapp.com`;

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    msg: ''
 }

 handleInput = (event) => {
    event.preventDefault();
    const target = event.target;
    this.setState({
       [target.name] : target.value
    });
 }
 
 handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {email:this.state.email, password:this.state.password};
    if(!credentials.email) alert('Pleaser enter email');
    if(!credentials.password) alert('Pleaser enter password');
    const endpoint = `${API}/api/register`;
    axios.post(endpoint, credentials)
         .then(response => {
            console.log(`Registered response`, response);
            this.setState({
               msg:`**`+response.data.msg
            })
         })
         .catch(err => {
             this.setState({
                msg: `**Something went wrong..already registered??`
             })           
         });
     
   this.setState({
     email: '',
     password:''
     });   

   setTimeout( () =>{
      this.props.history.push('/login');
   }, 1200);
 } 

 deleteMessage = () => {
    this.setState({
       msg: ''
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
                   placeholder='Email' required></Input>
         </div>
         <div>
            <p className='para'>Password:</p>
            <Input type='text' name='password'
                   value={this.state.password}
                   onChange={this.handleInput}
                   placeholder='Password' required></Input>
         </div>
         <div>
           <button type='submit'
                   className='register login'
                   onMouseLeave={this.deleteMessage}
                   >Register</button>
         </div>
         <p className='para-msg'>{this.state.msg}</p>
       </form>
       </Modal>
      </div>
   )
 }
}
