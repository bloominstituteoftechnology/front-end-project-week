import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    submitHandler = e => {
        e.preventDefault();
        axios
        .post('http://localhost:8000/api/login', this.state)
        .then(res => {
            console.log('response', res)
            const {token} = res.data;
            localStorage.setItem('token', token);
            this.props.history.push('/notes');
        })
        .catch(err => {
            console.error('Axios error:', err);
        });
    }

  render() {
    return (
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
    );
  }

}

export default Login;
