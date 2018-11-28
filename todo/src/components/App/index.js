import React from 'react';
import styled from 'styled-components';
import SideBar from '../Sidebar';
import './index.css';
import withRouter from 'react-router-dom/withRouter';
import MainContainer from '../MainContainer';
import { connect } from 'react-redux';

const CenteredDiv = styled.div`
	margin: 0 auto;
	max-width: 1364px;
	width: 100%;
	margin-top: 50px;
	display: flex;
`;

class App extends React.Component {

	render() {
		return (
			<CenteredDiv>
				<SideBar />
				<MainContainer />
			</CenteredDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		notes: state.notes
	}
}


export default withRouter(connect(mapStateToProps)(App));
