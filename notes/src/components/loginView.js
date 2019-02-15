import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Formtext } from 'reactstrap'
import './loginView.scss';

class loginView extends Component {
  render() {
    return (
      <div className="loginPage">
        <h1>Register</h1>
        <Form className="loginForm">
          <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="username"></Input>
          <Label for="name">Full Name</Label>
          <Input type="text" name="fullname" id="fullname" placeholder="fullname"></Input>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="email address" />
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password" />
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="confirmpassword" id="confirmpassword" placeholder="confirm password" />
          </FormGroup>
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(loginView);