import React, { Component } from "react";
import { getNotes } from "../actions/actions";
import { connect } from "react-redux";

class MainNotes extends Component {
	constructor() {
		super();
		this.state = {
			notes: [
				{
					title: "hey",
					body: "this is a body"
				}
			]
		};
	}
	componentDidMount() {
		this.props.getNotes(this.state.notes);
	}

	render() {
		return (
			<div className="note-container">
				{this.props.notes.map(notes => (
					<div className="note">
						<div className="title">{notes.title}</div>
						<hr />
						<div className="body">{notes.body}</div>
					</div>
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
