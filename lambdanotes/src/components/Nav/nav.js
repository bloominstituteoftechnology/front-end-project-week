import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledButton } from '../../styling/';

const NoDecLink = Styled(Link)`
    text-decoration: none;
`;

const NavDiv = Styled.div`
    border: 1px solid #afafaf;
    border-right: 0;
    width: 25%;
    min-width: 210px;
    height: 98vh;
    background-color: #d3d2d3;
    h1 {
        color: #414141;
        font-size: 3.141592653rem;
        font-weight: bold;
        margin: 10px;
    }
`;

const Nav = () => {
    return (
        <NavDiv>
            <h1>Lambda Notes</h1>
            <NoDecLink exact='true' to='/'><StyledButton buttonColor='aqua'>View Your Notes</StyledButton></NoDecLink>
            {/* <NoDecLink to='/tags'><StyledButton buttonColor='aqua'>Tag Cloud</StyledButton></NoDecLink> */}
            <NoDecLink to='/noteeditor'><StyledButton buttonColor='aqua'>+ Create New Note</StyledButton></NoDecLink>
        </NavDiv>
    );
};

export default Nav;
