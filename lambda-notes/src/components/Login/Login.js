import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className='login-container'>
                <form className='login-form'>
                    <h1 className='login-header'>Lambda Notes</h1>
                    <input type='text' placeholder='Username' />
                    <input type='text' placeholder='Password' />
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;