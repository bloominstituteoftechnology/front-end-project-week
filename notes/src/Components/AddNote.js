import React from "react";
import Form from "./Form";

class AddNote extends React.Component {
	state = {
		title: "",
		textBody: "",
		tags: "",
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = e => {
		let tags = [];
		if (this.state.tags) {
			tags = this.state.tags.split(",");
		}
		e.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			textBody: this.state.textBody,
			tags: tags,
		});
		this.setState({
			title: "",
			textBody: "",
			tags: "",
		});
	};
	render() {
		return (
			<div className="AddNoteWrapper">
				<h3 className="AddNote__header">Create New Note:</h3>
				<Form
					handleInputChange={this.handleInputChange}
					onSubmit={this.onSubmit}
					title={this.state.title}
					textBody={this.state.textBody}
					tags={this.state.tags}
					label="Save"
				/>
			</div>
		);
	}
}

export default AddNote;
