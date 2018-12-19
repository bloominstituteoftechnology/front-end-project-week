import React, { Component } from 'react';

import { LoginWrapper, LoginFormWrapper } from '../style';

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
                <LoginFormWrapper>
                    <h2>Log in to Lambda Notes</h2>
                <form>
                    <p>Email <span>(or username</span></p>
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        placeholder='Enter Username'
                        onChange= {this.handleChange}
                    />
                    <h3>Password</h3>
                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        placeholder='Enter Password'
                        onChange= {this.handleChange}
                    /> 

                    <button onClick={this.addLogin}>Login In</button>
                </form> 
                </LoginFormWrapper>
            </LoginWrapper>
        );
    }
}

export default LoginPage