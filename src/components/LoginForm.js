import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import  './LoginForm.css';


const backend = "https://contact-notes.herokuapp.com/";
// let backend = 'http://localhost:5000/';
// let heroku = 'https://lamb-notes.herokuapp.com/';
// if (typeof(backend) !== 'string') {
//   backend = heroku;
// }



class LoginForm extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                password: '',
                error: false,
                errorMessage: ''
            };
        }
    
        login = (event) => {
            event.preventDefault();
            const user = {
                username: this.state.username,
                password: this.state.password
            };
            axios.post(`${backend}api/users/login`, user)
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('name', response.data.name);
                    localStorage.setItem('username', this.state.username);
                    // console.log("Fire", response)
                    this.setState({
                        error: false
                    });
                    setTimeout(() => {
                        this.props.history.push('/');
                    }, 200)
                })
                .catch(err => {
                    // console.log(err)
                    this.setState({
                        error: true,
                        errorMessage: err.response.data.error
                    })
                })
        }
    
        handleInputChange = event => {
            this.setState({ [event.target.name]: event.target.value });
        };
    
        render() {
            return (
                <div className="main-wrap">
                    <div className="login-main">
                        <h2> Login </h2>                        
                        <div className='signup-form'>
                            <div className="form-group">
                                <input className="form-control" placeholder="Username" name='username' type="text" value={this.state.username} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" placeholder="Password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
                            </div>
                            <div className='signup-buts'>
                                <button type="submit" className="signup-button" onClick={this.login}>
                                    Login
                                </button>
                                <Link to="/">
                                    <button className="home-button">
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                            <div className="form-error">
                            {this.state.errorMessage}
                        </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default LoginForm; 
