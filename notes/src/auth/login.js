import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            responseMessage: '',
            loggedIn: false,
         }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    login = event => {
        event.preventDefault();
        const credentials={ username: this.state.username, password: this.state.password }
        axios
            .post('http://localhost:5555/students/login', credentials)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                this.setState({ username: '', password: '', responseMessage: response.data, loggedIn: true })
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    enterPressed = event => {
        event.preventDefault();
        var code = event.keyCode || event.which;
        if (code === 13) {
            return this.login(event);
        }
    }

    render() { 
        return ( 
            <div>
                <div className="box2">
                    <h4>Log In Here:</h4>
                    <form>
                        <div>
                            <input 
                                className="input"
                                onChange={this.handleInputChange}
                                onKeyUp={this.enterPressed.bind(this)}
                                placeholder="Enter Username"
                                name="username"
                                type="text"
                                value={this.state.username}
                            />
                        </div>
                        <div>
                            <input
                                className="input"
                                onChange={this.handleInputChange}
                                onKeyUp={this.enterPressed.bind(this)}
                                placeholder="Enter Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                            />    
                        </div>
                    </form>
                    <button 
                        className="button-template"
                        onClick={this.login}
                    >
                    Login
                    </button>
                </div>
            </div>
        )
    }
}
 
export default Login;
