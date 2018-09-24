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
    background-color: #d7d7d7;

    display: flex;
    flex-direction: column;
    padding: 1%;

    h1 {
        font-size: 60px;
    }
`;

const Button = Styled.button`
    width: 90%;
    height: 60px;
    background-color: #2ac0c4;
    color: white;
    border: none;
    margin-bottom: 20px;
    cursor: pointer;
`;

function Navigation(props) {
    return (
        <Header>
            <h1>Lambda Notes</h1>
            <NavLink to="/"><Button>View Your Notes</Button></NavLink>
            <NavLink to="/create-note"><Button>Create A New Note</Button></NavLink>
        </Header>
    )
};

export default Navigation;