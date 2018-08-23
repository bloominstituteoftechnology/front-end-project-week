import React from 'react';
import { LoginWrapper, LoginForm, LoginInput, LoginButton, BottomLoginContent, BottomText, SignUp, InvalidCredentials } from '../ReusableComponents/Login';
import { connect } from 'react-redux';
import { signIn } from '../../actions/auth';

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

    loginButton = event => {
        event.preventDefault();
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

        const credentials = { username: this.state.username, password: this.state.password }

        this.props.signIn(credentials);
    }

    render() {
        // Displays login form
        return (
            <LoginWrapper>

                <LoginForm>

                    <h1>Lambda Notes</h1>
                    <LoginInput className='login-input' autoComplete='off' onChange={this.handleInput} value={this.state.username} name='username' type='text' placeholder='Username' />
                    <LoginInput className='login-input' autoComplete='off' onChange={this.handleInput} value={this.state.password} name='password' type='password' placeholder='Password' />
                    <LoginButton to='/notes'
                        onClick={this.loginButton}
                        style={(this.state.username.length > 0 || this.state.password.length > 0) && !this.props.signingIn ? { background: '#2BC1C4' } : { opacity: 0.3 }}>
                        {this.props.signingIn ? <i className="fa fa-spinner fa-spin"></i> : 'Log In'}
                    </LoginButton>

                    {this.props.invalidCredentials ? <InvalidCredentials>{this.props.invalidCredentials}</InvalidCredentials> : null}

                </LoginForm>


                <BottomLoginContent>

                    <BottomText>
                        Don't have an account? <SignUp to='/register'>Sign up</SignUp>
                    </BottomText>

                </BottomLoginContent>

            </LoginWrapper >
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.signedIn,
        invalidCredentials: state.auth.invalidCredentials,
        signingIn: state.auth.signingIn
    };
}

export default connect(mapStateToProps, { signIn })(Login);