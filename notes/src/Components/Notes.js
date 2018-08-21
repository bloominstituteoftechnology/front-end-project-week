import React from "react";
import { Link } from "react-router-dom";

class Notes extends React.Component {
	state = { display: false };
	render() {
		return (
			<div className="NotesWrapper">
				{this.props.notes.map(note => (
					<Link className="Notes" to={`/notes/${note.id}`}>
						<div key={note.id}>
							<h4 className="Notes__title">{note.title}</h4>
							<p className="Notes__text">{note.text}</p>
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Notes;
