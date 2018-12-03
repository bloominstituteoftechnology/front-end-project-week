import React, { Component } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { saveNote, getNotes } from './actions';

import './App.css';
import SideBar from './components/SideBar.js';
import NotesList from './components/NotesList.js';
import AddForm from './components/AddForm';
import IndividualNote from './components/IndividualNote.js';
import DeleteNote from './components/DeleteNote';
import EditNote from './components/EditNote';

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
	componentDidMount() {
		this.props.getNotes();
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
					<Route
						exact
						path="/:id"
						render={props => <IndividualNote {...props} />}
					/>
					<Route
						exact
						path="/:id/edit"
						render={props => <EditNote {...props} />}
					/>
					<Route
						path="/:id/delete"
						render={props => <DeleteNote {...props} />}
					/>
				</PageWrapper>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		notes: state.notes,
		savingNote: state.savingNote,
		deleting: state.deleting
	};
};

export default connect(
	mapStateToProps,
	{ saveNote, getNotes }
)(App);
