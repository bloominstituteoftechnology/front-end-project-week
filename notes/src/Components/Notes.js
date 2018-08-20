import React from "react";

class Notes extends React.Component {
	state = {};
	render() {
		return (
			<div>
				<h3>Your Notes:</h3>
				{this.props.notes.map(note => (
					<div>
						<h4>{note.title}</h4>
						<p>{note.text}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Notes;
