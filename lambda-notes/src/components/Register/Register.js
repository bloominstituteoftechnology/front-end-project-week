import React from 'react';
import { LoginWrapper, LoginForm, LoginInput, LoginButton, BottomLoginContent, BottomText, SignIn } from '../ReusableComponents/Login';
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';

class Register extends React.Component {
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

    loginButton = event => {
        // Checks username / password fields are empty / adds username / password to local storage
        event.preventDefault();
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

        const user = { username: this.state.username, password: this.state.password }

        this.props.signUp(user);
    }

    render() {
        // Displays login form
        return (
            <LoginWrapper>

                <LoginForm>

                    <h1>Sign Up</h1>
                    <LoginInput className='login-input' onChange={this.handleInput} value={this.state.username} name='username' type='text' placeholder='Username' />
                    <LoginInput className='login-input' onChange={this.handleInput} value={this.state.password} name='password' type='password' placeholder='Password' />
                    <LoginButton to='/notes' onClick={this.loginButton}>Sign Up</LoginButton>

                </LoginForm>

                <BottomLoginContent>

                    <BottomText>
                        Have an account? <SignIn to='/login'>Sign In</SignIn>
                    </BottomText>

                </BottomLoginContent>

            </LoginWrapper>
        );
    }
}

const mapStateToProps = state => {
    return { authenticated: state.auth.signedIn };

}

export default connect(mapStateToProps, { signUp })(Register);