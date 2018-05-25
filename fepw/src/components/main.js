import React, { Component } from 'react';
import CreateNote from './CreateView.js';
import EditNote from './EditView.js';
import ListView from './ListView.js';
import NoteView from './NoteView.js';
import { Route } from 'react-router-dom';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			cards: [{ title: 'Note Title', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}],
	
			addNotecard: {
				title:'',
				content:''
			},
			selectedNotecard: {
				title:'',
				content:''
			},
		}
	}


newNotecard = (addNewNotecard) => {
	this.setState({ cards: [...this.state.cards, addNewNotecard]});
}

updateNotecard = (addNotecard) => {
	this.setState({ cards: [...this.state.cards, addNotecard]});
}

updatedNotecard = (updatedNC) => {
	const updatedNotes = this.state.cards.map(note => {
		if (note.title === this.state.selectedNotecard.title) {
			return { title: updatedNC.title, content: updatedNC.content };
		} else {
			return note;
		}
	});

	this.setState({ cards: updatedNotes });
}

updateSelectedNotecard = (selectedNotecard) => {
	this.setState({ selectedNotecard: selectedNotecard });
}

deleteNotecard = title => {
	const updatedNotes = this.state.cards.filter(card => card.title !== title);
	this.setState({ cards: updatedNotes });

}

render () {
	return (
		<div>
			<Route exact path = '/' render={() => <ListView updateSelectedNotecard={this.updateSelectedNotecard} {...this.state} />} />
			<Route path = '/CreateNote' render={() => <CreateNote newNotecard = {this.newNotecard} updateNotecard = {this.updateNotecard} />} />
			<Route path = '/NoteView' render={(props) => <NoteView {...this.state} deleteNotecard={this.deleteNotecard} {...props} />} />
			<Route path = '/EditView' render={() => <EditNote {...this.state} updatedNotecard={this.updatedNotecard} />} />
		</div>
	)
}
}

export default Main;

//22 May - Today I spent a few hours with this file, EditView, ListView, NoteView, CreateView, NoteCard, and sidebar all open at once, and I still needed to write things down on paper to keep track of all the methods and variables and props because the names are so similar. I want this page to be the main view, with the sidebar to the left. I am getting more comfortable with React and actually (heaven forbid) am starting to like it. I did look off of previous assignments for most of this but had to try a few new things to make it work. It took forever for me to get that I needed the props for the NoteView route to work correctly.
