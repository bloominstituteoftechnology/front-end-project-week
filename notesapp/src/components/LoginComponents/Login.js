import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usernameInput: "",
            passwordInput: "",
        }
    }

changeHandler = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
loginFunction = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.usernameInput)
    window.location.reload()
}


render() {
    return (
        <div>
            <form onSubmit={this.loginFunction}>
            <input 
            placeholder="username"
            onChange={this.changeHandler}
            name="usernameInput"
            value={this.state.userInput}
            type="text"
            />
            <br />
            <input 
            placeholder="password"
            onChange={this.changeHandler}
            name="passwordInput"
            value={this.state.passwordInput}
            type="password"
            />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

}

export default Login;