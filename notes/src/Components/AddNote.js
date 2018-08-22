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
		e.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			textBody: this.state.textBody,
			tags: this.state.tags.split(","),
		});
		this.setState({
			title: "",
			textBody: "",
			tags: "",
		});
	};
	render() {
		return (
			<Form
				handleInputChange={this.handleInputChange}
				onSubmit={this.onSubmit}
				title={this.state.title}
				textBody={this.state.textBody}
				tags={this.state.tags}
			/>
		);
	}
}

export default AddNote;
