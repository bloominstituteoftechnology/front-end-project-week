import React, { Component } from 'react';
import './SignIn.css'
import {Link} from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() { 
        return ( 
            <form className="login-form">
                <h3>Sign In</h3>
                <input
                    type="text"
                    onChange={this.handleInput}
                    name="username"
                    value={this.state.username}
                    placeholder="Username"
                />
                <input
                    type="text"
                    onChange={this.handleInput}
                    name="password"
                    value={this.state.password}
                    placeholder="Password"
                />
                <Link to="/">
                    <button>Sign In</button>
                </Link>
            </form>
         )
    }
}
 
export default SignIn;