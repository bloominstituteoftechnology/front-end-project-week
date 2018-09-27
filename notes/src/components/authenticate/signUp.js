import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const SignUpForm=styled.form`
    max-width: 394px;
    width: 100%;
    margin:0 auto;
    margin-top: 30px;
    border: 1px solid black;
    background-color: #E8E8EE;
    height: 250px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`
const SignUpPageH2=styled.h2`
    margin-top:30px
`
const SignUpInput=styled.input`
    width:50%;
    height: 20px;
    margin-top:5px;
`
const SignUpPageButton=styled.button`
    width:50%;
    display: block;
    margin: 0 auto;
    margin-top:5px;
    height:30px;
    border-radius:5px;
    &:hover{
        opacity:0.85;
    }
`
class SignUp extends React.Component{
    constructor() {
        super();
        this.state={
            username:'',
            password:''
        }
    }
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
    }
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmitHandler=(e)=>{
        e.preventDefault();
        const newUser={
            username:this.state.username,
            password:this.state.password
        }
        axios
            .post('https://notes-lambda.herokuapp.com/api/register',newUser)
            .then(res=>{
                localStorage.setItem('jwt',res.data);
                this.props.history.push('/notes');
            })
            .catch(err=>alert('Username or password is invalid.'))
    }
    redirect=()=>{
        this.props.history.push('/signin');
    }
    render(){
        return (
            <SignUpForm>
                <SignUpPageH2>Sign Up</SignUpPageH2>
                <SignUpInput type='text' name='username' value={this.state.username} onChange={this.onChangeHandler} placeholder='Enter  username'/>
                <SignUpInput type='password' name='password' value={this.state.password} onChange={this.onChangeHandler} placeholder='Enter password'/>
                <SignUpPageButton type='submit' onClick={this.onSubmitHandler}>Sign Up</SignUpPageButton>
                <SignUpPageButton onClick={this.redirect}>Have an account?</SignUpPageButton>
            </SignUpForm>
        )
    }
}
export default withRouter(SignUp);