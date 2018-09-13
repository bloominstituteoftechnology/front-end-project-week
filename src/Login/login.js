import React, { Component } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import {
    Button,
    Input,
    Col,
    Row,
    InputGroup,
    InputGroupAddon,
    Form,
    Card
   
  } from "reactstrap";
class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  login = event => {
    event.preventDefault();
  const user ={};
  if (this.state.username !==""){
      user.username = this.state.username
  }
  if(this.state.password !==""){
      user.password = this.state.password
  }
  console.log(user)
axios
.post('http://localhost:5000/users/login',user)
.then(response=>{
    console.log(response.data.token)
localStorage.setItem('token', response.data.token);
this.props.history.push('/')
})
.catch(err=>{
    localStorage.removeItem('token');
})
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
        <React.Fragment> 
        <Card>
        <Form onSubmit={this.login} className="form-styles">
        <InputGroup >
       
          <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
          <Input
           onChange={this.handleInputChange}
           placeholder="Username"
           value={this.state.title}
           onSubmit={this.login}
           name="username"
          />
        </InputGroup>
      
        <InputGroup >
          <InputGroupAddon addonType="prepend">password</InputGroupAddon>
          <Input 
        
           onChange={this.handleInputChange}
           placeholder="password"
           onSubmit={this.login}
           value={this.state.textbody}
           name="password"
           />
        </InputGroup>
        <Row className="modalBtn-styles">
          <Col xs="auto">
      <Link to="/">  <Button color="success" className="noteBtn-style" onClick={this.login} type="submit">Log-In</Button></Link>
            </Col>
          <Col xs="auto">
        <Button color="danger" className="noteBtn-style cancelBtn-styles" onClick={this.props.toggle} >Cancel</Button>
        </Col>
        
        </Row>
</Form>
</Card>
      </React.Fragment>
    );
  }
}
export default SignIn;
