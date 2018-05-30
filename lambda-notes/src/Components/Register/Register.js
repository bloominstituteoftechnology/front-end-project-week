import React, { Component } from 'react';
import axios from 'axios'
import "./Register.css"


class Register extends Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            Password: ""
        }
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value});
        return e.target.value;
      }

      handleFormSubmit = (e) => {
          e.preventDefault();

          const newUser = {
              email: this.state.Email,
              password: this.state.Password
          }

          axios.post("https://noteslambda.herokuapp.com/users", newUser)
          .then(response => {
              console.log(response);
              alert("User created");
              this.props.history.push('/login')
          }).catch(err => {
              console.log(err);
          })

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
                    <button style={register}>Login</button>
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

export default Register;