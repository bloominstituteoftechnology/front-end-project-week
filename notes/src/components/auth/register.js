import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { FormContainer } from '../../style/style';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username :'',
      password :'' 
    }
  }

  handleChange = (e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const url = `${process.env.REACT_APP_AUTH_URL}/register`;
    const creds ={
      username:this.state.username,
      password:this.state.password
    }
    axios
    .post(url, creds)
    .then(res =>{
      localStorage.setItem('jwt', res.data.token)
    })
    .catch(err =>{
      console.log(err)
    })
  }

  render() { 
    return ( 
      <>
      <FormContainer>
      <h1 className="form-title">PLEASE LOGIN</h1>
      <form>
      <input name="username" type="text"placeholder="Username" onChange={this.handleChange} value={this.state.username}/><br/>
      <input name="password" type="password" placeholder="Password" onChange={this.handleChange}value={this.state.password}/><br/>
        <Button color="primary" size="lg" onClick={this.handleSubmit}> Register </Button>
      </form>
      </FormContainer>
      </>
    );
  }
}
 
export default Login;