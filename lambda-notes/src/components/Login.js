import React, { Component } from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const initialUser = {
    username: '',
    password: '',
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { ...initialUser },
            message: ''
        };
    }

    inputHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ user: { ...this.state.user, [name]: value } });
    }

    submitHandler = (event) => {
        event.preventDefault();
        axios.post(`${url}/api/login`, this.state.user)
            .then((res) => {
                if (res.status === 200 && res.data) {
                    console.log(res.data)
                    localStorage.setItem('secret_token', res.data.token);
                    this.props.history.push('/');
                } else {
                    throw new Error();
                }
            })
            .catch((err) => {
                this.setState({
                    message: 'Authentication failed.',
                    user: { ...initialUser },
                });
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="username">Username</label>
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
                {this.state.message ? (<h4>{this.state.message}</h4>) : undefined}
            </div>

        );
    }
}

export default Login;