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
	getKillerNotes, 
} from './store/actions';

class App extends React.Component {
	componentDidMount() {
		this.props.getKillerNotes();
	}

	render() {
		const { notes, createNote, deleteNote, editNote, errorMsg } = this.props;

		return (
			<div className = 'App'>
				<Nav errorMsg = { errorMsg } />

				<Route 
					exact path = '/'  
					render = { props => <ListView history = { props.history } notes = { notes } /> } 
				/>

				<Route path = '/create-new' render = { props => <CreateNewView createNote = { createNote } history = { props.history } /> } />

				<Route path = '/note/:id' render = { props => <NoteView deleteNote = { deleteNote } history = { props.history } note = { notes.find(note => note._id === props.match.params.id) } /> } />

				<Route path = '/edit/:id' render = { props => <EditView note = { notes.find(note => note._id === props.match.params.id) } history = { props.history } editNote = { editNote } /> } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	notes: state.notes,
	errorMsg: state.errorMsg,
});

export default connect(
	mapStateToProps, 
	{ 
		createNote, 
		deleteNote, 
		editNote, 
		getKillerNotes, 
	})(App);
