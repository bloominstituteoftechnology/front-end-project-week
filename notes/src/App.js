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
import AfterEdit from './components/AfterEdit';

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

					<Route exact path="/" render={props => <NotesList {...props} />} />
					<Route exact path="/add" render={props => <AddForm {...props} />} />

					<Route
						path="/individual/:id/delete"
						render={props => <DeleteNote {...props} />}
					/>

					<Route
						exact
						path="/individual/:id"
						render={props => <IndividualNote {...props} />}
					/>
					<Route
						exact
						path="/individual/:id/edit"
						render={props => <EditNote {...props} />}
					/>
					<Route
						exact
						path="/afteredit"
						render={props => <AfterEdit {...props} />}
					/>
				</PageWrapper>
			</div>
		);
	}
}

export default App;
