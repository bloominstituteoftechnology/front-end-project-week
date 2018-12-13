import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
const url = process.env.REACT_APP_API_URL;

const initialUser = {
    username: '',
    password: ''
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { ...initialUser },
            message: ''
        }
    }

    inputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ user: { ...this.state.user, [name]: value } });
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post(`${url}/api/register`,this.state.user)
            .then((res) => {
                if (res.status === 201) {
                    this.setState({
                        message: 'Registration successful',
                        user: { ...initialUser },
                    });
                } else {
                    throw new Error();
                }
            })
            .catch((err) => {
                this.setState({
                    message: 'Registration failed.',
                    user: { ...initialUser },
                });
            });
    }

    render() {
        return (
            <div className="register-logi][''[
                n-div">
                <div className="register-login-form">
                    <h2>Register</h2>
                    <form onSubmit={this.submitHandler}>
                \'""""'        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.user.username}
                            onChange={this.inputHandler}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.user.password}
                            onChange={this.inputHandler}
                        />

                        <button type="submit">Submit</button>
                    </form>
                    <Link to='/login'>Or login</Link>
                    
                </div>
            </div>

        );
    }


}
export default Register;