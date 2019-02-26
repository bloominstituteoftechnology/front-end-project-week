import React from 'react';

import Error from './error';

//props from app.js
//handleLogin={this.handleLogin}
// loginFailed={this.state.loginFailed}
//handleLogout={this.handleLogout}

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            users: {
                  username: '',
                  password: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            users: {
                    ...this.state.users,
                    [e.target.name]: e.target.value
                }
        });
    }

    sendAndReset = e => {
        this.props.handleLogin(this.state.users);
        this.setState({
            notes: {
                username: "",
                password: ""
            }
        });
    }


    render() {
        // if(this.props.loginFailed === true) {
        //     return(
        //         <Error handleLogout={this.props.handleLogout}/>
        //         )
        // }
        console.log(this.state.users)
        return(
            <div className="loginFormWrapper">
                <div className="test">

                <div className="appName">
                    <h1>Login to Lambda Notes</h1>
                </div>

                <div className="loginForm">
                        

                    <h5 className="headingOne">Username:</h5>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"  
                        className="loginInputs"
                        onChange={this.handleChange}
                        value={this.state.users.username}
                    />

                    <h5 className="headingTwo">Password:</h5>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="loginInputs"
                        onChange={this.handleChange}
                        value={this.state.users.password}
                    />

                    <br />

                    <button 
                        className="loginSubmit"
                        onClick={() => {this.sendAndReset()}}
                    >
                        Login
                    </button>

                </div> 
            </div>
        </div>
        )
    }
}

export default LoginPage