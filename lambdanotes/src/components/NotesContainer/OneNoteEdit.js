import React, { Component } from "react";
import { getNotes } from "../actions/actions";
import { connect } from "react-redux";

class OneNoteEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			id: 0
		};
		console.log(this.state);
	}

	componentDidMount() {
		if (this.props) {
			this.setState({
				title: this.props.title,
				body: this.props.body,
				id: this.props.id
			});
		}
	}

	editNote = (title, body) => {
		const noteID = parseInt(this.props.match.params.id, 10);

		let thisNote = this.props.notes.find(note => note.id === noteID);

		if (!thisNote) {
			return console.log("no note was found!!");
		} else {
			if (title) thisNote.title = title;
			if (body) thisNote.body = body;
		}
		this.props.history.push("/");
	};
	handleChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className="main-container">
				<h1 className="note-header">Edit Note:</h1>
				<form className="edit-form">
					<input
						className="form titleinput-edit"
						value={this.state.title}
						name="title"
						onChange={this.handleChange}
					/>
					<textarea
						className="form bodyinput"
						value={this.state.body}
						name="body"
						onChange={this.handleChange}
					/>
					<button
						onClick={() => this.editNote(this.state.title, this.state.body)}
						className="savenote-button"
					>
						Update Note
					</button>
				</form>
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
)(OneNoteEdit);
