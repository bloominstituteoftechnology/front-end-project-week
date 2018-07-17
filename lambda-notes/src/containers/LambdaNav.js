import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 25%;
    background: #D8D8D8;
`

const StyledHeader = styled.h1`
    color: #4A4A4A;
    font-family: 'Roboto', sans-serif;
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
    <StyledButton>View Your Notes</StyledButton>
    <StyledButton>+ Create New Note</StyledButton>
    </StyledDiv>
    )
}

export default LambdaNav