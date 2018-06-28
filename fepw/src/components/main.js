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
			notes: [{ _id: '', title: '', content: ''}],
	
			addNotecard: {
				_id:'',
				title:'',
				content:''
			},
			selectedNotecard: {
				_id:'',
				title:'',
				content:''
			},
		}
	}
//28 June added the mongo _id numbers to state for axios.put and .delete purposes. Otherwise the back end would not edit or delete notecards.

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

//28 June I guess this is most of the stuff that I would have put into my App.js if I had been thinking straight. Also, I would have made my components so that I didn't have to have a constructor in all of them, but hindsight is always 20-20. All of the above code specifies what should happen (and be put into state) when someone adds, edits, or deletes a notecard.


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

//28 June Look at me, rendering functions to my routes like a maniac. But this all makes sure that each time the user gets rerouted, an event takes place that sets state and passes the necessary props to run the component correctly. I did this mostly by trial and error and basically kept trying different things until everything finally worked. I'm sure there is probably a better way to accomplish all this. If I had to do it over again I think I would try to simplify it a bit, or at least map it out so that I'm only setting state here or in App.js and then just passing props around the various components.

export default Main;

//22 May - Today I spent a few hours with this file, EditView, ListView, NoteView, CreateView, NoteCard, and sidebar all open at once, and I still needed to write things down on paper to keep track of all the methods and variables and props because the names are so similar. I want this page to be the main view, with the sidebar to the left. I am getting more comfortable with React and actually (heaven forbid) am starting to like it. I did look off of previous assignments for most of this but had to try a few new things to make it work. It took forever for me to get that I needed the props for the NoteView route to work correctly.
