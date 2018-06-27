import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://lamb-danotes.herokuapp.com/user/login', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);

                console.log('Log in props: ', this.props);
                this.props.history.push('/');
            })
            .catch(err => console.log('error logging in'))
    }

    render() {
        return (
            <div className='login'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='usernameDiv'>
                        <label className='usernameLabel'>Username: </label>
                        <input className='usernameInput'
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name='username'
                            type='text'
                        />
                    </div>
                    <div className='passwordDiv'>
                        <label className='passwordLabel'>Password: </label>
                        <input className='passwordInput'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name='password'
                            type='password'
                        />
                    </div>
                    <div>
                        <button className='loginButton' type='submit'>Log In</button>
                    </div>
                </form>
                <Link className='signupLink' to='/register'>Don't have an account? Sign Up Here</Link>
            </div>
        );
    }
}

export default Login;