// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarContainer = styled.nav`
	display: flex;
	flex-direction: column;
	width: 220px;
	background: #d7d7d7;
	padding: 0 14px;
	border-right: 1px solid #9a9a9a;
`;

const SideBarTitle = styled.h1`
	line-height: 3rem;
	font-size: 3.4rem;
	font-weight: bold;
	color: #4a494a;
	margin: 18px 0 8px;
`;

const LinkButton = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 191px;
	height: 43px;
	font-size: 1.5rem;
	font-weight: bold;
	text-decoration: none;
	color: white;
	background: #24b8bd;
	border: 1px solid #969696;
	margin-top: 18px;
`;

class SideBar extends Component {
	render() {
		return (
			<SideBarContainer>
				<SideBarTitle>
					Lambda
					<br />
					Notes
				</SideBarTitle>
				<LinkButton to="/">View Your Notes</LinkButton>
				<LinkButton to="/new">+ Create New Note</LinkButton>
			</SideBarContainer>
		);
	}
}

export default SideBar;
