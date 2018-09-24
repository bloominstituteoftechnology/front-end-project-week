import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Aside = styled.div`
	width:25%;
	position: fixed;
	top: 0;
	width: 13.5em;
	height: 100%;
	background-color: #bebebe;
	border: solid #838383 1px;
	> h1 {
		font-size: 2.2rem;
		font-weight: bold;
		color: #4b4b4b;
		margin: 15px 0 15px 5%;
	}
`;

const DivClick = styled.div`
	margin: 0 5% 15px 5%;
	text-align: center;
	padding 5%;
	border: solid #005778 .5px;
	background-color: #4aacac;
	> p {
		color: white;
	}
	&:hover {
		background-color: #2c6666;
		cursor: pointer;
	}
`;

const SideBar = (props) => {
	return (
		<Aside>
			<h1>Lambda<br /> Notes</h1>
			<Link to="/"><DivClick><p>View Your Notes</p></DivClick></Link>
			<Link to="/create"><DivClick><p>+ Create New Note</p></DivClick></Link>
		</Aside>
	)
}

export default SideBar;
