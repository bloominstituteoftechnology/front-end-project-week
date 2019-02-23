import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';

class Signup extends Component {
    state = {
        username: "",
        password: ""
    }


        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input 
                                name="username" 
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                type='text'
                            />
                        </div>
                            
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                type="text"
                            />
                        </div>

                        <div>
                            <button type='submit' >Sign Up</button>
                        </div>
                </form>
            )
        }

        handleInputChange = event => {
            event.preventDefault();
            this.setState({ [event.target.name]: event.target.value })
        }

        handleSubmit = event => {
            event.preventDefault();
            const credentials = this.state;
            const endpoint = 'http://localhost:3000/register';

            axios.post(endpoint, credentials)
            .then(res => {
                console.log('response data from register', res.data);
                localStorage.setItem('jwt', res.data.token)

            })
            .catch(err => {
                console.log('err from login', err);
            });
        }

}

export default Signup;