import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  inputChangeHandle = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  loginSubmitHandle = ev => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div className='styledLogin'>
          <Form className="login-form">
            <h3>Welcome to Lambda Notes</h3>
            <div>Please Login</div>
            <FormGroup>
              <Input
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.inputChangeHandle}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.inputChangeHandle}
              />
              <br />
              <Button color="success" size="large" onClick={this.loginSubmitHandle}>
                Log In
              </Button>
            </FormGroup>
          </Form>
      </div>
    );
  }
}

export default Login;
