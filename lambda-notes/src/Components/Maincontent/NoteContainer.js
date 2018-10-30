import React from 'react';
import Notes from './Notes';
import axios from 'axios';
import FullNote from './FullNote';
import { Route } from 'react-router-dom';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			noteId: 0
		};
	}
	componentDidMount() {
		this.getAllNotes();
	}

	getAllNotes = () => {
		const URL = `https://fe-notes.herokuapp.com/note/get/`;
		axios
			.get(`${URL}all`)
			.then((res) => {
				this.setState({ notes: res.data });
			})
			.catch((err) => console.log(err));
	};

	getNoteId = (id) => {
		const noteId = id;
		this.setState({ noteId });
	};

	render() {
		return (
			<div>
				<Notes notes={this.state.notes} getNoteId={this.getNoteId} />
				<Route
					path="/note/:id"
					render={(props) => {
						return <FullNote {...props} deleteNote={this.deleteNote} />;
					}}
				/>
			</div>
		);
	}
}

export default NoteContainer;
