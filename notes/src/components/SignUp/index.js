import React from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      message: "Please fill out the form below",
      color: "light",
      error: ""
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
        this.setState({ color: "info", message: "Registering User..." });
        return this.props.registerUser(user);
      } else {
        this.setState({
          color: "danger",
          message: "Passwords do not match"
        });
      }
    } else {
      this.setState({
        color: "danger",
        message: "Password minimum of 8 characters. "
      });
    }
  };
  comparePasswords = () => {
    return this.state.password === this.state.password2 ? true : false;
  };
  render() {
    return (
      <Form className="auth_form" onSubmit={this.createUserObject}>
        <Alert color={this.state.color}>{this.state.message}</Alert>
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
        <Button color="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    register: state.authReducer.register,
    error: state.authReducer.error
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUp);
