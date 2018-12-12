import React from 'react'

import styles from '../css/Login.css';
class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username : '',
            password : '',
        }
    }
    logInFunction = () =>{
        localStorage.setItem('Username', this.state.username);
        window.location.reload()
    }
    inputHandler = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }
    render(){
        return(
            <form className = 'login-container'>
                <div className = 'header-container'>
                    <h1 className = 'login-header'>Lambda Notes Login</h1>
                </div>
                <div className = 'input-container'>
                    <input
                        className = 'username-input'
                        type = 'text'
                        name = 'username'
                        value = {this.state.username}
                        placeholder = 'Enter username'
                        onChange = {this.inputHandler}
                    />
                    <input
                        className = 'password-input'
                        type = 'text'
                        name = 'password'
                        value = {this.state.password}
                        placeholder = 'Enter password'
                        onChange = {this.inputHandler}
                    />
                    <button className = 'login-button' onClick = {this.logInFunction}>Log in</button>
                </div>
            </form>
        )
    }
}
export default Login;