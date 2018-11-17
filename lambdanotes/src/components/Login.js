import React from 'react'


class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        const user = this.state.username;
        const password = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('password', password);
        window.location.reload();
    }

    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="username"
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        placeholder="password"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
        )
    }
}


export default Login