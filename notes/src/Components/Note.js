import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
	state = {
		editDisplay: false,
		deleteDisplay: false,
		id: this.props.match.params.id,
		title: "",
		text: "",
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleEditFlip = () => {
		this.setState(prevState => ({
			editDisplay: !prevState.editDisplay,
		}));
	};

	render() {
		const note = this.props.notes.find(
			note => note.id == this.props.match.params.id,
		);
		const noteId = this.props.match.params.id;

		return (
			<div className="NoteWrapper">
				{this.state.editDisplay ? null : (
					<div>
						<div>
							<span onClick={() => this.handleEditFlip()}>
								edit
							</span>
							<span>delete</span>
						</div>
						<h3>{note.title}</h3>
						<p>{note.text}</p>
					</div>
				)}
				<div>
					<h4>Are you sure you want to delete this?</h4>
					<Link to="/notes">
						<button onClick={() => this.props.onClick(noteId)}>
							Yes
						</button>
					</Link>
					<button>No</button>
				</div>
				{this.state.editDisplay ? (
					<div>
						<form
							id="editNoteForm"
							onSubmit={e => {
								e.preventDefault();
								this.props.onSubmit(this.state);
								this.handleEditFlip();
							}}
						>
							<input
								type="text"
								placeholder="Note Title"
								value={this.state.title}
								name="title"
								onChange={this.handleInputChange}
							/>
							<textarea
								id="editNoteForm"
								cols="30"
								rows="10"
								name="text"
								placeholder="Note Content"
								value={this.state.text}
								onChange={this.handleInputChange}
							/>
							<button>Update</button>
						</form>
					</div>
				) : null}
			</div>
		);
	}
}

export default Note;
