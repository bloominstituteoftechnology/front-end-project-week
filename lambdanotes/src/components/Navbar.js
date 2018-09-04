import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let NavBarContainer = styled.div `
    background-color: #aaa;
	background-color: #ccc;
	border: 1px solid darkgray;
	height: 100vh;
	width: 300px;
	margin-right: 40px;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	align-items: center;
`

let NavButton = styled.button `
    width: 200px;
	height: 40px;
	background-color: #00b6bb;
	color: white;
	text-align: center;
	margin-top: 20px;
`

export const Navbar = (props) => {
    return (
        <NavBarContainer>
            <h1>My</h1>
            <h1>Notes</h1>

            <Link to="/notes"><NavButton>View Your Notes</NavButton></Link>
            <Link to="/add"><NavButton>+ Create New Note</NavButton></Link>
        
        </NavBarContainer>
    )
}