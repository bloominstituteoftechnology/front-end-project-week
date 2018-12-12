import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PWDiv = styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-100%);
    border: 3px solid black;
    width: 50%;
    height: 200px;
`
const ContentDiv = styled.div`
    position: absolute;
    top:90%;
    left: 50%;
    transform: translate(-50%,-95%);
    margin:10px;
    height: 200px;

`
const ContentP = styled.p`
    font-size: 30px;

`
const NewLink = styled(Link)`
    color: black;
    position: absolute;
    bottom: 19%;
    
`
const ForgotPW = () =>{
    return(
        <PWDiv>
            <ContentDiv>
                <ContentP>Username is '123'</ContentP>
                <ContentP>Password is '456'</ContentP>
                <NewLink to = '/'>back to login page</NewLink>
            </ContentDiv>
            
        </PWDiv>
    )
}

export default ForgotPW