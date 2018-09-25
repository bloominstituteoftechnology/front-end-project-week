import React, {Component} from 'react';
import styled from 'styled-components';


export default class UserForm extends Component{
    
    componentDidMount(){
        //check if token 
    }
    
    render(){
        return(
            <UserFormDiv>
                <h1>UserFormDiv</h1>
            </UserFormDiv>
        )
    }
}

const UserFormDiv = styled.div`
    border: 1px solid red;
`;