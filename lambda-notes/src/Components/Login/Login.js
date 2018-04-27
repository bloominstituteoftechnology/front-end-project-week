import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            loginUser: {
                Username: "Admin",
                Password: "Password"
            }
        }
    }

    handleKeyPress = (e) => {
        if(e.key == 'Enter' || e.charCode == 13 || e.keyCode == 13){
            this.check();
        }
      }

      check = () => {
        {this.state.Username === this.state.loginUser.Username
            &&
       this.state.Password === this.state.loginUser.Password
       ? (
           this.display()
       ) : (
           alert('Incorrect username or password')
       )}
      }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

    display = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return(
            <div>
            <div className="loginBody">
                <div className="loginCard">
                    <h1>Sign in</h1>
                    <div className="inputs">
                        Username: <input onChange={this.handleInputChange} name="Username" type="text"></input>
                        Password: <input onKeyPress={this.handleKeyPress} onChange={this.handleInputChange} name="Password" type="password"></input>
                    </div>
                    <button  onClick={this.check} style={login}>Login</button>
                </div>
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
    height: "10vh",
    cursor: "pointer"
}

export default Login;