import React, {Component} from 'react';
import styled from 'styled-components';

import UserForm from './userform.js';

export default class Register extends Component{

    render(props){
        return(
            <RegisterDiv>
                <h1>RegisterDiv</h1>
                <UserForm loginOrRegister={this.props.createUser}/>
            </RegisterDiv>
        )
    }
}

const RegisterDiv = styled.div`
    border: 1px solid red;
`;