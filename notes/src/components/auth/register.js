import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { FormContainer } from '../../style/style';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username :'',
      password :'',
      firstName:'',
      lastName:''
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
    const user ={
      username:this.state.username,
      password:this.state.password,
      first_name:this.state.firstName,
      last_name:this.state.lastName
    }
    axios
    .post(url, user)
    .then(res =>{
      console.log(res)
      this.props.history.push('/');
    })
    .catch(err =>{
      console.log(err)
    })
  }

  render() { 
    return ( 
      <>
      <FormContainer>
      <h1 className="form-title">PLEASE REGISTER TO ADD NOTES</h1>
      <form>
      <input name="firstName" type="text"placeholder="First Name" onChange={this.handleChange} value={this.state.firstName}/><br/>
      <input name="lastName" type="text"placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName}/><br/>
      <input name="username" type="text"placeholder="Username" onChange={this.handleChange} value={this.state.username}/><br/>
      <input name="password" type="password" placeholder="Password" onChange={this.handleChange}value={this.state.password}/><br/>
      <Button color="primary" size="lg" onClick={this.handleSubmit}> Register </Button>
      </form>
      </FormContainer>
      </>
    );
  }
}
 
export default Register;