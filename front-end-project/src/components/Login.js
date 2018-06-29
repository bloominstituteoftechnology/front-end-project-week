import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

render() {
    return (
        <div>
        <NavLink to="/register">Realized you don't have an account?  Click to Register! </NavLink>
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
                        placeholder="password"
                        required
                        onChange={this.inputChangeHandler} 
                        />
                    <label htmlFor="password" />
                </div>
                <div>
                <button type="submit"> Signin</button>
                </div>
        </form>
        <button><a href="/auth/facebook">Login with Facebook</a></button>
        </div>
        </div>
        )
    }
    submitHandler = (event) => {
        event.preventDefault()

        axios.post('https://lambda-take-note.herokuapp.com/login', this.state)
            .then(response => { 
                this.props.history.push('/notes'); // using the redirection abilities of react-router to send user to the /users page
            }).catch( err => {
                console.log('Sad')
            })
    }
    inputChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
}

export default Login