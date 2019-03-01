import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBarStyled = styled.div`
	background-color: #c8cbcc;
	padding-bottom: 100%;
	width: 30%;
	min-height: 100vh;
	${props => (props.type === 'true' ? `opacity:.2;` : null)}
`;

const SideBarContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding-bottom: 100%;
	width:90%
	margin:auto;
`;

const SideBarHeader = styled.h1`
	flex-wrap: wrap;
	text-align: left;
	margin-left: 9%;
	font-size: 3rem;
	line-height: 3rem;
	color: rgb(43, 44, 45);
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
const Linky = styled.div`
	text-decoration: none;
	color: white;
`;

const SideBar = props => {
	return (
		<SideBarStyled type={props.deleting}>
			<SideBarContent>
				<SideBarHeader>
					Lambda
					<br /> Notes
				</SideBarHeader>
				<Link style={{ display: 'flex', textDecoration: 'none' }} to="/">
					<SideBarButton>
						<Linky>View Your Notes</Linky>
					</SideBarButton>
				</Link>
				<Link style={{ display: 'flex', textDecoration: 'none' }} to="/add">
					<SideBarButton>
						<Linky> &#43; Create New Note</Linky>
					</SideBarButton>
				</Link>
			</SideBarContent>
		</SideBarStyled>
	);
};

const mapStateToProps = state => {
	return {
		deleting: state.deleting.toString()
	};
};

export default connect(
	mapStateToProps,
	{}
)(SideBar);
