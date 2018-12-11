import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div`
    background-image: url('starry-sky.gif');
    display: flex;
    flex-direction: column;
    min-width: 223px;
    max-width: 243px;
    padding: 4.8rem 4rem;
    line-height: .95;
    font-weight: 500;
    font-size: 3.4rem;
    color: #fbbeaf;
    border-radius: 5px 0 0 5px;
`

const NavButton = styled.button`
    align-self: center;
    width: 100%;
    height: 3.9rem;
    background-color: rgba(98,19,176,0.3);
    border: 2px solid #6213b0;
    border-radius: 5px;
    margin-top: 6.5rem;
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 300;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`

const SecondNavButton = styled(NavButton)`
    margin-top: 1.5rem;
`

export default function Navigation() {
    return (
        <NavDiv>
            <h1>Lambda Notes</h1>
            <Link to="/">
                <NavButton>
                    View Your Notes
                </NavButton>
            </Link>
            <Link to="/create">
                <SecondNavButton>
                    + Create New Note
                </SecondNavButton>
            </Link>
        </NavDiv>
    );
}