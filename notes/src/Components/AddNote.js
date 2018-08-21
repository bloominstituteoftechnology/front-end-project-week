import React from "react";

class AddNote extends React.Component {
	state = {
		id: 12,
		title: "",
		text: "",
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
						this.props.onSubmit(this.state);
						this.setState(prevState => ({
							id: Date.now(),
							title: "",
							text: "",
						}));
					}}
				>
					<input
						type="text"
						placeholder="Note Title"
						value={this.state.title}
						name="title"
						onChange={this.handleInputChange}
						autoComplete="off"
					/>
					<textarea
						id="addNoteForm"
						cols="30"
						rows="10"
						name="text"
						placeholder="Note Content"
						value={this.state.text}
						onChange={this.handleInputChange}
					/>
					<button className="Button">Save</button>
				</form>
			</div>
		);
	}
}

export default AddNote;
