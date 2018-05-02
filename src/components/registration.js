import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
  state = {
    authed: false,
    username: '',
    password: ''
  };

  loginSubmitHandler = event => {
    event.preventDefault();
    console.log('history in the props:', this.props.history);
    this.props.login(this.state.username, this.state.password, this.props.history);
    this.setState({ password: '' });
    if (this.props.authed) {
      this.props.history.push('/displayNotes');
    }
  };

  loginInputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form onSubmit={this.loginSubmitHandler.bind(this)}>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input
            className="d-flex w-125 p-2"
            required
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.loginInputHandler}
            placeholder="Enter your user name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            className="d-flex w-100 p-2"
            required
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.loginInputHandler}
            placeholder="Enter your password"
          />
        </FormGroup>
        <Button>Sign In</Button>
      </Form>
    );
  }
}

export default Registration;
