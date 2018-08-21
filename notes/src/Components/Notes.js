import React from "react";
import { Link } from "react-router-dom";

class Notes extends React.Component {
	render() {
		return (
			<div className="NotesWrapper">
				{this.props.notes.map(note => (
					<Link
						key={note._id}
						className="Notes"
						to={`/notes/${note._id}`}
					>
						<div key={note._id}>
							<h4 className="Notes__title">
								{note.title.length > 14
									? note.title.substring(0, 14) + "..."
									: note.title}
							</h4>
							<p className="Notes__text">
								{note.textBody.length > 100
									? note.textBody.substring(0, 100) + "..."
									: note.textBody}
							</p>
						</div>
					</Link>
				))}
			</div>
		);
	}
}
export default Notes;
