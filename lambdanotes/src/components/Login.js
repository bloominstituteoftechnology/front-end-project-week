import React from 'react'
import axios from 'axios';

import "../styles/Login.css"

import Signup from './Signup';

//import Auth from './../Auth/Auth.js';
// const auth = new Auth();
// auth.login();

//import LoginControl from './LoginControl';


class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            //loggedIn: false,
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    // handleSubmit = event => {
    //     const user = this.state.username;
    //     const password = this.state.password;
    //     localStorage.setItem('user', user);
    //     localStorage.setItem('password', password);
    //     window.location.reload();
    // }

    handleSubmit = event => {
        event.preventDefault();
        const credentials = this.state;
        let endpoint = 'http://localhost:3000/login';


        axios.post(endpoint, credentials)
        .then(res => {
            console.log('response data from login', res.data)  //token data
            localStorage.setItem('jwt', res.data.token)        //token stored on localStorage
            window.location.reload();
        })
        .catch(err => {
            console.log('err from login', err);
        })
    }


    render(){
   
        return (
            <>
                    <div className="loginform-container">
                        <form className="loginform" onSubmit={this.handleSubmit}>
                            <input 
                                className="login-input"
                                placeholder="username"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <input 
                                className="login-input"
                                placeholder="password"
                                type="text"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <button className="login-button" name="login" onClick={this.handleSubmit}>Login</button>
                        </form>
                    </div>
                    <div>
                        <Signup/>
                    </div>
                    <div>
                        <h1>Auth0</h1>
                        {/* <LoginControl /> */}
                    </div>
            </>
        )
    }
}


export default Login