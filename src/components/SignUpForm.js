import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const backend = "https://contact-notes.herokuapp.com/";
// let backend = 'http://localhost:5000/';
// let heroku = 'https://lamb-notes.herokuapp.com/';
// if (typeof(backend) !== 'string') {
//   backend = heroku;
// }


class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            error: false,
            errorMessage: ''
        };
    }

    createUser = event => {
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword) {
            this.setState({
                errorMessage: "Passwords don't match!"                
            })
            return;
        }
        const user = {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,

        };
        axios.post(`${backend}api/users/register`, user)
        .then(response => {
            // console.log("SignUp",response)
            localStorage.setItem('token', response.data.token)
            this.props.history.push(`/login`)           
            this.setState({
                error: false
                });
            })
            .catch(err => {              
                this.setState({
                    error: true,
                    errorMessage: err.response.data.error
                })
            })
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
           
            <div className="signup-wrap ">
                <div className='signup'>
                    <h3>Sign up </h3>                    
                    <div className='signup-form'>
                        <div className="form-group">
                            <input className="form-control" placeholder="Full Name" name='name' type="text" value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Username" name='username' type="text" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">                            
                            <input className="form-control" placeholder="Email" name='email' type="email" value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">                            
                            <input className="form-control" placeholder="Password" name='password' type="password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">                            
                            <input className="form-control" placeholder="Confirm Password" name='confirmPassword' type="password" value={this.state.confirmPassword} onChange={this.handleInputChange} />
                        </div>
                        <div className='signup-button1'>
                            <button type="submit" className="signup-button" onClick={this.createUser}>
                                Submit
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
         
        );
    }
}

export default SignUpForm;
