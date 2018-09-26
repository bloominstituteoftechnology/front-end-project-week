import React, {Component} from 'react';
import styled from 'styled-components';

import UserForm from './userform.js';


export default class Login extends Component{
    render(){
        console.log(this.props.failed)
        return(
            <LoginDiv>
                <h1>LoginDiv</h1>
                <p>{this.props.failed ? 'login failed, please try again or register': null}</p>
                <UserForm loginOrRegister={this.props.loginUser} />
            </LoginDiv>
        )
    }
}

const LoginDiv = styled.div`
    border: 1px solid red;
`;