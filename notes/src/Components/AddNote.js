import React from "react";

class AddNote extends React.Component {
	state = {
		id: 4,
		title: "",
		text: "",
	};

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div>
				<form
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
					/>
					<textarea
						name="text"
						id="addNoteForm"
						cols="30"
						rows="10"
						placeholder="Note Content"
						value={this.state.text}
						onChange={this.handleInputChange}
					/>
					<button>Save</button>
				</form>
			</div>
		);
	}
}

export default AddNote;
