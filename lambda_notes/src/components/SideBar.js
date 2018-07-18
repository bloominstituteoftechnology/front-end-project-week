import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.div`
    background: #D8D8D8;
    border-right: 1px solid #a6a6a6;
    width: 220px;
`

const SideBar = () => {
    return (
        <Nav>
            <h1>Lambda Notes</h1>
            <Link to='/'>
                <button>View Your Notes</button>
            </Link>
            <Link to='/create'>
                <button>+Create New Note</button>
            </Link>
        </Nav>
      );
}
 
export default SideBar;