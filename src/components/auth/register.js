import React, {Component} from 'react';
import styled from 'styled-components';

import UserForm from './userform.js';

export default class Register extends Component{
    render(){
        return(
            <RegisterDiv>
                <h1>RegisterDiv</h1>
                <UserForm />
            </RegisterDiv>
        )
    }
}

const RegisterDiv = styled.div`
    border: 1px solid red;
`;