import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header } from './Header';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            confirmedPassword: '',
        }
            

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleClick = this.handleClick.bind(this);

    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        // let promise = axios.post("https://notepen.herokuapp.com/api/auth/register",this.state);

        let promise = axios.post("http://localhost:5555/api/auth/register", this.state);

        promise 
            .then(response => {
                console.log(response.data);
                localStorage.setItem('jwt', response.data.token);
                this.props.history.push('/notes');            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <form className="register-form" onSubmit={this.handleSubmit}>
                <div className="register-header">
                    <Header text="Please register"/>
                    <div className="input-div username">
                        <label>Username:</label>
                        <input placeholder="Enter username" type="text" name= "username" onChange={this.handleChange} className="input-text" value={this.state.username} required/>
                    </div>
                    <div className="input-div password">
                        <label>Password:</label>
                        <input placeholder="Enter password" type="password" name= "password" onChange={this.handleChange} className="input-text" value={this.state.password} required/>
                    </div>
                    {/* <div className="input-div confirm password">
                        <label>Password:</label>
                        <input placeholder="Confirm password" type="password" name= "password" onChange={this.handleChange} className="input-text" value={this.state.confirmedPassword} required/>
                    </div> */}
                    <div className="account-already">Already have an account? Please  <Link to="/login">here!</Link></div>
                    
                    <Link to="/" onClick={this.handleSubmit}><div  className="button submit-button">Submit</div></Link>
                </div>
            </form>
        );
    }
}

export default Register;