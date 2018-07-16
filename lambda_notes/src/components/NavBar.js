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
`;

const NavBar = props => {
    return(
        <StyledSideBar>
            <h3>Lambda Notes</h3>
            <button>button 1</button>
            <button>button 2</button>
        </StyledSideBar>
    );
}

export default NavBar;