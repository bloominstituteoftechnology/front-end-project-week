import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
         }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addUser = () => {
        const userInfo={ username: this.state.username, password: this.state.password }
        axios
            .post('http://localhost:5555/students/register', userInfo)
            .then(response => {
                this.setState({ username: '', password: '' })
                this.props.history.push('/login');
            })
            .catch(error => {
                console.log(error)
            })
    }

    enterPressed = event => {
        event.preventDefault();
        var code = event.keyCode || event.which;
        if (code === 13) {
            return this.addUser(event);
        }
    }

    render() { 
        return ( 
            <div className="box1">
                <h3>Welcome to Lambda Notes!</h3>
                <p>Register below to gain access to a collection of Notes.</p>
                <p>Once you've signed up, feel free to:</p>
                <div style={{ paddingLeft: '20px', marginBottom: '30px' }}>
                    <li>Add your own note to the database.</li>
                    <li>Edit any existing notes.</li>
                    <li>Get rid of any notes you don't like.</li>
                </div>
                <form>
                <input 
                    className="input"
                    onChange={this.handleInputChange}
                    onKeyUp={this.enterPressed.bind(this)}
                    placeholder="Your New Username"
                    name="username"
                    value={this.state.username}
                />
                <input
                    className="input"
                    onChange={this.handleInputChange}
                    onKeyUp={this.enterPressed.bind(this)}
                    placeholder="Your New Password"
                    name="password"
                    value={this.state.password}
                />
                </form>
                <div style={{ paddingLeft: '100px'}}>
                <button 
                    className="button-template"
                    onClick={this.addUser}
                >
                Register
                </button>
                </div>
            </div>
        )
    }
}
 
export default Registration;
