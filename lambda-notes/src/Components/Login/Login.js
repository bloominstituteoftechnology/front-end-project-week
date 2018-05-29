import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"


class Login extends Component {
    constructor() {
        super();
        // this.state = {
        //     loginUser: {
        //         Username: "Admin",
        //         Password: "Password"
        //     },
        //     link: "#"
        // }
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter' || e.charCode === 13 || e.keyCode === 13){
            this.check();
        }
      }

    //   linkChange = () => {
    //     this.setState ({
    //         link: "/home"
    //     })
    //   }

    //   check = () => {
    //     this.state.Username === this.state.loginUser.Username
    //         &&
    //    this.state.Password === this.state.loginUser.Password
    //    ? (
    //        this.linkChange()
    //    ) : (
    //        this.setState({
    //            link: '#'
    //        })
    //    )
    //   }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

    // display = () => {
    //     this.setState({
    //         display: !this.state.display
    //     })
    // }

    render() {
        return(
            <div>
            <div className="loginBody">
                <div className="loginCard">
                    <h1>Sign in</h1>
                    <div className="inputs">
                        Username: <input onChange={this.handleInputChange} name="Username" type="text"></input>
                        Password: <input  onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} name="Password" type="password"></input>
                    </div>
                    <button style={login}>Login</button>
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
    paddingTop: "1%",
    height: "5vh",
    cursor: "pointer"
}

export default Login;