import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { withRouter } from "react-router-dom";
import { createUser } from "../actions/index";

function mapStateToProps(state) {
  return {};
}
function setErrorMsg(msg) {
  return {
    registerError: msg
  };
}

class Register extends Component {
  state = {
    redirect: true,
    registerError: null,
    username: "",
    password: ""
  };
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createUser({
      username: this.state.username,
      password: this.state.password
    });
    this.props.history.push("/");
  }
  handleOnChange(event) {
    event.preventDefault();
    console.log(event.target.name);
    let copy = this.state;
    copy[event.target.name] = event.target.value;
    this.setState(copy);
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <Form
          onSubmit={this.handleOnSubmit.bind(this)}
          onChange={this.handleOnChange.bind(this)}
        >
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="username"
              name="username"
              id="username"
              placeholder="Enter Your Username, Please"
              ref={username => (this.username = username)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              placeholder="Enter Password"
              type="password"
              name="password"
              id="password"
              ref={password => (this.password = password)}
            />
          </FormGroup>
          <h3>{this.state.registerError}</h3>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, { createUser })(Register));
