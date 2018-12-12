import React from 'react'
import AuthForm from './AuthForm'
import App from '../../App'
import { Route } from 'react-router-dom'
class Auth extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '',
            pass: '',
            loginStatus: false
        }
    }
    userHandler = event => {
        this.setState({
            user: event.target.value,
        });

    };
    passHandler = event => {
        this.setState({
            pass: event.target.value,
        });

    };
    handleLogout = () => {
            this.setState({ loginStatus: false })
    }
    submitHandler = event => {
        localStorage.setItem('user', this.state.user)
        this.setState({
            loginStatus: true
        })
        this.forceUpdate()
    }
    render() {
        if(!this.state.loginStatus){
            return <AuthForm 
                user={this.state.user}
                pass={this.state.pass}
                passHandler={this.passHandler}
                userHandler={this.userHandler}
                submitHandler={this.submitHandler}
            />
        }
        else{
            return <App user = {this.state.user} handleLogout ={this.handleLogout} loginStatus = {this.state.loginStatus}/>
        }
      
    }
}
    export default Auth