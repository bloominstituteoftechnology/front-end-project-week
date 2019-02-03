import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    max-width: 300px;
    min-width: 300px;
    background-color: rgb(251, 251, 253);
    border-right: 1px solid rgb(234, 237, 232);
    color: rgb(74, 74, 74);
    /* margin-bottom: -101%; */
    padding-bottom: 150%;
    overflow: hidden;
`;

const SiteName = styled.div`
    text-align: left;
    font-size: 24px;
    line-height: .95;
    padding: 0px 0px 25px 15px;
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NavButton = styled.div`
    text-align: center;
    border: 1px solid rgb(150, 162, 162);
    color: white;
    background-color: rgb(54, 192, 195);
    border-radius: 3px;
    padding: 15px 25px;
    margin: 15px;
    cursor: pointer;

    /* display: inline-block; */
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    overflow: hidden;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: color, background-color;
    transition-property: color, background-color;

    &:hover, &:focus, &:active {
    background-color: white;
    color: rgb(54, 192, 195);
}
`;

const Navigation = () => {
    return (
        <NavBar>
            <SiteName>
                <h1>Lambda Notes!</h1>
            </SiteName>
            <NavLinks>
                <Link to="/" style={{ textDecoration: 'none'}} >
                    <NavButton>View Your Notes</NavButton>
                </Link>
                <Link to="/new-note" style={{ textDecoration: 'none'}} >
                    <NavButton>+ Create New Note</NavButton>
                </Link>
            </NavLinks>
        </NavBar>
    )
}

export default Navigation;