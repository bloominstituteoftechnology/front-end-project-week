import React, { Component } from 'react';
import axios from 'axios';
import host from '../host';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color:#D8D8D8
`

class Register extends Component {
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

    registerSubmitHandler = e => {
        e.preventDefault();
        let registerData = {
            'username': this.state.username,
            'password': this.state.password
        };
        axios
            .post(`${host}/api/register`, registerData) 
            .then(res=> {
                console.log('res: ', res);
                const lambdaNotesToken = res.data.token;
                const lambdaNotesUserId = res.data.userId;
                localStorage.setItem('lambdaNotesToken', lambdaNotesToken);
                localStorage.setItem('lambdaNotesUserId', lambdaNotesUserId);
                this.props.fetchNoteEntries();
            })
            .catch(err => {
                console.log(err)
                let errorMessage = err;
                if (errorMessage.message === "Request failed with status code 401") {
                    this.setState({errorMessage:'Invalid Credentials'})
                } else {
                    this.setState({errorMessage:errorMessage.message})
                }
            })
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.registerSubmitHandler}>
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
                        <button type = 'submit'>Register</button>
                    </div>
                    <br/>
                    {this.state.errorMessage 
                        ?
                        <div style = {{color:'red'}}>{this.state.errorMessage}</div>
                        :
                        null
                    }
                    <br/>
                    <div onClick = {this.props.toggleRegisterAndLoginFormVisibility}>
                        Already have an account? Click here to login.
                    </div>
                </form>
            </div>
        )
    }
}

export default Register