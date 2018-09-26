import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Aside, DivClick, Log } from './css';

const SideBar = (props) => {
	return (
		<Aside>
			<h1>Lambda<br /> Notes</h1>
			<Log>welcome - {Object.keys(localStorage)}</Log>
			<Link to="/notes"><DivClick><p>View Your Notes</p></DivClick></Link>
			<Link to="/create"><DivClick><p>+ Create New Note</p></DivClick></Link>
			<DivClick onClick={() => {localStorage.clear(); window.location.reload();}}><p>Log Out</p></DivClick>
		</Aside>
	)
}


export default SideBar;
