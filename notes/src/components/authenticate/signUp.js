import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class SignUp extends React.Component{
    constructor() {
        super();
        this.state={
            username:'',
            password:''
        }
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
            .post('http://localhost:9000/api/register',newUser)
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
            <form>
                <h1>Sign Up</h1>
                <input type='text' name='username' value={this.state.username} onChange={this.onChangeHandler} placeholder='Enter  username'/>
                <input type='password' name='password' value={this.state.password} onChange={this.onChangeHandler} placeholder='Enter password'/>
                <div className='btn-container'>
                <button type='submit' onClick={this.onSubmitHandler}>Sign Up</button>
                <button onClick={this.redirect}>Have an account?</button>
                </div>
            </form>
        )
    }
}
export default withRouter(SignUp);