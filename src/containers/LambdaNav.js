import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 25%;
    background: #D8D8D8;
    border-right: 1px solid #979797;
`

const StyledHeader = styled.h1`
    color: #4A4A4A;
    font-family: 'Roboto', sans-serif;
    margin-left: 20px;
`

const StyledButton = styled.button`
   width: 80%;
   height: 45px;
   background: #2BC1C4;
   color: #FFFFFF;
   border: 1px solid #979797;
   margin-top: 20px;
`

const LambdaNav = () => {
    return(
    <StyledDiv>
        <StyledHeader>Lambda Notes</StyledHeader>
    <StyledButton><Link to={`/`} style={{textDecoration: 'none', color: 'white'}}>View Your Notes</Link></StyledButton>
    <StyledButton><Link to={`/form`} style={{textDecoration: 'none', color: 'white'}}>+ Create New Note</Link></StyledButton>
    </StyledDiv>
    )
}

export default LambdaNav;