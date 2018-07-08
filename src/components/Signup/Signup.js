import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            firstnameError: null,
            lastname: '',
            lastnameError: null,
            email: '',
            emailError: null,
            username: '',
            usernameError: null,
            password: '',
            passwordMatch: '',
            passwordError: null
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.passwordMatch) {
            this.setState({ passwordError: 'Passwords do not match.' });
            return;
        }
        else {
            axios.post('https://lambda-notes0706.herokuapp.com/api/auth/signup', { firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, username: this.state.username, password: this.state.password })
                .then(response => {
                    this.props.history.push('/login');
                })
                .catch(error => {
                    if (error.response.status === 400 && error.response.data[0] === 'firstname') {
                        this.setState({ firstnameError: error.response.data[1] });
                    }
                    else if (error.response.status === 400 && error.response.data[0] === 'lastname') {
                        this.setState({ lastnameError: error.response.data[1] });
                    }
                    else if (error.response.status === 400 && error.response.data[0] === 'email') {
                        this.setState({ emailError: error.response.data[1] });
                    }
                    else if (error.response.status === 400 && error.response.data[0] === 'username') {
                        this.setState({ usernameError: error.response.data[1] });
                    }
                    else if (error.response.status === 400 && error.response.data[0] === 'password') {
                        this.setState({ passwordError: error.response.data[1] });
                    }
                    else {
                        console.log(`Error: ${error.response.status} ${error.response.data[1]}`);
                    }
                })
        }
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'firstname') {
            this.setState({ [name]: value.replace(' ', ''), firstnameError: null });
        }
        else if (name === 'lastname') {
            this.setState({ [name]: value.replace(' ', ''), lastnameError: null });
        }
        else if (name === 'email') {
            this.setState({ [name]: value.replace(' ', '').toLowerCase(), emailError: null });
        }
        else if (name === 'username') {
            this.setState({ [name]: value.replace(' ', '').toLowerCase(), usernameError: null });
        }
        else if (name === 'password' || name === 'passwordMatch') {
            this.setState({ [name]: value, passwordError: null });
        }
        else {
            this.setState({ [name]: value.replace(' ', '') });
        }
    };

    render() {
        return (
            <div className='signup'>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input name='firstname' onChange={this.handleOnChange} placeholder='First Name' style={this.state.firstnameError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='text' value={this.state.firstname} />
                        {this.state.firstnameError ? <div className='firstnameError'>{this.state.firstnameError}</div> : null}
                    </div>
                    <div>
                        <input name='lastname' onChange={this.handleOnChange} placeholder='Last Name' style={this.state.lastnameError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='text' value={this.state.lastname} />
                        {this.state.lastnameError ? <div className='lastnameError'>{this.state.lastnameError}</div> : null}
                    </div>
                    <div>
                        <input name='email' onChange={this.handleOnChange} placeholder='Email' style={this.state.emailError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='text' value={this.state.email} />
                        {this.state.emailError ? <div className='emailError'>{this.state.emailError}</div> : null}
                    </div>
                    <div>
                        <input name='username' onChange={this.handleOnChange} placeholder='Username' style={this.state.usernameError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='text' value={this.state.username} />
                        {this.state.usernameError ? <div className='usernameError'>{this.state.usernameError}</div> : null}
                    </div>
                    <div>
                        <input name='password' onChange={this.handleOnChange} placeholder='Password' style={this.state.passwordError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='password' value={this.state.password} />
                        {this.state.passwordError ? <div className='passwordError'>{this.state.passwordError}</div> : null}
                    </div>
                    <div>
                        <input name='passwordMatch' onChange={this.handleOnChange} placeholder='Confirm Password' style={this.state.passwordError ? { borderBottom: '1.5px solid red' } : { borderBottom: '1.5px solid #979797' }} type='password' value={this.state.passwordMatch} />
                        {this.state.passwordError ? <div className='passwordError'>{this.state.passwordError}</div> : null}
                    </div>
                    <div className='submitButton'>
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(Signup); 