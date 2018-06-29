import React from 'react'
import axios from 'axios'

class Register extends React.Component {
    state = {
        username: '',
        password: '',
    }

render() {
    return (
<div style={{textAlign: 'center', marginTop: '30vh'}}>
    <NavLink to="/login">Realized you have an account?  Click to log in! </NavLink>
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
                </div>
                <br />
                <br />
                <div>
                    <input 
                        style={{textAlign: 'center'}}
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        required
                        name="password"
                        onChange={this.inputChangeHandler} 
                    />
                </div>
                <div>
                <button type="submit"> Signin</button>
                </div>
        </form>
        </div>
        )
    }
    submitHandler = (event) => {
        event.preventDefault()
        axios.post('https://lambda-take-note.herokuapp.com/auth/register', { username: this.state.username, password: this.state.password, withCredentials: true })
            .then(response => {                
                this.props.history.push('/notes'); // using the redirection abilities of react-router to send user to the /users page
            }).catch( err => {
                alert('Username has already been taken')
            })
    }
    inputChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
}

export default Register