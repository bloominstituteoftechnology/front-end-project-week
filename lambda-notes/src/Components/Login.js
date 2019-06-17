import React, { Component } from 'react';
import axios from 'axios';
import host from '../host';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color:#D8D8D8
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    inputChangeHandler = e => {
        e.preventDefault();
        const {name, value} = e.target;
        console.log('name: ', name, 'value: ', value);
        this.setState({[name]: value});
    }

    loginSubmitHandler = e => {
        e.preventDefault();
        let loginData = {
            'username': this.state.username,
            'password': this.state.password
        };
        console.log(`${host}/api/login`)
        axios
            .post(`${host}/api/login`, loginData) 
            .then(res=> {
                console.log('res: ', res);
                const lambdaNotesToken = res.data.token;
                const lambdaNotesUserId = res.data.userId;
                localStorage.setItem('lambdaNotesToken', lambdaNotesToken);
                localStorage.setItem('lambdaNotesUserId', lambdaNotesUserId);
                this.props.fetchNoteEntries()

            })
            .catch(err => {
                console.log('axios failed');
                console.log(err)
            })
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.loginSubmitHandler}>
                    <div>
                        <StyledInput
                            type = 'text'
                            name = 'username'
                            placeholder="username"
                            value = {this.state.username} 
                            onChange = {this.inputChangeHandler}
                        /> 
                    </div>
                    <div>
                        <StyledInput
                            type = 'password'
                            name = 'password'
                            placeholder="password"
                            value = {this.state.password} 
                            onChange = {this.inputChangeHandler}
                        /> 
                    </div>
                    <div>
                        <button type = 'submit'>Login</button>
                    </div>
                    <br/>
                    <div onClick = {this.props.toggleRegisterAndLoginFormVisibility}>
                        Don't have an account? Click here to Register.
                    </div>
                </form>
            </div>
        )
    }
}

export default Login