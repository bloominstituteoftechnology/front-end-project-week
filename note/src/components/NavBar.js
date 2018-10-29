import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div
`
    border: 1px solid gray;
    width: 20%;
    height: 100vh;
    background: #D3D2D3;
`;

const NavButton = styled.button
`

    width: 90%;
    height: 40px;
    margin-bottom: 25px;
    border: 1px solid gray;
    background: #24B8BD;
    color: white;
    font-weight: bold;
    font-size: 14px;
`;

const NavBar = props => {
    return (
        <NavBarContainer>
            <h1>Lambda Notes</h1>
            <NavButton>View your Notes</NavButton>
            <NavButton>+ Create New Note</NavButton>
        </NavBarContainer>
    )
}

export default NavBar;