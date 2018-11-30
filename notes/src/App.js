import React, { Component } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { saveNote } from './actions';
import './App.css';
import SideBar from './components/SideBar.js';
import NotesList from './components/NotesList.js';
import AddForm from './components/AddForm';

const PageWrapper = styled.div`
	height: 100vh;
	min-width: 100%;
	display: flex;
	padding-bottom: 100%;
`;

class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<header />
				<PageWrapper>
					<SideBar />

					<Route
						exact
						path="/"
						render={props => <NotesList {...props} notes={this.props.notes} />}
					/>

					<Route exact path="/add" render={props => <AddForm {...props} />} />
				</PageWrapper>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes,
		savingNote: state.savingNote
	};
};

export default connect(
	mapStateToProps,
	{ saveNote }
)(App);
