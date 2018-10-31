import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

changeHandler = (key, value) => {
    this.setState({
        ...this.state,
        [key] : value
    })
}

login = () => {
    if (this.state.username && this.state.password) {
        localStorage.setItem("username", this.state.username);
        this.setState({
            username: '',
            password: ''
        })
    } else {
        alert("Please fill out both username and password fields before submitting");
    }
}

render() {
    return (
        <div className="login-page">
        <h1>Lambda Notes</h1>
        <p>Enter username and password to log in!</p>
        <form className="login-form" onSubmit={this.login}>
        <input
        type='text'
        placeholder='Username'
        name='username'
        value={this.state.username}
        onChange={event=>this.changeHandler(event.target.name, event.target.value)}
        ></input>
        <input
        type='password'
        placeholder='Password'
        name='password'
        value={this.state.password}
        onChange={event=>this.changeHandler(event.target.name, event.target.value)}
        ></input>
      <button>Log In</button>
        </form>
        </div>
    )
}

}

export default Login;