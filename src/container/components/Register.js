import React, { Component } from 'react';
import axios from 'axios';

const api = process.env.REACT_APP_API || 'https://sheltered-sands-52060.herokuapp.com';


class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    submitHandler = e => {
        e.preventDefault();
        //submit the form
        axios.post(`${api}/api/user/register`, this.state)
            .then(response => {
                console.log('response : ', response.data)
                this.props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    inputChangeHandler = event => {
        console.log('changing ', event.target.name);
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>username</label>
                    <input
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        name='username'
                        type='text'
                    />
                </div>
                <div>
                    <label>password</label>
                    <input
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        name='password'
                        type='text'
                    />
                </div>
                <div>
                    <button type='submit'>Sign in</button>
                </div>
            </form>
        )
    }
}

export default Register;