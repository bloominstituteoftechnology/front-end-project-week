import React, { Component } from "react";
import Note from "./Note";
import { getNotes } from "../actions/actions";
import { connect } from "react-redux";

class MainNotes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
				{
					title: "buy a new guy",
					body: "here lies the guy"
				}
			]
		};
	}
	componentDidMount() {
		this.props.getNotes(this.props.notes);
	}

	render() {
		return (
			<div className="note-container">
				{this.props.notes.map(note => (
					<Note note={note} title={note.title} body={note.body} />
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
