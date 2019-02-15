import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import './loginView.scss';
import axios from 'axios';


class loginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      password: '',
      password2: '',
      email: '',
      role: 'user',
      response: {}
    }
    this.password1 = React.createRef();
    this.password2 = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role: this.state.role
    }
    axios
      .post('http://localhost:5000/api/users/signup', user)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username)
      }
    )
    .catch(err => console.log(err));
    this.props.history.push('/')
  }


  render() {
    const { email, password, password2, username, name } = this.state;
    const isEnabled = email.length > 0 && username.length > 0 && name.length > 0 && password === password2 && password.length >= 6;
    return (
      <div className="loginPage">
        {console.log(this.state)}
        <h1>Register</h1>
        <Form onSubmit={(e) => this.handleSubmit(e)} onChange={this.handleChange} className="loginForm">
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" id="username" placeholder="username"></Input>
            <Label for="name">Full Name</Label>
            <Input type="text" name="name" id="name" placeholder="Name"></Input>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="email address" />
            <Label for="examplePassword">Password</Label>
            <Input ref={this.password1} type="password" name="password" id="password" placeholder="password" />
            <FormText>Please Make Your Password At Least 6 Characters</FormText>
            <Label for="confirmpassword">Confirm Password</Label>
            <Input ref={this.password2} type="password" name="password2" id="password2" placeholder="confirm password" />
          </FormGroup>
          <Button disabled={!isEnabled} color="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(loginView);