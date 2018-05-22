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
			cards: [{ title: 'Notecard1', content: 'whatever'}],
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


newNotecard = addNewNotecard => {
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
			<Route path = '/' render={() => <ListView updateSelectedNotecard={this.updateSelectedNotecard} {...this.state} />} />
			<Route path = '/CreateNote' render={() => <CreateNote newNotecard = {this.newNotecard} updateNotecard = {this.updateNotecard} />} />
			<Route path = '/NoteView' render={(props) => <NoteView {...this.state} deleteNotecard={this.deleteNotecard} {...props} />} />
			<Route path = '/EditNote' render={() => <EditNote {...this.state} updatedNotecard={this.updatedNotecard} />} />
		</div>
	)
}
}

export default Main;
