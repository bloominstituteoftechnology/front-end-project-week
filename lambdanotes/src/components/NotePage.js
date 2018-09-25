// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import EditNote from './EditNote';
import DeleteNoteModal from './DeleteNoteModal';
// Actions
import { getNote } from '../actions';
// Styles
import '../styles/NotePage.css';

class NotePage extends Component {
	state = {};

	clickHandler = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: true
		});
	};

	returnToNote = action => {
		this.setState({
			[action]: undefined
		});
	};

	componentDidMount() {
		this.props.getNote(this.props.match.params.id);
	}

	render() {
		return (
			<div className="NotePage">
				{!this.state.edit ? (
					<React.Fragment>
						<button
							className="edit-note-button"
							name="edit"
							onClick={this.clickHandler}
						>
							edit
						</button>
						<button
							className="delete-note-button"
							name="delete"
							onClick={this.clickHandler}
						>
							delete
						</button>
						{this.props.gettingNote ? (
							<h4 className="loading-message">Loading note...</h4>
						) : this.props.updatingNote ? (
							<h4 className="updating-message">Updating note...</h4>
						) : !this.props.error ? (
							<React.Fragment>
								<h2 className="note-page-title">{this.props.note.title}</h2>
								<p className="note-page-text">{this.props.note.textBody}</p>
							</React.Fragment>
						) : (
							<h4 className="error-message">{this.props.error}</h4>
						)}
					</React.Fragment>
				) : (
					<EditNote note={this.props.note} returnToNote={this.returnToNote} />
				)}
				{this.state.delete && (
					<DeleteNoteModal
						id={this.props.note._id}
						returnToNote={this.returnToNote}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	note: state.notesReducer.note,
	gettingNote: state.notesReducer.gettingNote,
	updatingNote: state.notesReducer.updatingNote,
	error: state.notesReducer.error
});

export default connect(
	mapStateToProps,
	{ getNote }
)(NotePage);
