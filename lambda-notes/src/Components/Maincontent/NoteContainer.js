import React from 'react';
import Notes from './Notes';
import axios from 'axios';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			noteId: '',
			isChecked: false,
			searchTerm: ''
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

	URLFunc = (id) => {
		return `https://fe-notes.herokuapp.com/note/delete/${id}`;
	};

	deleteALLNotes = (e) => {
		e.preventDefault();
		if (this.state.isChecked === false) {
			alert('Please check the box first');
		} else {
			this.state.notes.forEach((element) =>
				axios
					.delete(`${this.URLFunc(element._id)}`)
					.then(() => window.location.reload())
					.catch((err) => console.log(err))
			);
		}
	};

	getNoteId = (id) => {
		let noteId = id;
		this.setState({ noteId });
	};

	getEditId = (editId) => {
		this.getNoteId(editId);
	};

	toggleCheck = (e) => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	searchTermChanged = (searchTerm) => {
		this.setState({ searchTerm });
	};

	render() {
		if (!this.state.notes.length) {
			return <h1>Loading............</h1>;
		} else {
			const { notes, isChecked, searchTerm } = this.state;
			return (
				<div>
					<Notes
						deleteALLNotes={this.deleteALLNotes}
						isChecked={isChecked}
						notes={
							searchTerm ? (
								notes.filter((note) => note.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
							) : (
								notes
							)
						}
						name={isChecked}
						toggleCheck={this.toggleCheck}
						{...this.props}
						getEditId={this.getEditId}
						getNoteId={this.getNoteId}
						deletePost={this.deletePost}
						count={notes.length}
						value={searchTerm}
						searchTermChanged={this.searchTermChanged}
					/>
				</div>
			);
		}
	}
}

export default NoteContainer;
