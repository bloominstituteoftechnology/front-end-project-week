import React from 'react';
import styled from 'styled-components';

const SideBarStyled = styled.div`
  background-color: #c8cbcc;
  width:150%
	padding-bottom: 100%;
`;

const SideBarContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 100%;
`;

const SideBarHeader = styled.h1`
	font-size: 1.8rem;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
`;

const SideBarButton = styled.button`
	margin: auto;
	color: white;
	background-color: #48d2db;
	font-size: 1.5rem;
	font-weight: bold;
	margin-top: 1rem;
	padding: 0.8rem;
	width: 85%;
	border-color: grey;
`;

const SideBar = () => {
	return (
		<SideBarStyled>
			<SideBarContent>
				<SideBarHeader>
					<h1>
						Lambda
						<br /> Notes
					</h1>
				</SideBarHeader>
				<SideBarButton>View Your Notes</SideBarButton>
				<SideBarButton> &#43; Create New Note</SideBarButton>
			</SideBarContent>
		</SideBarStyled>
	);
};

export default SideBar;
