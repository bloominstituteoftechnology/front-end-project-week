import React from 'react';
import Notes from './Notes';
import axios from 'axios';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			noteId: ''
		};
	}
	componentDidMount() {
		const URL = `https://fe-notes.herokuapp.com/note/get/all`;
		axios
			.get(`${URL}`)
			.then((res) => {
				this.setState({ notes: res.data });
			})
			.catch((err) => console.log(err));
	}

	getNoteId = (id) => {
		let noteId = id;
		this.setState({ noteId });
	};

	getEditId = (editId) => {
		this.getNoteId(editId);
	};

	render() {
		if (!this.state.notes.length) {
			return <h1>Loaaaaaaaaaaaaaaaaaaaaaadddding............</h1>;
		} else {
			const { notes } = this.state;
			return (
				<div>
					<Notes
						notes={notes}
						{...this.props}
						getEditId={this.getEditId}
						getNoteId={this.getNoteId}
						deletePost={this.deletePost}
					/>
				</div>
			);
		}
	}
}

export default NoteContainer;
