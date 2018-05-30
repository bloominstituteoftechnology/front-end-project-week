import React, { Component } from 'react';
import axios from 'axios'
import {withRouter} from "react-router-dom"
import {ClipLoader} from "react-spinners"
import "./Register.css"


class Register extends Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            Password: "",
            loading: false,
        }
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

      handleFormSubmit = (e) => {
        this.setState({
            loading: true
        })
          e.preventDefault();

          const newUser = {
              email: this.state.Email,
              password: this.state.Password
          }

          axios.post("https://noteslambda.herokuapp.com/users", newUser)
          .then(response => {
              console.log(response);
              this.props.history.push('/login')
          }).catch(err => {
              console.log(err);
              window.location.reload(true);
              alert("Error creating user")
          })
      }

      sendToLogin = () => {
          this.props.history.push("login")
      }




    render() {
        return(
            <div>
            <div className="registerBody">
                <form className="registerCard" onSubmit={this.handleFormSubmit}>
                    <h1>Register</h1>
                    <div className="inputs">
                        Email: <input onChange={this.handleInputChange} name="Email" type="text"></input>
                        Password: <input  onChange={this.handleInputChange} name="Password" type="password"></input>
                    </div>
                    <button style={register}>Register</button>
                    <button onClick={this.sendToLogin} style={register}>Sign In</button>

                    <div className="sweet-loading">
                        <ClipLoader
                        color={"#666"}
                        size={80}
                        loading={this.state.loading}
                        />
                    </div>
                </form>
            </div>
    </div>
        )
    }
}

const register = {
    textDecoration: "none",
    backgroundColor: "rgb(110, 200, 200)",
    border: "none",
    width: "30%",
    paddingTop: "1%",
    height: "5vh",
    cursor: "pointer"
}

export default withRouter(Register);