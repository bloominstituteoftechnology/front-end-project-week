import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';

import './RegisterLogin.css';
import { registerUser } from '../../actions';

class RegisterLogin extends Component {
    state = {
        email: "",
        username: "", 
        password: "",
        loginUsername: "",
        loginPassword: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveUser = (e) => {
        const newUser = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        e.preventDefault();
        this.props.registerUser(newUser);
        this.setState({email: "", username: "", password: ""})

    }

    render() {
        return (
            <div className="homePage">
                <div className="login-register">
                    <div className="login-header">
                    <input className="login-input" onChange={this.changeHandler} placeholder="username" type="text" name="loginUsername" value={this.state.loginUsername}></input>
                    <input className="login-input"  onChange={this.changeHandler} placeholder="password" type="password" name="loginPassword" value={this.state.loginPassword}></input>
                    <button className="loginBtn">Login</button>
                    </div>
                </div>
                <div className="register-form">
                    <Form>
                        <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input onChange={this.changeHandler} type="email" name="email" id="exampleEmail" placeholder="enter your email" value={this.state.email} />
                        </FormGroup>
                        <FormGroup>
                        <Label for="exampleText">Username</Label>
                        <Input onChange={this.changeHandler} type="text" name="username" placeholder="select a username" value={this.state.username} />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input onChange={this.changeHandler} type="password" name="password" id="examplePassword" placeholder="select a password" value={this.state.password}/>
                        </FormGroup>
                        <Button onClick={this.saveUser}>Register</Button>
                    </Form>
                </div>
            </div>
        )
    }
}


export default connect(null, { registerUser })(RegisterLogin);