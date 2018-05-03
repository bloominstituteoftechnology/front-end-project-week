import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
       email:'',
       password:''
      };
      this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangePassword=this.handleChangePassword.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
  
    handleChangeEmail = (event) => {
      this.setState({email: event.target.value});
    }
    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
      }
     handleSubmit = (event) =>{
event.preventDefault();
const addUser ={
    email: event.target.value,
    password: event.target.value
}
          this.state.user.push(addUser);
          this.setState({
            email:'',
            password:'' 
          })
      }
 
    
    
    render(){
        
      return (
          <div className='container'>
        
          <form>
          
            <input class = 'kin' type ='email' placeholder ='Enter your email' 
            value = {this.state.email} onChange ={this.handleChangeEmail} /><br />
            <input class = 'kin' type ='password' placeholder ='Enter your password' 
            value = {this.state.password} onChange ={this.handleChangePassword} /><br />
            

                          <button onClick={this.onClick}>Login button </button>
          </form>
          
          </div>
      );
    }
  }
  export default Login;
  
  