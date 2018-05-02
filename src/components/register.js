import React, { Component } from "react";
import { connect } from 'react-redux';
import { register } from '../actions/index';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

let divStyle = {
  width: "80%"
};

class Register extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  };
  signupSubmitHandler = event => {
    event.preventDefault();
    if (this.password === this.confirmPassword) {
      //console.log('props: ', this.props, "this.props.history: ", this.props.history);
      this.props.register(this.state.username, this.state.password,this.state.confirmPassword, this.state.firstName,this.state.lastName);
      this.setState({password:''});
      this.setState({confirmPassword:''});
      this.props.history.push('/');
    } else {
      console.log('Passwords did not match');
    }
  };

  signupInputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  render() {
    //console.log(this.props);
    return (
      <Container>
        <div className="d-flex justify-content-center mt-5 mb-4">
          <h3>Sign up to take awesome notes!</h3>
        </div>
        <Form onSubmit={this.signupSubmitHandler.bind(this)}>
          <div className="d-flex ">
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className="d-flex w-100 p-2"
                required
                type="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.signupInputHandler}
                placeholder="Enter your first name"
              />
            </FormGroup>
            <FormGroup>
              <Label className="ml-3" for="lastName">
                Last Name
              </Label>
              <Input
                className="d-flex w-100 ml-3 p-2"
                required
                type="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.signupInputHandler}
                placeholder="Enter your last name"
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="username">User Name</Label>
              <Input
                className=" p-2"
                style={divStyle}
                required
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.signupInputHandler}
                placeholder="Enter your user name"
              />
            </FormGroup>
          </div>
          <div className="d-flex">
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                className="d-flex w-100 p-2"
                required
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.signupInputHandler}
                placeholder="Enter your password"
              />
            </FormGroup>
            <FormGroup>
              <Label className="ml-3" for="ConfirmPassword">
                Confirm Password
              </Label>
              <Input
                className="d-flex w-100 ml-3 p-2"
                required
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.signupInputHandler}
                placeholder="Confirm your password"
              />
            </FormGroup>
          </div>

          <Button>Sign Up</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {}
};

export default connect(mapStateToProps, { register })(Register);
