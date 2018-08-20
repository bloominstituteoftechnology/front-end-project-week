import React from "react";

class Note extends React.Component {
	state = { display: false };
	render() {
		const note = this.props.notes.find(
			note => (note.id = this.props.match.params.id),
		);
		return (
			<div>
				<h4>{note.title}</h4>
				<p>{note.text}</p>
			</div>
		);
	}
}

export default Note;
