// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import Note from './Note';
// Actions
import { getNotes } from '../actions';
// Styles
import '../styles/NoteListPage.css';

class NoteListPage extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		return (
			<div className="NoteListPage">
				{this.props.gettingNotes ? (
					<h4 className="loading-message">Loading notes...</h4>
				) : this.props.notes.length ? (
					<React.Fragment>
						<h2 className="note-page-title">Your Notes:</h2>
						<ul className="note-list">
							{this.props.notes.map(note => (
								<Note key={note._id} note={note} />
							))}
						</ul>
					</React.Fragment>
				) : !this.props.error ? (
					<h4 className="empty-message">'No notes to display.'</h4>
				) : null}
				{this.props.error ? (
					<h4 className="error-message">{this.props.error}</h4>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	notes: state.notesReducer.notes,
	gettingNotes: state.notesReducer.gettingNotes,
	error: state.notesReducer.error
});

export default connect(
	mapStateToProps,
	{ getNotes }
)(NoteListPage);
