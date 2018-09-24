// React
import React from 'react';
import { Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Views
import { 
	ListView, 
	CreateNewView, 
	EditView, 
	NoteView, 
} from './views';

// Components
import { Nav } from './components';

// Actions
import {
	createNote, 
	deleteNote, 
	editNote, 
} from './store/actions';

const App = ({ notes, createNote, deleteNote, editNote }) => {
	return (
		<div className = 'App'>
			<Nav />

			<Route 
				exact path = '/'  
				render = { props => <ListView history = { props.history } notes = { notes } /> } 
			/>

			<Route path = '/create-new' render = { props => <CreateNewView createNote = { createNote } history = { props.history } /> } />

			<Route path = '/note/:id' render = { props => <NoteView id = { Number(props.match.params.id) } deleteNote = { deleteNote } history = { props.history } note = { notes[Number(props.match.params.id)] } /> } />

			<Route path = '/edit/:id' render = { props => <EditView id = { Number(props.match.params.id) } note = { notes[Number(props.match.params.id)] } history = { props.history } editNote = { editNote } /> } />
		</div>
	);
}

const mapStateToProps = state => ({
	notes: state.notes,
});

export default connect(mapStateToProps, { createNote, deleteNote, editNote })(App);
