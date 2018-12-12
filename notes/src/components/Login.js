import React from 'react';
import styled from 'styled-components';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitLogin = event => {
        event.preventDefault();
        localStorage.setItem('user', this.state.username);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Enter you username" name="username" value={this.state.username} onChange={this.handleInput} />
                    <input type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleInput} />
                    <button onClick={this.handleSubmitLogin}>Log in</button>
                </form>
            </div>
        )
    }

}

export default Login;