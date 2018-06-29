import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const url = process.env.NODE_ENV === "development" ? "http://localhost:5000" : "https://lambda-take-note.herokuapp.com"

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

render() {
    return (
        <div>
    <div style={{textAlign: 'center', marginTop: '30vh'}}>
        <form onSubmit={this.submitHandler}>
            <div>
                <input
                    style={{textAlign: 'center'}}
                    type="text"
                    value={this.state.username}
                    name="username"
                    placeholder="Username"
                    required
                    onChange={this.inputChangeHandler}
                    />
                <label htmlFor="username" />
                </div>
                <br/>
                <br/>
                <div>
                    <input
                        style={{textAlign: 'center'}}
                        type="password"
                        value={this.state.password}
                        name="password"
                        placeholder="Password"
                        required
                        onChange={this.inputChangeHandler} 
                        />
                    <label htmlFor="password" />
                </div>
                <div>
                <button type="submit"> Log In </button>
                </div>
        </form>
        </div>
        <br/>
        <NavLink to="/register" style={{fontSize: '1.5rem', color: 'red', textDecoration: 'none', display: 'block', textAlign: 'center', bottom: '0'}}>Realized you don't have an account?  Click to Register! </NavLink>
        </div>
        )
    }
    submitHandler = (event) => {
        event.preventDefault()
        axios.post(`${url}/auth/register`, { username: this.state.username, password: this.state.password, withCredentials: true })
            .then(response => { 
                this.props.history.push('/notes'); // using the redirection abilities of react-router to send user to the /users page
            }).catch( err => {
                alert(err.message)
            })
    }
    inputChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
}

export default Login