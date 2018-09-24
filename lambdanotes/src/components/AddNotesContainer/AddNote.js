import React, { Component } from "react";

class AddNote extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			body: ""
		};
	}

	render() {
		return (
			<div className="note-container">
				<form>
					<input />
				</form>
			</div>
		);
	}
}

export default AddNote;
