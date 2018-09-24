import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import { StyledButton } from '../../styling/';

const NavDiv = Styled.div`
    border: 1px solid #afafaf;
    border-right: 0;
    width: 25%;
    height: 98vh;
    background-color: #d3d2d3;
`;

const Nav = (props) => {
    return (
        <NavDiv>
            <h2>Lambda Notes</h2>
            <StyledButton>View Your Notes</StyledButton>
            <StyledButton>+ Create New Note</StyledButton>
        </NavDiv>
    );
};

Nav.propTypes = {};

export default Nav;
