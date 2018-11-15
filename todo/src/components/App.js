import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import LeftBar from './LeftBar';
import MainContainer from './MainContainer';
import './App.css';
// import { Route, Link } from 'react-router-dom';
// import NewNote from './NewNote';


const CenteredDiv = styled.div`
	margin: 0 auto;
	max-width: 1364px;
	width: 100%;
	margin-top: 50px;
	display: flex;
`;

const App = props => {
	return (
		<CenteredDiv>
			<LeftBar />
			
			{/* <MainContainer /> */}
			<h3>Broken ... </h3>
		</CenteredDiv>
	);
}


export default App;
