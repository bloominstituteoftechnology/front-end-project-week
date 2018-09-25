// Dependencies
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { deleteNote } from '../actions';
// Styles
import '../styles/DeleteNoteModal.css';

const DeleteNoteModal = props => {
	const deleteHandler = event => {
		event.preventDefault();

		props.deleteNote(props.id);

		// route after !deletingNote
	};

	return (
		<div className="DeleteNoteModal">
			{props.deletingNote ? (
				<h4 className="deleting-message">Deleting note...</h4>
			) : !props.error ? (
				<React.Fragment>
					<p className="delete-text">Are you sure you want to delete this?</p>
					<button className="delete-button" onClick={deleteHandler}>
						Delete
					</button>
					<button
						className="cancel-button"
						onClick={() => props.returnToNote('delete')}
					>
						No
					</button>
				</React.Fragment>
			) : (
				<h4 className="error-message">{props.error}</h4>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	deletingNote: state.notesReducer.deletingNote,
	error: state.notesReducer.error
});

export default connect(
	mapStateToProps,
	{ deleteNote }
)(DeleteNoteModal);
