import React from "react";

class AddNote extends React.Component {
	state = {
		title: "",
		textBody: "",
		tags: "",
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div className="AddNoteWrapper">
				<form
					className="AddNote__form"
					id="addNoteForm"
					onSubmit={e => {
						e.preventDefault();
						this.props.onSubmit({
							title: this.state.title,
							textBody: this.state.textBody,
							tags: this.state.tags.split(","),
						});
						this.setState(prevState => ({
							title: "",
							textBody: "",
							tags: "",
						}));
					}}
				>
					<input
						className="AddNote__form-title"
						type="text"
						placeholder="Note Title"
						value={this.state.title}
						name="title"
						onChange={this.handleInputChange}
						autoComplete="off"
					/>
					<input
						type="text"
						placeholder="Tags"
						value={this.state.tags}
						name="tags"
						onChange={this.handleInputChange}
						autoComplete="off"
					/>
					<span className="AddNote__form-tagInstructions">
						Separate tags with a comma
					</span>
					<textarea
						id="addNoteForm"
						cols="30"
						rows="10"
						name="textBody"
						placeholder="Note Content"
						value={this.state.textBody}
						onChange={this.handleInputChange}
					/>
					<button className="Button">Save</button>
				</form>
			</div>
		);
	}
}

export default AddNote;
