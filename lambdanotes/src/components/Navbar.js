import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let NavBarContainer = styled.div `
`

let NavButton = styled.button `
`

export const Navbar = (props) => {
    return (
        <NavBarContainer>
            <h1>Lambda</h1>
            <h1>Notes</h1>

            <NavButton>View Your Notes</NavButton>
            <NavButton>+ Create New Note</NavButton>
        
        </NavBarContainer>
    )
}