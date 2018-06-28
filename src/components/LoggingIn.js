import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

class LoggingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {         
      username:"wvandolah",
      password:"test12345",
      
     }
  }

  componentDidMount(){
    
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const newLogin = Object.assign({}, this.state);
    if(newLogin.username !== "" && newLogin.password !== ""){
      this.props.login(newLogin);
    }
    

    this.setState({
      username: "",
      password: ""
    })

    

  };

  render() { 
    
    return ( 
      <Form>
        <FormGroup>
          <Input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="Username"/>
        </FormGroup>        
        <FormGroup>
          <Input type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="password"/>
        </FormGroup>
        <Button onClick={this.handleSubmit} className="side-button col-4">{this.props.buttonText}</Button>
        
      </Form> 
     );
  }
}
 
export default LoggingIn;