import React from "react";

import Form from "./Form";

class EditNote extends React.Component {
	state = {
		title: "",
		textBody: "",
		tags: "",
	};

	componentDidMount() {
		this.setState({
			title: this.props.note.title,
			textBody: this.props.note.textBody,
			tags: this.props.note.tags,
		});
	}

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		let tags = [];
		console.log(typeof this.state.tags, "ln26");
		if (typeof this.state.tags == "object") {
			console.log("izzz not a string");
			tags = this.state.tags;
		} else if (this.state.tags) {
			tags = this.state.tags.split(",");
		}
		console.log(tags);

		this.props.onSubmit({
			title: this.state.title,
			textBody: this.state.textBody,
			tags: tags,
		});
	};

	render() {
		return (
			<Form
				textBody={this.state.textBody}
				tags={this.state.tags}
				title={this.state.title}
				onSubmit={this.onSubmit}
				handleInputChange={this.handleInputChange}
				label="Update"
			/>
		);
	}
}

export default EditNote;
