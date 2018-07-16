import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background: #D8D8D8;
    border-right: 1px solid #a6a6a6;
    width: 220px;
`

const NavBar = () => {
    return (
        <Nav>
            <h1>Lambda Notes</h1>
            <button>View Your Notes</button>
            <button>+Create New Note</button>
        </Nav>
      );
}
 
export default NavBar;