import React, {Component} from 'react';
import styled from 'styled-components';

import UserForm from './userform.js';


export default class Login extends Component{
    

    render(){
        return(
            <LoginDiv>
                <h1>LoginDiv</h1>
                <UserForm loginOrRegister={this.props.loginUser} />
            </LoginDiv>
        )
    }
}

const LoginDiv = styled.div`
    border: 1px solid red;
`;