import React from "react";
import { Link } from "react-router-dom";

import Tags from "./Tags";

class Notes extends React.Component {
	render() {
		return (
			<div className="NotesWrapper">
				<h1 className="Notes__header">Your Notes:</h1>
				<Tags notes={this.props.notes} />
				{this.props.notes.map(note => (
					<Link
						key={note._id}
						className="Notes"
						to={`/notes/${note._id}`}
					>
						<div key={note._id}>
							<h4 className="Notes__title">
								{note.title.length > 20
									? note.title.substring(0, 20) + "..."
									: note.title}
							</h4>
							{note.tags.map(tag => (
								<span className="Notes__tag">{tag}</span>
							))}
							<p className="Notes__text">
								{note.textBody.length > 170
									? note.textBody.substring(0, 170) + "..."
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
