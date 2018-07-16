import React from 'react';
import styled from 'styled-components';

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
            <button>View Your Notes</button>
            <button>Create New Note</button>
        </StyledSideBar>
    );
}

export default NavBar;