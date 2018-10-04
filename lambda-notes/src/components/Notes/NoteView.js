// Individual View of Note
import React, { Component } from 'react';
import axios from 'axios';

class NoteView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: null,
		};
	}

	componentDidMount() {
		// change this line to grab the id passed on the URL
		const noteID = this.props.match.params.noteID;
		this.getNoteView(noteID);
	}

	getNoteView = (noteID) => {
		axios
			.get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
			.then((response) => {
				this.setState({
					title: response.data.title,
					textBody: response.data.textBody,
					id: response.data._id,
				});

				console.log({
					title: response.data.title,
					textBody: response.data.textBody,
					id: response.data._id,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};
	deleteNote = (noteID) => {
		axios
			.delete(`https://killer-notes.herokuapp.com/note/delete/${noteID}`)
			.then((response) => {
				this.setState(() => ({ notes: response.data }));
			});
	};

	editNote = (noteID) => {};

	render() {
		return (
			<div className="Noteview">
				<div className="EditDelete">
					<button onClick={() => this.editNote(this.id)}>Edit</button>
					<button onClick={() => this.deleteNote(this.id)}>Delete</button>
				</div>
				<h1>{this.state.title}</h1>
				<p>{this.state.textBody}</p>
			</div>
		);
	}
}

NoteView.defaultProps = {
	notes: [],
};

export default NoteView;
