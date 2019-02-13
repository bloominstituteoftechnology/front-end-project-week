import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  changeHandler = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  createUserObject = e => {
    e.preventDefault();

    const user = Object.assign({}, this.state);

    return this.props.registerUser(user);
  };
  render() {
    return (
      <Form>
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
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SignIn;
