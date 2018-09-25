// Dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// Components
import SideBar from './SideBar';
import NoteListPage from './NoteListPage';
import NotePage from './NotePage';
import NewNotePage from './NewNotePage';
// import EditNote from './EditNote';
// Styles
import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SideBar />
				<Route exact path="/" component={NoteListPage} />
				<Route path={`/:id`} component={NotePage} />
				<Route path="/new" component={NewNotePage} />
				{/* <Route path="/edit" component={EditNote} /> */}
			</div>
		);
	}
}

export default App;
