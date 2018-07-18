import React from 'react';
import { LoginWrapper, LoginForm, LoginInput, LoginButton } from '../ReusableComponents/Login';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = event => {
        // Sets state depending on the name of input field
        this.setState({ [event.target.name]: event.target.value });
    }

    loginButton = () => {
        // Checks username / password fields are empty / adds username / password to local storage
        if (this.state.username === '' && this.state.password === '') {
            alert('You need to enter a username and password!');
            return;
        }
        if (this.state.username === '') {
            alert('You need to enter a username!');
            return;
        }
        if (this.state.password === '') {
            alert('You need to enter a password!');
            return;
        }

        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);

        window.location.reload();
    }

    render() {
        // Displays login form
        return (
            <LoginWrapper>
                <LoginForm onSubmit={event => event.preventDefault()}>

                    <h1>Lambda Notes</h1>
                    <LoginInput className='login-input' onChange={this.handleInput} value={this.state.username} name='username' type='text' placeholder='Username' />
                    <LoginInput className='login-input' onChange={this.handleInput} value={this.state.password} name='password' type='password' placeholder='Password' />
                    <LoginButton to='/'
                        onClick={this.loginButton}
                        style={this.state.username.length > 0 || this.state.password.length > 0 ? { background: '#2BC1C4' } : { opacity: 0.3 }}>
                        Log In
                    </LoginButton>

                </LoginForm>
            </LoginWrapper>
        );
    }
}

export default Login;