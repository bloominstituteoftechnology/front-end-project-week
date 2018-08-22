import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import logo from './lambda-logo.png';

class Login extends Component {
        state = {
            name: '',
            password: '',
            isLoggedIn: false,
        }

	inputChangeHandler = event => {
        const { name, value } = event.target;
        // console.log('name', name, 'value', value)
        this.setState({ [name]: value });
    }

   submitHandler = event => {
   			event.preventDefault();

   			axios.post('https://dakine-lambdanotes-api.herokuapp.com/login', this.state)
   			 .then(res => {
            console.log('data', res.data);
            const token = res.data;

            localStorage.setItem('jwt', token)
        })
   			.catch(err => {
            console.error('Axios falied');

          })
   			console.log('state', this.state)

   		};


  render() {
  	return(
  	       <div className="login-container">
           <img className="homepage-logo-img" src={logo} />
  	       	<h1 className="login-header">Login</h1>
            <div className="form-container">
  	       	<form lassName="login-form-container" onSubmit={this.submitHandler}>
                <div className="login-form">
                   <input className="login-form-namebox1"
                    name='name'
                    value={this.state.name}
                    onChange={this.inputChangeHandler}
                    type="text"
                    />
                </div>
                <div>
                    <input className="login-form-namebox1"
                    name='password'
                    value={this.state.password}
                    onChange={this.inputChangeHandler}
                    type="text"
                   />
                </div>

                <div>

                    <Link to="/notes" className="login-button" ><button type="submit"> Login</button></Link>

                </div>

            </form>
            </div>
  	       </div>
  	)
	};

};
export default Login;
