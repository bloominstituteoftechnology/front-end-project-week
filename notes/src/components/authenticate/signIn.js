import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {AuthenticationForm,AuthenticationHeading,AuthenticationInput,AuthenticationButton} from './styledComponents.js';

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
                localStorage.setItem('id',res.data.user_id);
                localStorage.setItem('jwt',res.data.token);
                this.props.history.push('/notes');
            })
            .catch(err=>alert('Username or password is invalid.'))
    }
    redirect=()=>{
        this.props.history.push('/signup');
    }
    render(){
        return (
            <AuthenticationForm>
                <AuthenticationHeading>Sign In</AuthenticationHeading>
                <AuthenticationInput type='text' name='username' value={this.state.username} onChange={this.onChangeHandler} placeholder='Enter  username'/>
                <AuthenticationInput type='password' name='password' value={this.state.password} onChange={this.onChangeHandler} placeholder='Enter password'/>
                <AuthenticationButton type='submit' onClick={this.onSubmitHandler}>Sign In</AuthenticationButton>
                <AuthenticationButton onClick={this.redirect}>Don't have an account?</AuthenticationButton>
            </AuthenticationForm>
        )
    }
}
export default withRouter(SignIn);