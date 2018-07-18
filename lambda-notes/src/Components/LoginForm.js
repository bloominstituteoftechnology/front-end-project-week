import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    login = () => {
        if (this.state.username === 'TestUser' && this.state.password === 'Password') {
            alert('LOGIN SUCCESSFUL')
            this.props.toggleLogin()
        } else {
            alert('Username/Password combo is not correct. Please try again.')
        }
    }
    handleInputChange = e => {this.setState({ [e.target.name]: e.target.value });};
    render () {
        return (
            <div className='login-form'>
                <div className="login-align">
                    <div className='login-content'>
                        <p>Login to view, create, and update your notes.</p>
                        <input
                            name='username'
                            placeholder='Username...'
                            onChange={this.handleInputChange}
                        />
                        <input
                            name='password'
                            placeholder='Password...'
                            onChange={this.handleInputChange}
                        />
                        <div onClick={this.login} className='btn'>Login</div>
                    </div>
                </div>
            </div>
        );    
    }
}
 
export default LoginForm;