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
			notes: [{ title: '', content: ''}],
	
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
	this.setState({ notes: [...this.state.notes, addNewNotecard]});
}


updatedNotecard = (updatedNC) => {
	const updatedNotes = this.state.notes.map(note => {
		if (note.title === this.state.selectedNotecard.title) {
			return { title: updatedNC.title, content: updatedNC.content };
		} else {
			return note;
		}
	});

	this.setState({ notes: updatedNotes });
}

updateSelectedNotecard = (selectedNotecard) => {
	this.setState({ selectedNotecard: selectedNotecard });
}

deleteNotecard = title => {
	const updatedNotes = this.state.notes.filter(note => note.title !== title);
	this.setState({ notes: updatedNotes });

}

render () {
	return (
		<div>
			<Route exact path = '/' render={() => <ListView updateSelectedNotecard={this.updateSelectedNotecard} {...this.state} />} />
			<Route path = '/CreateNote' render={() => <CreateNote newNotecard = {this.newNotecard} />} />
			<Route path = '/NoteView' render={(props) => <NoteView {...this.state} deleteNotecard={this.deleteNotecard} {...props} />} />
			<Route path = '/EditView' render={() => <EditNote {...this.state} updatedNotecard={this.updatedNotecard} />} />
		</div>
	)
}
}

export default Main;

//22 May - Today I spent a few hours with this file, EditView, ListView, NoteView, CreateView, NoteCard, and sidebar all open at once, and I still needed to write things down on paper to keep track of all the methods and variables and props because the names are so similar. I want this page to be the main view, with the sidebar to the left. I am getting more comfortable with React and actually (heaven forbid) am starting to like it. I did look off of previous assignments for most of this but had to try a few new things to make it work. It took forever for me to get that I needed the props for the NoteView route to work correctly.
