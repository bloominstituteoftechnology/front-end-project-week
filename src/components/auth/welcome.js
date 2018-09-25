import React, {Component} from 'react';
import styled from 'styled-components';

export default class Welcome extends Component{
    
    
    
    render(){
        return(
            <WelcomeDiv>
                <h1>WelcomeDiv</h1>
            </WelcomeDiv>
        )
    }
}

const WelcomeDiv = styled.div`
    border: 1px solid red;
`;