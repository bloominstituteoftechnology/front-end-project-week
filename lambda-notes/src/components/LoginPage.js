import React, { Component } from 'react';

class LoginPage extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    addLogin = () => {
        const username = this.state.username
        localStorage.setItem('user', username)
        window.location.reload()
    }

    render () {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        placeholder='Enter Username'
                        onChange= {this.handleChange}
                    />

                    <input
                        type='password'
                        name='password'
                        value={this.state.password}
                        placeholder='Enter Password'
                        onChange= {this.handleChange}
                    /> 

                    <button onClick={this.addLogin}>Login In</button>
                </form> 
            </div>
        );
    }
}

export default LoginPage