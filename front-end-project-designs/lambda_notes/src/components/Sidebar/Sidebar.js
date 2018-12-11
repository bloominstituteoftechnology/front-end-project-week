import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
	background-color: #d3d2d3;
	min-height: 100vh;
	min-width: 250px;
	max-width: 250px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	border-left: 2px solid #BEBEBE;
	border-right: 2px solid #BEBEBE;
`;

const MainHeader = styled.h1`
	color: #414141;
`;

const SidebarButton = styled.div`
	/* width: 80%; */
	background-color: #24b8bd;
	color: #f3f9f9;
	padding: 8px 15px;
	margin: 12px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
`;

const Sidebar = () => {
	return (
		<SidebarContainer>
			<MainHeader>Lambda Notes</MainHeader>
			<Link to="/">
				<SidebarButton>View Your Notes</SidebarButton>
			</Link>
			<Link to="/addnewnote"><SidebarButton href="#">+ Create New Note</SidebarButton></Link>
		</SidebarContainer>
	);
};

export default Sidebar;
