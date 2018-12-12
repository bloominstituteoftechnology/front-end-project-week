import React from 'react';
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components'

const NavBar = styled.nav`
    position: fixed;
    width: 224px;
    height: 100%;
    background: #D3D2D3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 18px;
    a{
        text-decoration: none;
    }
`;

const NavHeader = styled.h1`
    font-size: 35px;
    text-align: left;
    margin: 15px 0;
    line-height: 2rem;
`;

const NavButton = styled.p`
    text-align: center;
    width: 190px;
    border: 1px solid gray;
    background: #24B8BD;
    color: white;
    text-decoration: none;
    padding: 10px;
    margin: 10px 10px 10px 0;
    text-decoration: none;
    &:hover {
        color: #24B8BD;
        background: white;
    }
`;

const Nav = props => {
    
    return (
        <NavBar>
            <NavHeader>Lambda<br/>Notes</NavHeader>
            <NavLink to='/'><NavButton>View Your Notes</NavButton></NavLink>
            <NavLink to='/form'><NavButton>+ Create New Note</NavButton></NavLink>
        </NavBar>
    )
}

export default Nav;