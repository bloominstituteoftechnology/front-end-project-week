import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import './styles/App.css';
import Nav from './components/Nav';
import Routes from './components/Routes';

class App extends Component {
	componentDidMount() {
		this.props.history.push('/');
	}

	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<Container>
					<Nav />
					<Routes />
				</Container>
				<BackGround />
			</React.Fragment>
		);
	}
}

export default withRouter(withRouter(App));

const Container = styled.div`
	display: flex;
	width: 100%;
	margin: auto;
`;

const BackGround = styled.div`
	border: 1px solid #c3c2c3;
	background: #f2f1f2;
	position: fixed;
	height: 100vh;
	width: 100%;
	z-index: -1;
	top: 0;
`;
