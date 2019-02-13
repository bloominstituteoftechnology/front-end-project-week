import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: ""
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
      <Form onSubmit={this.createUserObject}>
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
