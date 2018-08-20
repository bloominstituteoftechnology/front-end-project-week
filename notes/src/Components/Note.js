import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
	state = { display: false };
	render() {
		const note = this.props.notes.find(
			note => note.id == this.props.match.params.id,
		);
		const noteId = this.props.match.params.id;

		return (
			<div>
				<h4>{note.title}</h4>
				<p>{note.text}</p>
				<div>
					<h4>Are you sure you want to delete this?</h4>
					<Link to="/notes">
						<button onClick={() => this.props.onClick(noteId)}>
							Yes
						</button>
					</Link>
					<button>No</button>
				</div>
			</div>
		);
	}
}

export default Note;
