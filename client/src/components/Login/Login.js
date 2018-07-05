import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            usernameOrEmail: '',
            password: '',
            invalid: null
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:1433/api/auth/login', { username: this.state.usernameOrEmail, email: this.state.usernameOrEmail, password: this.state.password })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('jwt', response.data.token);
                    localStorage.setItem('userId', response.data.id);
                    this.props.history.push(`/${response.data.id}`);
                }
            })
            .catch(error => {
                if (error.response.status === 401) {
                    this.setState({ invalid: error.response.data });
                }
                else if (error.response.status === 400) {
                    this.setState({ invalid: error.response.data[1] });
                }
                else {
                    console.log(`Error: ${error.response.status} ${error.response.data[1]}`);
                }
            })
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'usernameOrEmail') {
            this.setState({ [name]: value.replace(' ', '').toLowerCase(), invalid: null });
        }
        else {
            this.setState({ [name]: value, invalid: null });
        }
    };

    render() {
        return (
            <div className='login'>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input name='usernameOrEmail' onChange={this.handleOnChange} placeholder='Username or Email' style={this.state.invalid ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='text' value={this.state.usernameOrEmail} />
                        {this.state.invalid ? <div className='invalid'>{this.state.invalid}</div> : null}
                    </div>
                    <div className='secondDiv'>
                        <input name='password' onChange={this.handleOnChange} placeholder='Password' style={this.state.invalid ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='password' value={this.state.password} />
                        {this.state.invalid ? <div className='invalid'>{this.state.invalid}</div> : null}
                    </div>
                    <div className='thirdDiv'><button type='submit'>Log In</button></div>
                </form>
            </div>
        )
    }
};

export default withRouter(Login); 