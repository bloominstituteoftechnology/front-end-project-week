import React from 'react'
import './Login.css'

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
        const user = this.state.username;
        if (user === '' || this.state.password === '') { alert('Please fill out required fields'); return; };

        localStorage.setItem('user', user)
        localStorage.setItem('password', this.state.password)

        window.location.reload();
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
                    </div>
                </form>

            </div>

        )
    }
}

export default Login;