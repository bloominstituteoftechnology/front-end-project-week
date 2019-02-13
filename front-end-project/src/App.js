import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/Views/NavigationBar';
import NoteView from './Components/Views/NoteView';
import NotesView from './Components/Views/NotesView';
import CreateNoteView from './Components/Views/CreateNoteView';
import EditNoteView from './Components/Views/EditNoteView';

class App extends Component {
	render() {
		return (

			<div className="container">

				<NavigationBar />

				<div className="content">

					<div className="wrapper">

						<Route exact path='/' component={NotesView} />
						<Route path='/notes/:id' component={NoteView} />
						<Route path='/create' component={CreateNoteView} />
						<Route path='/edit/:id' component={EditNoteView} />

					</div>

				</div>

			</div>

		);
	}
}


export default App;
