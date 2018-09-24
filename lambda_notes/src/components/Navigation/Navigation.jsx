import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const Header = Styled.header`
    position: absolute;
    bottom: 0;
    max-width: 300px;
    width: 30%;
    min-height: 100%;
    height: 100%;
    background-color: gray;

    display: flex;
    flex-direction: column;
    padding: 1%;
`;

function Navigation(props) {
    return (
        <Header>
            <h1>Lambda Notes</h1>
            <NavLink to="/">View Your Notes</NavLink>
            <NavLink to="/create-note">Create A New Note</NavLink>
        </Header>
    )
};

export default Navigation;