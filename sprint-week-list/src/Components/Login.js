import React from 'react'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username : '',
            password : '',
        }
    }
    logInFunction = () =>{
        localStorage.setItem('Username', this.state.username);
        window.location.reload()
    }
    inputHandler = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }
    render(){
        return(
            <form>
                <h1>Lambda Notes Login</h1>
                <input
                    type = 'text'
                    name = 'username'
                    value = {this.state.username}
                    placeholder = 'Enter username'
                    onChange = {this.inputHandler}
                />
                <input
                    type = 'text'
                    name = 'password'
                    value = {this.state.password}
                    placeholder = 'Enter username'
                    onChange = {this.inputHandler}
                />
                <button onClick = {this.logInFunction}>Log in</button>
            </form>
        )
    }
}
export default Login;