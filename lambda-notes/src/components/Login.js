import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';


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

   			axios.post('http://localhost:3300/api/login', this.state)
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
  	       <div>
  	       	<h1 className="login">Login</h1>
  	       	<form onSubmit={this.submitHandler}>
                <div>
                   <input
                    name='name'
                    value={this.state.name}
                    onChange={this.inputChangeHandler}
                    type="text"
                    />
                </div>
                <div>
                    <input
                    name='password'
                    value={this.state.password}
                    onChange={this.inputChangeHandler}
                    type="text"
                   />
                </div>

                <div>

                    <Link to="/notes" ><button type="submit"> Login</button></Link>

                </div>

            </form>
  	       </div>
  	)
	};

};
export default Login;
