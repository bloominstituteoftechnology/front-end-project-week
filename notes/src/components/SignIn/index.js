import React from "react";
import { Button, Form, FormGroup, Input, Alert } from "reactstrap";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "Please fill out the form below",
      color: "light"
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  createUserObject = e => {
    e.preventDefault();

    if (this.state.email && this.state.password) {
      const user = {
        email: this.state.email,
        password: this.state.password
      };

      return this.props.loginUser(user);
    } else {
      return this.setState({
        color: "danger",
        message: "Enter valid login info."
      });
    }
  };
  render() {
    return (
      <Form className="auth_form" onSubmit={this.createUserObject}>
        <Alert color={this.state.color}>{this.state.message}</Alert>
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
        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.authReducer.error
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
