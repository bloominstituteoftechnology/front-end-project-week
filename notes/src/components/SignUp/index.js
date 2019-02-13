import React from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      error: "Please fill out the form below",
      color: "light"
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  createUserObject = e => {
    e.preventDefault();
    if (this.state.password.length > 7) {
      if (this.comparePasswords()) {
        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        };
        this.setState({ color: "info", error: "Registering User..." });
        console.log(user);
      } else {
        this.setState({
          color: "danger",
          error: "Passwords do not match"
        });
      }
    } else {
      this.setState({
        color: "danger",
        error: "Password minimum of 8 characters. "
      });
    }
    // return this.props.registerUser(user);
  };
  comparePasswords = () => {
    return this.state.password === this.state.password2 ? true : false;
  };
  render() {
    return (
      <Form onSubmit={this.createUserObject}>
        <Alert color={this.state.color}>{this.state.error}</Alert>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.changeHandler}
            value={this.state.name}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.changeHandler}
            value={this.state.email}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.changeHandler}
            value={this.state.password}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password2"
            placeholder="retype password"
            onChange={this.changeHandler}
            value={this.state.password2}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SignUp;
