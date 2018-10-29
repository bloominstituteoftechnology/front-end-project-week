import React, { Component } from 'react';
import './App.css';
import NoteList from './NoteList';
import AddNote from './AddNote';

class App extends Component {
  	render() {
		return (
			<div className="App">
				<AddNote />
				<NoteList />
			</div>
		);
  	}
}

export default App;
