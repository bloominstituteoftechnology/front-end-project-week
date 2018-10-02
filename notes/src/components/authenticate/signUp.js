import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {AuthenticationForm,AuthenticationHeading,AuthenticationInput,AuthenticationButton} from './styledComponents.js'

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
            username:this.state.username.toLowerCase(),
            password:this.state.password
        }
        axios
            .post('https://notes-lambda.herokuapp.com/api/register',newUser)
            .then(res=>{
                localStorage.setItem('id',res.data.user_id);
                localStorage.setItem('jwt',res.data.token);
                this.props.history.push('/notes');
            })
            .catch(error=>{
                if (error.message==='Request failed with status code 400') {
                    alert('Invalid field(s). Username and password must be at least 3 characters long.')
                } else {
                    alert('That username is already in use.')
                }
            })
    }
    redirect=()=>{
        this.props.history.push('/signin');
    }
    render(){
        return (
            <AuthenticationForm>
                <AuthenticationHeading>Sign Up</AuthenticationHeading>
                <AuthenticationInput type='text' name='username' value={this.state.username} onChange={this.onChangeHandler} placeholder='Enter  username'/>
                <AuthenticationInput type='password' name='password' value={this.state.password} onChange={this.onChangeHandler} placeholder='Enter password'/>
                <AuthenticationButton type='submit' onClick={this.onSubmitHandler}>Sign Up</AuthenticationButton>
                <AuthenticationButton onClick={this.redirect}>Have an account?</AuthenticationButton>
            </AuthenticationForm>
        )
    }
}
export default withRouter(SignUp);