import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./Login.css"


class Login extends Component {
    constructor() {
        super();
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter' || e.charCode === 13 || e.keyCode === 13){
            this.handleFormSubmit();
        }
      }


    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

      handleFormSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.Email,
            password: this.state.Password
        }

        axios.post("https://noteslambda.herokuapp.com/users/login", user)
        .then(response => {
            console.log(response);
            alert("Logged in");
        }).catch(err => {
            console.log(err);
        })

    }
    render() {
        return(
            <div>
            <div className="loginBody">
                <form className="loginCard" onSubmit={this.handleFormSubmit}>
                    <h1>Sign in</h1>
                    <div className="inputs">
                        Email: <input onChange={this.handleInputChange} name="Email" type="text"></input>
                        Password: <input  onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} name="Password" type="password"></input>
                    </div>
                    <button style={login}>Login</button>
                </form>
            </div>
    </div>
        )
    }
}

const login = {
    textDecoration: "none",
    backgroundColor: "rgb(110, 200, 200)",
    border: "none",
    width: "30%",
    paddingTop: "1%",
    height: "5vh",
    cursor: "pointer"
}

export default Login;