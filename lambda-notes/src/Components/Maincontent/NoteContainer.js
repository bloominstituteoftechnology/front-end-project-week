import React from 'react';
import Notes from './Notes';
import axios from 'axios';
import { Route } from 'react-router-dom';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			noteId: ''
		};
	}
	componentDidMount() {
		this.getAllNotes();
	}

	getAllNotes = () => {
		const URL = `https://fe-notes.herokuapp.com/note/get/all`;
		axios
			.get(`${URL}`)
			.then((res) => {
				this.setState({ notes: res.data });
			})
			.catch((err) => console.log(err));
	};

	getNoteId = (id) => {
		let noteId = id;
		this.setState({ noteId });
	};

	render() {
		return (
			<div>
				<Route exact path="/" render={() => <Notes notes={this.state.notes} getNoteId={this.getNoteId} />} />
			</div>
		);
	}
}

export default NoteContainer;
