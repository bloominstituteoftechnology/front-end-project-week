import React, { Component } from 'react';
import styled from 'styled-components';


const NavContainer = styled.nav`
    display: table-cell;
    min-width: 200px;
    height: 100%;
    padding: 0 1.5% 0 1.5%;
    background-color: #D8D8D8;
    border-right: 1px solid #A0A0A0;
    text-align: left;
    font-weight: bold;
`

const NavHeader = styled.h1`
    color: #4A494A;
    font-size: 2.4rem;
    margin: 1.6rem 0;
`

const NavButton = styled.button`
    border: 1px solid #959898;
    outline: none;
    margin: 0;
    text-decoration: none;
    background-color: #5DBEC3;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;    
    font-weight: bold;
    margin: 0.8rem 0;
    padding: 0.8rem 0;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none; 
`

const Sidebar = props => {
    return (
        <NavContainer>
            <NavHeader>Lambda<br />Notes</NavHeader>
            <NavButton>View Your Notes</NavButton>
            <NavButton>+ Create New Note</NavButton>
        </NavContainer>
    )
}

export default Sidebar;