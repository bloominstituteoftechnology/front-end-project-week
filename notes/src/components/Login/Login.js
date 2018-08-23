import React from 'react'
import './Login.css'
import axios from 'axios';

const URL = 'http://localhost:8000/api/users';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value });
    }

    handleLoginSubmit = e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };

        if (this.state.username === '' || this.state.password === '') { alert('Please fill out required fields'); return; };
        axios
            .post(`${URL}/login`, user)
            .then(response => {
                const token = response.data;
                localStorage.setItem('jwt', token);
                this.props.history.push('/');
            })

        window.location.reload();
    }

    handleRegisterSubmit = e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios
            .post(`${URL}/register`, user)
            .then(response => {
                const token = response.data;
                localStorage.setItem('jwt', token)
                this.props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="login-container">
                <form onSubmit={this.handleLoginSubmit}>
                    <div>
                        <div className="login-title">Lambda Notes</div>
                    </div>
                    <input
                        className="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Username..."
                    />
                    <div>
                        <input
                            className="username"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Password"
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="login-button" onSubmit={this.handleLoginSubmit}>Login</button>
                        <button type="submit" className="login-button" onSubmit={this.handleRegisterSubmit}>Register</button>
                    </div>
                </form>

            </div>

        )
    }
}

export default Login;