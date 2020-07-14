import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';
import EditForm from './components/EditForm';
import SingleNote from './components/SingleNote';

const App = () => {
	return (
		<div className="App">
			<Navigation />
			<Route exact path="/notes" render={(props) => <NotesList {...props} />} />
			<Route path="/new-note" render={(props) => <AddNoteForm {...props} />} />
			<Route path="/edit-form/:id" component={EditForm} />
			<Route path="/notes/:id" render={(props) => <SingleNote {...props} />} />
		</div>
	);
};

export default App;
