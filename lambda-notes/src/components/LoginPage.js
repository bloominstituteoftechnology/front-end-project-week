import React, { Component } from 'react';

import { LoginWrapper, LoginFormWrapper, LoginHeading, LoginForm,LoginFormInputLabel, LoginFormInput, LoginButton,  } from '../style';

class LoginPage extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    addLogin = () => {
        const username = this.state.username
        localStorage.setItem('user', username)
        window.location.reload()
    }

    render () {
        return (
            <LoginWrapper>
                <LoginHeading>Welcome to Lambda Notes</LoginHeading>
                <LoginFormWrapper>
                    <h2>Log in to Lambda Notes</h2>
                <LoginForm>
                    <LoginFormInputLabel>Username</LoginFormInputLabel>
                    <LoginFormInput
                        type='text'
                        name='username'
                        value={this.state.username}
                        placeholder='Enter Username'
                        onChange= {this.handleChange}
                    />
                    <LoginFormInputLabel>Password</LoginFormInputLabel>
                    <LoginFormInput
                        type='password'
                        name='password'
                        value={this.state.password}
                        placeholder='Enter Password'
                        onChange= {this.handleChange}
                    /> 

                    <LoginButton onClick={this.addLogin}>Login</LoginButton>
                </LoginForm> 
                </LoginFormWrapper>
            </LoginWrapper>
        );
    }
}

export default LoginPage