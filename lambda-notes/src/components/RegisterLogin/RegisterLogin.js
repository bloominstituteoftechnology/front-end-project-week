import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './RegisterLogin.css';

class RegisterLogin extends Component {
    state = {
        username: "", 
        password: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="homePage">
                <div className="login-register">
                    <div className="login-header">
                    <input className="login-input" onChange={this.changeHandler} placeholder="username" type="text" name="username" value={this.state.username}></input>
                    <input className="login-input"  onChange={this.changeHandler} placeholder="password" type="password" name="password" value={this.state.password}></input>
                    <button className="loginBtn">Login</button>
                    </div>
                </div>
                <div className="register-form">
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="enter your email" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleText">Username</Label>
                        <Input type="text" name="text" placeholder="select a username" />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="select a password" />
                        </FormGroup>
                        <Button>Register</Button>
                    </Form>
                </div>
            </div>
        )
    }
}


export default RegisterLogin;