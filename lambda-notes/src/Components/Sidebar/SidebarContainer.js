import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = (props) => {
	return (
		<StyledContainer>
			<StyledH1>
				Lambda<br />Notes
			</StyledH1>
			<StyledRoutes to="/">View Your Notes</StyledRoutes>
			<StyledRoutes to="/create-new-note">+ Create New Note</StyledRoutes>
			<StyledButton>Destroy Checked Notes</StyledButton>
		</StyledContainer>
	);
};

export default SidebarContainer;

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 221px;
	background-color: #d3d2d3;
	padding: 20px;
	position: fixed;
	height: 100vh;
`;

export const StyledH1 = styled.h1`
	font-size: 40px;
	color: #4f5559;
`;

export const StyledRoutes = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 25px;
	border-radius: 3px;
	height: 40px;
	width: 100px;
	font-size: 22px;
	font-weight: bold;
	color: #fafdfd;
	background-color: #24b8bd;
	text-decoration: none;
	width: 90%;
	padding: 10px;
`;

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 25px;
	border-radius: 3px;
	height: 80px;
	border: 0;
	width: 221px;
	font-size: 22px;
	font-weight: bold;
	color: #fafdfd;
	background-color: #24b8bd;
	text-decoration: none;
	padding: 10px;
`;
