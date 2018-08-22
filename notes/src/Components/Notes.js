import React from "react";

import NoteCard from "./NoteCard";
import Tags from "./Tags";

class Notes extends React.Component {
	render() {
		return (
			<div className="NotesWrapper">
				<h1 className="Notes__header">Your Notes:</h1>
				<Tags notes={this.props.notes} />
				{this.props.notes.map(note => (
					<NoteCard note={note} />
				))}
			</div>
		);
	}
}
export default Notes;
