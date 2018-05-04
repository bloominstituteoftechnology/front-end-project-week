import React, { Component } from 'react'
import axios from 'axios';
//import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Signup from './Signup';

axios.defaults.withCredentials = true;


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            signupFlag: false
        };
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.login();
    }

    signup = () => {
        this.setState({
            signupFlag: true,
        });
    }

    changeSignupFlag = () => {
        this.setState({
            signupFlag: false,
        });
    }

    login = () => {
        axios
            .post(`https://shrouded-shelf-42770.herokuapp.com/signin`, {
                email: this.state.email,
                password: this.state.password,
            })
            .then(response => {
                if (response.data === 'match') {
                    console.log(response.data);
                    this.props.changeLoginFlag();
                } else {
                    console.log('does not match');
                    window.alert('Oops! seems like you entered a wrong password or email. Try again please!');
                }
            })
            .catch(error => { console.log('Error: could not loged you in') });
    }

    render() {
        return (
            <div className="login">
                {!this.state.signupFlag ? (
                    <React.Fragment>
                        <p>Please sign in by typing your email and the password you used to sign up</p>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="email"
                                name='email'
                                placeholder='Your email here...'
                                onChange={this.onChange}
                            />
                            <input
                                onChange={this.onChange}
                                type="password"
                                name='password'
                                placeholder='Password...'
                            />
                            <Link to='/NotesList' className='link' onClick={this.login}>
                                <button
                                    disabled={!this.validateForm()}
                                    type="submit"
                                >
                                    Login
                                </button>
                            </Link>
                            <Link to='/' className='link' onClick={this.signup} >
                                <button
                                    type="submit"
                                >
                                    Signup
                                </button>
                            </Link>
                        </form>
                    </React.Fragment>
                ) : (
                        <Signup changeFlag={this.changeSignupFlag} />
                    )}
            </div>
        );

    }
}
