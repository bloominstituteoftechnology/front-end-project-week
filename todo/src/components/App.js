import React, { Component } from 'react';
import styled from 'styled-components';

import LeftBar from './LeftBar';
import MainContainer from './MainContainer';
import './App.css';
import { Route, Link } from 'react-router-dom';
import NewNote from './NewNote';


const CenteredDiv = styled.div`
	margin: 0 auto;
	max-width: 1364px;
	width: 100%;
	margin-top: 50px;
	display: flex;
`;

class App extends Component {
	state = {
		todos: [],
	}


	render() {
		return (
			<CenteredDiv>
				<LeftBar />
				<MainContainer />
			</CenteredDiv>
		);
	}
}

export default App;
