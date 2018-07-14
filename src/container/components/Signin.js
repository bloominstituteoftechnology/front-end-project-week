import React, { Component } from 'react';
import axios from 'axios';

const api = process.env.REACT_APP_API || 'https://sheltered-sands-52060.herokuapp.com';


class Signin extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: 'test1',
            password: '123456'
        };
    }

    submitHandler = e => {
        e.preventDefault();
        //submit the form
        axios.post(`${api}/api/user/signin`, this.state )
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                this.props.history.push('/Notes');
                window.location.reload();
                console.log('response : ', response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    inputChangeHandler = event => {
        console.log('changing ',event.target.name);
        const { name, value } = event.target;
        this.setState({ [name] : value })
    }

    render(){
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

export default Signin;