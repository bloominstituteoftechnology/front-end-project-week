import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    state = {
            name: '',
            password: '',
            email: ''
        }


    inputChangeHandler = (user, event) => {
        this.setState({[user]: {...this.state[user], [event.target.name]: event.target.value}})
      }

      newUser = () => {
        const user = this.state.user;
        axios.post('https://dakine-lambdanotes-api.herokuapp.com/register', user)
        .then(response => {
          // console.log(response);
          const token = response.data;
          localStorage.setItem('jwt', token);
        })

        .catch(err => {
          console.log(err)
        })

      }

    render() {
    return (
        <div>
            <h3>Register A New User</h3>
            <Link to='/'><button>Back to Home</button></Link>
            <form>
                <div>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter a new name'
                    onChange={this.inputChangeHandler.bind(this, 'user')}
                    />
                </div>
                <div>
                  <input
                    type='password'
                    name='password'
                    placeholder='Create a password'
                    onChange={this.inputChangeHandler.bind(this, 'user')}
                    />
                </div>
                <div>
                    <input
                    type='text'
                    name='email'
                    placeholder='email'
                    onChange={this.inputChangeHandler.bind(this, 'user')}
                    />
                </div>
                <div>
                    <Link to="/login"><button onClick={this.newUser}>Register</button></Link>
                </div>
            </form>
        </div>
    )}
}

export default Register;
