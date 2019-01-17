import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: '',
        status: 0
    };

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    submitHandler = e => {
        e.preventDefault();
        axios
        .post('https://lambda-notes-api.herokuapp.com/api/login', this.state)
        .then(res => {
            const {token} = res.data;
            localStorage.setItem('token', token);
            this.props.history.push('/notes');
        })
        .catch(err => {
            const error = JSON.stringify(err);
            if (error.includes('401')) {
                this.setState({ status: 401})
            }
        });
    }

  render() {
    return (
        <div className="login-page">
            <div className="outer-div">
            <div className="link-buttons">
                <Link to={`/`}>Login</Link>
                <Link to={`/signup`}>Sign Up</Link>
            </div>
            <div className="inner-div">
                <form className="form-div" onSubmit={this.submitHandler}>
                    <input
                    value={this.state.username}
                    onChange={this.inputChangeHandler}
                    type="text"
                    placeholder="Username"
                    name="username"
                    />
                    <input
                    value={this.state.password}
                    onChange={this.inputChangeHandler}
                    type="password"
                    placeholder="Password"
                    name="password"
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
            </div>
            <p style={ this.state.status === 401 ? 
                { color: "red", textAlign: "center", marginTop: "20px" } : { display: "none" } }>
                Invalid username or password.
            </p>
        </div>
    );
  }

}

export default Login;
