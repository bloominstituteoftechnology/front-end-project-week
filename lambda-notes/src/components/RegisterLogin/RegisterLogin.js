import axios from 'axios';
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
        loginPassword: "",
        registerError: ""
    }

    inputChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    saveUser = (e) => {
        if(!this.state.email || !this.state.username || !this.state.password) {
            this.setState({registerError: 'Please provide all required fields.'})
        }
        const newUser = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }

        e.preventDefault();
        this.props.registerUser(newUser);
        this.setState({email: "", username: "", password: ""})
    }

    loginUser = (e) => {
        e.preventDefault();
        const user = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        }
        axios
            .post('https://lambda-note.herokuapp.com/api/users/login', user)
            
            .then(response => {
                console.log(response)
            
                localStorage.setItem('token', response.data.token);
                console.log(response.data.user._id)
                localStorage.setItem('userId', response.data.user._id)
                this.props.history.push('/notes')
            })
            .catch(err => {
                localStorage.removeItem('token');
            })

        this.setState({loginUsername: "", loginPassword: ""})
    }

    render() {

        const errorStyle = {
            color: "#cc0000",
            fontSize: "22px",
            fontWeight: "bold"
        }

        return (
            <div className="homePage">
                <div className="login-register">
                    <div className="login-header">
                    {/* {this.state.error && (<div style={errorStyle}>{this.state.error}</div>)} */}
                    <input className="login-input" onChange={this.inputChangeHandler} placeholder="username" type="text" name="loginUsername" value={this.state.loginUsername}></input>
                    <input className="login-input"  onChange={this.inputChangeHandler} placeholder="password" type="password" name="loginPassword" value={this.state.loginPassword}></input>
                    <button onClick={this.loginUser}className="loginBtn">Login</button>
                    </div>
                </div>
                {/* {req.status == 401 && (<div>Hi</div>)} */}
                <h1 className="LambdaNotes">LAMBDA NOTES</h1>
                {this.state.registerError && (<div style={errorStyle}>{this.state.registerError}</div>)}
                <div className="register-form">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email*</Label>
                            <Input onChange={this.inputChangeHandler} type="email" name="email" id="exampleEmail" placeholder="enter your email" value={this.state.email} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Username*</Label>
                            <Input onChange={this.inputChangeHandler} type="text" name="username" placeholder="select a username" value={this.state.username} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password*</Label>
                            <Input onChange={this.inputChangeHandler} type="password" name="password" id="examplePassword" placeholder="select a password" value={this.state.password}/>
                        </FormGroup>
                            <Button onClick={this.saveUser}>Register</Button>
                    </Form>
                </div>
            </div>
        )
    }
}


export default connect(null, { registerUser })(RegisterLogin);