// Individual View of Note
import React, { Component } from 'react';
import axios from 'axios';

class NoteView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			note: '',
			isUpdating: false,
		};
	}

	componentDidMount() {
		// change this line to grab the id passed on the URL
		if (this.props.isUpdating) {
			this.setState({
				isUpdating: true,
				note: this.props.isUpdating,
			});
		}
		const noteID = this.props.match.params.noteID;
		this.getNoteView(noteID);
	}

	getNoteView = (noteID) => {
		axios
			.get(`http://localhost:3300/api/notes/${noteID}`)
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
			.delete(`http://localhost:3300/api/notes/${noteID}`)
			.then((response) => {
				this.setState(() => ({ note: response.data }));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	editNote = (noteID) => {
		axios
			.put(`http://localhost:3300/api/notes/${noteID}`, this.state.note)

			.then((response) => {
				this.setState({ isUpdating: false });
			});
	};

	render() {
		return (
			<div className="Noteview">
				<div className="EditDelete">
					<button onClick={(noteID) => this.editNote}>Edit</button>
					<button onClick={(noteID) => this.deleteNote}>Delete</button>
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
