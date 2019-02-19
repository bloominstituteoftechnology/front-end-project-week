import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  render() {
    return (

        <form onSubmit = {this.handleSubmit}>
            <div>
                <label htmlFor="username">Username
                    <input 
                    type = "text"
                    name = "username"
                    placeholder = "username"
                    onChange = {this.changeHandler}
                    value = {this.state.username}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="password">Password
                    <input 
                    type = "password"
                    name = "password"
                    placeholder = "password"
                    onChange = {this.changeHandler}
                    value = {this.state.password}
                    />
                </label>
            </div>
            <div>
                <button type = "submit">Login</button>
            </div>

        </form>
    );
  }

    changeHandler = (event) => {
        console.log(event.target.name);
        this.setState({ 
        ...this.state,
        [event.target.name]: event.target.value
    })
  }

    handleSubmit = (event) => {
        event.preventDefault();
        const endpoint = 'https://beplambdanotes.herokuapp.com/api/login';
        console.log(this.state)
        axios.post(endpoint, this.state)
        .then(res => {
        console.log(res.data);
        this.setState({ state: res.data })

    }).catch(err => {
        console.error('ERROR', err)
    })
  }
}

export default Login; 