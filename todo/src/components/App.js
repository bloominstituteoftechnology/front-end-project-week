import React, { Component } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { Route } from 'react-router-dom';

import MainContainer from './MainContainer';
import LeftBar from './LeftBar';
import './App.css';

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
			<MainContainer />
		</CenteredDiv>
	);
}


export default App;
