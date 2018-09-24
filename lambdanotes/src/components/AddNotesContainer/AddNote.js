import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/actions";
import { withRouter } from "react-router-dom";

class AddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			id: Date.now()
		};
	}

	handleChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addNote = event => {
		event.preventDefault();
		{
			console.log(this.state);
		}
		this.props.addNote(this.state);
		this.props.history.push("/");
	};

	render() {
		return (
			<div className="notes-container">
				<form className="forms">
					<input
						className="form titleinput"
						type="text-title"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
						placeholder="Title of your note..."
					/>
					<input
						className="form bodyinput"
						type="text"
						name="body"
						onChange={this.handleChange}
						value={this.state.body}
						placeholder="Enter your note here..."
					/>
					<button onClick={this.addNote} className="savenote-button">
						Save
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
	{ addNote }
)(withRouter(AddNote));
