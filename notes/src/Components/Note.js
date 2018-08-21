import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
	state = {
		editDisplay: false,
		deleteDisplay: false,
		_id: this.props.match.params.id,
		title: "",
		textBody: "",
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleEditFlip = () => {
		this.setState(prevState => ({
			editDisplay: !prevState.editDisplay,
		}));
	};

	handleDeleteFlip = () => {
		this.setState(prevState => ({
			deleteDisplay: !prevState.deleteDisplay,
		}));
	};

	render() {
		const note = this.props.notes.find(
			note => note._id == this.props.match.params.id,
		);
		const noteId = this.props.match.params.id;

		return (
			<div className="NoteWrapper">
				{this.state.editDisplay ? null : (
					<div>
						<div className="Note__editDelete">
							<span onClick={() => this.handleEditFlip()}>
								edit
							</span>
							<span onClick={() => this.handleDeleteFlip()}>
								delete
							</span>
						</div>
						<div className="Note__content">
							<h3>{note.title}</h3>
							<p>{note.textBody}</p>
						</div>
					</div>
				)}
				<div
					className={
						this.state.deleteDisplay
							? "Note__delete--shown"
							: "Note__delete--hidden"
					}
				>
					<div className="Note__delete-prompt">
						<h4>Are you sure you want to delete this?</h4>
						<div className="Note__delete-prompt-buttons">
							<Link to="/notes">
								<button
									className="Button Button--danger"
									onClick={() => this.props.onClick(noteId)}
								>
									Yes
								</button>
							</Link>
							<button
								className="Button"
								onClick={() => this.handleDeleteFlip()}
							>
								No
							</button>
						</div>
					</div>
				</div>
				{this.state.editDisplay ? (
					<div className="AddNoteWrapper">
						<form
							className="AddNote__form"
							id="editNoteForm"
							onSubmit={e => {
								e.preventDefault();
								this.props.onSubmit(this.state._id, {
									title: this.state.title,
									textBody: this.state.textBody,
								});
								this.handleEditFlip();
							}}
						>
							<input
								type="text"
								placeholder="Note Title"
								defaultValue={note.title}
								name="title"
								autoComplete="off"
								onChange={this.handleInputChange}
							/>
							<textarea
								id="editNoteForm"
								cols="30"
								rows="10"
								name="textBody"
								placeholder="Note Content"
								defaultValue={note.textBody}
								onChange={this.handleInputChange}
							/>
							<button className="Button">Update</button>
						</form>
					</div>
				) : null}
			</div>
		);
	}
}

export default Note;
