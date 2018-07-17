import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSideBar = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    background: #D8D8D8;
    width: 25%;
    max-width: 180px;
    height: 100%;
    border: 2px solid #979797;
    padding: 1%;
    font-family: Roboto Bold;
    font-size: 1.5rem;
    color: #4A4A4A;
`;

const StyledButtonLinks = styled.div`
    width: 100%;
    height: 100vh;
`;

const StyledButton = styled.button`
    background: #2BC1C4;
    padding: 1%;
    margin-top: 5%;
    color: white;
    border: 2px solid #979797;
    width: 100%;
    height: 40px;
    font-family: Raleway Medium;
    font-size: 1rem;
    &:hover{cursor: pointer;}
`;


const NavBar = props => {
    return(
        <StyledSideBar>
            <StyledButtonLinks>
                <h3>Lambda Notes</h3>
                <Link to={'/'}><StyledButton>View Your Notes</StyledButton></Link>
                <Link to={'/create'}><StyledButton>Create New Note</StyledButton></Link>
            </StyledButtonLinks>
        </StyledSideBar>
    );
}

export default NavBar;