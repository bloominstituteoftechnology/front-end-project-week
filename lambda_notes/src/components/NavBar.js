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
    height: 100%;
    border: 2px solid grey;

`;

const NavBar = props => {
    return(
        <StyledSideBar>
            <h3>Lambda Notes</h3>
            <Link to={'/'}><button>View Your Notes</button></Link>
            <Link to={'/create'}><button>Create New Note</button></Link>
        </StyledSideBar>
    );
}

export default NavBar;