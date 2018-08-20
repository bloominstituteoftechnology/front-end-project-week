import React from "react";
import { Link } from "react-router-dom";

class Notes extends React.Component {
	state = { display: false };
	render() {
		return (
			<div>
				<h3>Your Notes:</h3>
				{this.props.notes.map(note => (
					<Link to={`/notes/${note.id}`}>
						<div>
							<h4>{note.title}</h4>
							<p>{note.text}</p>
						</div>
					</Link>
				))}
			</div>
		);
	}
}

export default Notes;
