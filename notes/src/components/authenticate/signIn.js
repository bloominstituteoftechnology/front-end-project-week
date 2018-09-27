import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const SignInForm=styled.form`
    max-width: 390px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    border: 1px solid black;
    background-color: #ddd;
    height: 250px;
    
`
const SignInPageH1=styled.h1`
    margin-top:30px
`
const SignInInput=styled.input`
    width:50%;
    height: 20px;
    margin-top:5px;
`
const SignInPageButton=styled.button`
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

class SignIn extends React.Component{
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
        const user={
            username:this.state.username,
            password:this.state.password
        }
        axios
            .post('https://notes-lambda.herokuapp.com/api/login',user)
            .then(res=>{
                localStorage.setItem('jwt',res.data);
                this.props.history.push('/notes');
            })
            .catch(err=>alert('Username or password is invalid.'))
    }
    redirect=()=>{
        this.props.history.push('/signup');
    }
    render(){
        return (
            <SignInForm>
                <SignInPageH1>Sign In</SignInPageH1>
                <SignInInput type='text' name='username' value={this.state.username} onChange={this.onChangeHandler} placeholder='Enter  username'/>
                <SignInInput type='password' name='password' value={this.state.password} onChange={this.onChangeHandler} placeholder='Enter password'/>
                <SignInPageButton type='submit' onClick={this.onSubmitHandler}>Sign In</SignInPageButton>
                <SignInPageButton onClick={this.redirect}>Don't have an account?</SignInPageButton>
            </SignInForm>
        )
    }
}
export default withRouter(SignIn);