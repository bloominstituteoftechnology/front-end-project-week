import React, { Component } from 'react';
import axios from 'axios';
import host from '../host';

class Login extends Component {
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
            })
            .catch(err => {
                console.log('axios failed');
                console.log(err)
            })
    }
    
    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit = {this.loginSubmitHandler}>
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
                        <button type = 'submit'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login