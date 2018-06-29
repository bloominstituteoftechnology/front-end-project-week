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
        axios.post('https://lambda-take-note.herokuapp.com/auth/register', this.state)
            .then(response => {
                console.log(response, 'response from register post')
                
                this.props.history.push('/notes'); // using the redirection abilities of react-router to send user to the /users page
            }).catch( err => {
                this.props.history.push('/auth/register')
            })
    }
    inputChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
}

export default Register