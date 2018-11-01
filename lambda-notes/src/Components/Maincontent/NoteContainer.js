import React from 'react';
import Notes from './Notes';
import axios from 'axios';

class NoteContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			noteId: '',
			isChecked: false
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

	deleteALLNotes = () => {
		if (this.state.isChecked === false) {
			alert('Please check the box first');
		} else {
			const URL = (id) => {
				return `https://fe-notes.herokuapp.com/note/delete/${id}`;
			};
			this.state.notes.forEach((id) =>
				axios.delete(`${URL(id)}`).then(() => window.location.reload()).catch((err) => console.log(err))
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

	render() {
		if (!this.state.notes.length) {
			return <h1>Loading............</h1>;
		} else {
			const { notes } = this.state;
			return (
				<div>
					<Notes
						deleteALLNotes={this.deleteALLNotes}
						isChecked={this.state.isChecked}
						notes={notes}
						name={this.state.isChecked}
						toggleCheck={this.toggleCheck}
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
