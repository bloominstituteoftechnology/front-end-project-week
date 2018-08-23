import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
	state={
		editDisplay: false,
		deleteDisplay: false,
		id: this.props.match.params.id,
		title: '',
		text: '',
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
			note => note.id == this.props.match.params.id,
		);
		const noteId = this.props.match.params.id;

		return (
			<div className='note-wrapper'>
				{this.state.editDisplay ? null : (
					<div>
						<div className='note-edit-delete'>
							<span onClick={() => this.handleEditFlip()}>
								edit
							</span>
							<span onClick={() => this.handleDeleteFlip()}>
								delete
							</span>
						</div>
						<div className='note-content'>
							<h3>{note.title}</h3>
							<p>{note.text}</p>
						</div>
					</div>
				)}
				<div
					className={
						this.state.deleteDisplay
							? 'note-delete-shown'
							: 'note-delete-hidden'
					}
				>
					<div className='note-delete-modal'>
						<h4>Are you sure you want to delete this?</h4>
						<div className='note-delete-modal-buttons'>
							<Link to='/notes'>
								<button
									className='button button-danger'
									onClick={() => this.props.onClick(noteId)}>
									Yes
								</button>
							</Link>
							<button
								className='button'
								onClick={() => this.handleDeleteFlip()}>
								No
							</button>
						</div>
					</div>
				</div>
				{this.state.editDisplay ? (
					<div className='add-note-wrapper'>
                    <h2>Edit Note:</h2>
						<form
							className='add-note-form'
							id='edit-note-form'
							onSubmit={e => {
								e.preventDefault();
								this.props.onSubmit(this.state);
								this.handleEditFlip();
							}}
						>
							<input
								type='text'
								placeholder='Note Title'
								value={this.state.title}
								name='title'
								autoComplete='off'
								onChange={this.handleInputChange}
							/>
							<textarea
								id='editNoteForm'
								cols='80'
								rows='50'
								name='text'
								placeholder='Note Content'
								value={this.state.text}
								onChange={this.handleInputChange}
							/>
							<button className='button'>Update</button>
						</form>
					</div>
				) : null}
			</div>
		);
	}
}

export default Note;