import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { withRouter } from 'react-router'


const Login = styled.div`
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
`
const Input = styled.input`
    margin: 0% 0 8% 0;
    width: 220px;
    box-shadow: 3px 4px 10px;
    height: 20px;
`
const Error = styled.div`
    color: red;
    font-size: 16px;
`

class Signup extends Component {
    state = {
        userName: '',
        password: '',
        error: '',
        url: 'https://lambda-notes-95090.herokuapp.com/users/register'
    }

    inputHandler = (e) => {
        // Handle the input change
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()

        const { userName, password } = this.state
        
        if(!userName || !password){
            this.setState({userName: '', password: '', error: "Please Include a User Name and Password"})
        }else{
            axios.post('http://localhost:3300/users/register', {userName, password})
            .then(res => {
                const token = res.data

                localStorage.setItem('jwt', token)
                this.props.history.push('/notes')

            })
            .catch(err => {
                this.setState({userName: '', password: '', error: err.response.data.error})
            })
        }

    }

    render() {
    return (
        <Login className="Signin">
            <h1>Please Sign Up</h1>
            <form onSubmit={this.submitHandler}>
                <div> 
                    <Input type="text"
                            name="userName" 
                            placeholder="User Name"
                            value={this.state.userName} 
                            onChange={this.inputHandler} />
                </div>
                <div>
                    <Input type="password" 
                            name="password"
                            placeholder="Password"
                            value={this.state.password} 
                            onChange={this.inputHandler} />
                </div>
                <div>
                    <button type="submit">Signin</button>
                </div>

                {this.state.error ? (
                    <Error>{this.state.error}</Error>
                 ) : null}
            </form>
        </Login>
    );
  }
}

export default withRouter(Signup);
