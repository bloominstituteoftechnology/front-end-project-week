import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/actions";
import { withRouter } from "react-router-dom";
import { Alert } from "reactstrap";

class AddNote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			id: Date.now(),
			visable: false
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
		if (!this.state.title || !this.state.body) {
			this.setState({ visable: true });
		} else {
			this.props.addNote(this.state);
			this.props.history.push("/");
		}
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
						required
					/>
					<textarea
						className="form bodyinput"
						name="body"
						onChange={this.handleChange}
						value={this.state.body}
						placeholder="Enter your note here..."
						required
					/>
					<div className="alert-box">
						<Alert isOpen={this.state.visable} color="danger">
							Please enter a title and a body
						</Alert>
					</div>

					<button
						type="button"
						onClick={this.addNote}
						className="savenote-button"
					>
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
