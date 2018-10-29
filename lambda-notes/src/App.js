// React
import React from 'react';
import { Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Dependencies
import PropTypes from 'prop-types';

// Views
import { 
	ListView, 
	CreateNewView, 
	EditView, 
	NoteView,
	HomeView, 
} from './views';

// Components
import { Nav } from './components';

// Actions
import {
	createNote, 
	deleteNote, 
	editNote, 
	getNotes, 
	deleteAll, 
} from './store/actions';

class App extends React.Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		const { 
			notes, 
			createNote, 
			deleteNote, 
			editNote, 
			errorMsg, 
			username, 
			deleteAll, 
		} = this.props;

		return (
			<div className = 'App'>
				<Nav errorMsg = { errorMsg } />

				<Route 
					exact path = '/' 
					render = { () => <HomeView username = { username } /> } 
				/>

				<Route 
					path = '/list' 
					render = { props => <ListView deleteAll = { deleteAll } history = { props.history } username = { username } notes = { notes } /> } 
				/>

				<Route 
					path = '/create-new' 
					render = { props => <CreateNewView createNote = { createNote } history = { props.history } /> } 
				/>

				<Route 
					path = '/note/:id' 
					render = { props => <NoteView deleteNote = { deleteNote } history = { props.history } note = { notes.find(note => note.id.toString() === props.match.params.id) } /> } 
				/>

				<Route 
					path = '/edit/:id' 
					render = { props => <EditView note = { notes.find(note => note.id.toString() === props.match.params.id) } history = { props.history } editNote = { editNote } /> } 
				/>
			</div>
		);
	}
}

App.propTypes = {
	createNote: PropTypes.func,
	deleteAll: PropTypes.func,
	deleteNote: PropTypes.func,
	editNote: PropTypes.func,
	errorMsg: PropTypes.string,
	getNotes: PropTypes.func,
	history: PropTypes.shape({
		action: PropTypes.string,
		block: PropTypes.func,
		createHref: PropTypes.func,
		go: PropTypes.func,
		goBack: PropTypes.func,
		goForward: PropTypes.func,
		length: PropTypes.number,
		listen: PropTypes.func,
		location: PropTypes.shape({
			hash: PropTypes.string,
			key: PropTypes.string,
			pathname: PropTypes.string,
			search: PropTypes.string,
		}),
		push: PropTypes.func,
		replace: PropTypes.func,
	}),
	location: PropTypes.shape({
		hash: PropTypes.string,
		pathname: PropTypes.string,
		search: PropTypes.string,
	}),
	match: PropTypes.shape({
		isExact: PropTypes.bool,
		params: PropTypes.shape({}),
		path: PropTypes.string,
		url: PropTypes.string,
	}),
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			content: PropTypes.string,
			id: PropTypes.number,
			title: PropTypes.string,
		}),
	),
	username: PropTypes.string,
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
		getNotes, 
		deleteAll, 
	}
)(App);
