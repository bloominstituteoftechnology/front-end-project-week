import React, { Component } from 'react';
import axios from 'axios';
import host from '../host';

class Register extends Component {
    constructor() {
        super();
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
            })
            .catch(err => {
                console.log('axios failed');
                console.log(err)
            })
    }
    
    render() {
        return (
            <div>
                <h1>Register Form</h1>
                <form onSubmit = {this.registerSubmitHandler}>
                    <div>
                        <input
                            type = 'text'
                            name = 'username'
                            value = {this.state.username} 
                            onChange = {this.inputChangeHandler}
                        /> 
                    </div>
                    <div>
                        <input
                            type = 'password'
                            name = 'password'
                            value = {this.state.password} 
                            onChange = {this.inputChangeHandler}
                        /> 
                    </div>
                    <div>
                        <button type = 'submit'>Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register