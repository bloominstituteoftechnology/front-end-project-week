import React, { Component } from 'react'
import axios from 'axios';
import Modal from '../styles/Modal';
import Input from '../styles/LoginInput';

// const API = process.env.API_URL || `http://localhost:2300`;
const API = `https://venkynotesapi.herokuapp.com`;


export default class Login extends Component {
  
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
     console.log(this.props);
     event.preventDefault();
     const credentials = this.state;
     if(!credentials.email) alert('Pleaser enter a valid email');
     if(!credentials.password) alert('Pleaser enter a valid password');
     const endpoint = `${API}/api/login`;
     axios.post(endpoint, credentials)
          .then(response => {
             console.log('Response for Login',response.data);
             localStorage.setItem('jwt', response.data.token);
             this.props.history.push('/');
           
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
       <h1 className='h1'>Log-in form:</h1>
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
           <button type='submit' className='register login'>Sign In</button>
         </div>
       </form>
       </Modal>
      </div>
    )
  }
}
