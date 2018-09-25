import React, { Component } from "react";
import Note from "./Note";
import { getNotes } from "../actions/actions";
import { connect } from "react-redux";

class MainNotes extends Component {
	componentDidMount() {
		this.props.getNotes(this.props.notes);
	}

	render() {
		return (
			<div className="note-container">
				{this.props.notes.map(note => (
					<Note note={note} id={note.id} title={note.title} body={note.body} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	notes: state.notes
});

export default connect(
	mapStateToProps,
	{ getNotes }
)(MainNotes);
