import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header } from './Header';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        let promise = axios.post("https://notepen.herokuapp.com/api/auth/login", this.state);
        promise 
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="login-form">
                <div className="login-header">
                    <Header text="Please login"/>
                    <div className="input-div">
                        <label>Username:</label>
                        <input placeholder="Enter username" type="text" name= "username" onChange={this.handleChange} className="input-text" value={this.state.username} required/>
                    </div>
                    <div className="input-div">
                        <label>Password:</label>
                        <input placeholder="Enter password" type="password" name= "password" onChange={this.handleChange} className="input-text" value={this.state.password} required/>
                    </div>
                    <div className="account-already">Already have an account? Please register <Link>here!</Link></div>
                    
                    <Link to="/" onClick={this.handleSubmit}><div  className="button submit-button">Submit</div></Link>
                </div>
            </div>
        );
    }
}

export default Login;