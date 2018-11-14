import React, { Component } from 'react';
import styled from 'styled-components';

// Nav bar styled components

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    min-width: 200px;
    width: 20%; 
    height: 100%;
    padding: 0 2% 0 2%;
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
    -webkit-appearance: none;
    -moz-appearance: none; 
`

const Sidebar = props => {
    return (
        <nav>
            <NavContainer>
                <NavHeader>Lambda<br/>Notes</NavHeader>
                <NavButton>View Your Notes</NavButton>
                <NavButton>+ Create New Note</NavButton>
            </NavContainer>
        </nav>
    )
}

export default Sidebar;
