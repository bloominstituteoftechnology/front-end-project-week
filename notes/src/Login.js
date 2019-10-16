import React from 'react';
import {CircleLoader} from 'react-spinners'
import './login.css'
import Register from './register'

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"r-hidden"
        }
    }
    toggle = e => {
        this.setState({name:""})
    }
    render(){
        return(
            <div className="wrapper">
                <div className="container">
                    <h1>Welcome To Lambda Notes</h1>
                    <p>Please Login to Continue</p>
                    <p>(This is a sample login screen use any username or password to continue)</p>
                    <h3>{this.props.message}</h3>
                    <form className="form">

                        <input 
                        name="username"
                        type="text" 
                        placeholder="Username"
                        onChange = {this.props.ChangeHandler}
                        />

                        <input 
                        name="password" 
                        type="password"
                        placeholder="Password"
                        onChange = {this.props.ChangeHandler}
                        />

                        <button 
                        onClick={this.props.SubmitHandler}
                        type="submit" 
                        id="login-button">
                        Login
                        </button>
                        <p>Don't Have an account? Register <span className="register-span" onClick={this.toggle}>here</span></p>
                    </form>
                </div>
                <ul className="bg-bubbles">
                    <li>To-Do</li>
                    <li>Remember this note</li>
                    <li>Learn React</li>
                    <li>Create Login Page</li>
                    <li><CircleLoader /></li>
                    <li>Look Mom I'm floating!</li>
                    <li>-Finish MVP<br />-do stretch<br />-Get a job <br /> -Code for Life!<br />-Be Happy and stuff</li>
                    <li>Hi</li>
                    <li>Please Login to Lambda Notes</li>
                    <li>Lambda Rules!<br />CS14 no wait FSW14 wait maybe Web14 is the best cohort ever!<br/><br />Cs11 is okay too, Kam came from there I think</li>
                </ul>
                {/* <Register name={this.state.name}/> */}
            </div>
        )
    }
}

export default Login