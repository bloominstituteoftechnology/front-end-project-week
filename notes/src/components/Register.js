import React, {Component} from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const initialUser = {
    username: '',
    password: '',
};

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { ...initialUser},
            message: ''
        }
        }

    inputHandler = (event) => {
        const {name, value} = event.target;
        this.setState({user: {...this.state.user, [name]: value }});
    }

    submitHandler = (event) => {
        event.prevetnDefault();
        axios.post(`${url}/api/register`, this.state.user)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                      message: 'Registration successful',
                      user: { ...initialUser }
                    });
                  } else {
                    throw new Error();
                  }
                })
                .catch((err) => {
                  this.setState({
                    message: 'Registration failed.',
                    user: { ...initialUser }
                  });
                });
            }

        render(){
            return(
                <div className = 'regForm'>
                <br/><br/>
                <h2>Register</h2><br/>
                <form onSubmit={this.submitHandler}>
                <label htmlFor="username">Username: </label><br/>
                        <input
                        type="text"
                        id='username'
                        name='username'
                        value={this.state.user.username}
                        onChange={this.inputHandler}
                        />
                        <br/><br/>
                      <label htmlFor="password"> Password: </label><br/>
                        <input
                        type="password"
                        id='password'
                        name='password'
                        value={this.state.user.password}
                        onChange={this.inputHandler}
                        />
                        <br/><br/>
                        <button type="submit" className = 'regButton'> Submit</button>
                </form>
                { this.state.message
                    ? (<h4>{this.state.message}</h4>)
                    : undefined
                }
                </div>
                
            );
            }
    }

 
