import React from 'react'
import AuthForm from './AuthForm'
import App from '../../App'
import { Route } from 'react-router-dom'
import ForgotPW from './ForgotPW'
import styled from 'styled-components'

const WrapperDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #D8D8D8;
` 
const ErrorDiv = styled.div`
    position: absolute;
    top:66%;
    left:50%;
    color: red;
    transform: translate(-50%);
    z-index: 100;
`
class Auth extends React.Component {
    constructor() {
        super()
        this.state = {
            user: '',
            pass: '',
            loginStatus: false,
            error: false,
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
        if(this.state.user ==='123' && this.state.pass === '456'){
            this.setState({error: false})
            this.setState({
                loginStatus: true
            })
        
        }
        else if(this.state.user !=='123' || this.state.user!== '') {
            this.setState({ error: true })
        }
    }
    render() {
        if(this.state.loginStatus === false && this.state.error ===false){
            return (
                <WrapperDiv>
                    <Route exact path ='/'
                    render ={()=>
                    <AuthForm 
                        user={this.state.user}
                        pass={this.state.pass}
                        passHandler={this.passHandler}
                        userHandler={this.userHandler}
                        submitHandler={this.submitHandler}
                    />}
                    />
                    <Route 
                    exact path ='/forgot'
                        render={() =>
                            <ForgotPW/>}
                    />
                </WrapperDiv>
            )
        }
        else if (this.state.error ===true) {
            return (
                <WrapperDiv>
                   
                    <Route exact path='/'
                        render={() =>
                            <div>
                            <ErrorDiv>
                                <p>Incorrect username or password</p>
                            </ErrorDiv>
                            <AuthForm
                                user={this.state.user}
                                pass={this.state.pass}
                                passHandler={this.passHandler}
                                userHandler={this.userHandler}
                                submitHandler={this.submitHandler}
                                /></div>}
                    />
                    <Route
                        exact path='/forgot'
                        render={() =>
                            <ForgotPW />}
                    />
                </WrapperDiv>
            )
        }
        else{
            return <App user = {this.state.user} handleLogout ={this.handleLogout} loginStatus = {this.state.loginStatus}/>
        }
      
    }
}
    export default Auth