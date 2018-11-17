import React from 'react'
import logo from '../logo.svg';

class Home extends React.Component {
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
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <form>
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
                </form>
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}


export default Home