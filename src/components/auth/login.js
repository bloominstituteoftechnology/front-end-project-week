import React, {Component} from 'react';
import styled from 'styled-components';

import UserForm from './userform.js';


export default class Login extends Component{
    
    loginUser(userCreds){
        console.log(userCreds)
    }
    render(){
        return(
            <LoginDiv>
                <h1>LoginDiv</h1>
                <UserForm whenSubmit={this.loginUser} />
            </LoginDiv>
        )
    }
}

const LoginDiv = styled.div`
    border: 1px solid red;
`;