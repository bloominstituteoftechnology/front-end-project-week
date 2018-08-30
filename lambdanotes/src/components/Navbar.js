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
            <h1>My</h1>
            <h1>Notes</h1>

            <Link to="/notes"><NavButton>View Your Notes</NavButton></Link>
            <Link to="/add"><NavButton>+ Create New Note</NavButton></Link>
        
        </NavBarContainer>
    )
}