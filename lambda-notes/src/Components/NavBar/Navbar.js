import React from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<StyledContainer>
			<StyledButton>edit</StyledButton>
			<StyledButton>delete</StyledButton>
		</StyledContainer>
	);
};

export default Navbar;

export const StyledContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	padding: 20px;
`;

export const StyledButton = styled.button`
	margin: 10px;
	padding: 10px;
	width: 100px;
	border-radius: 3px;
	background-color: #ffffff;
	border: 1px solid black;
	font-size: 18px;
	cursor: pointer;
	&:hover {
		background: #000000;
		color: #ffffffff;
	}
`;
