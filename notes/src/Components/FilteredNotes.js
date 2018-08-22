import React from "react";

import NoteCard from "./NoteCard";
class FilteredNotes extends React.Component {
	state = {
		notes: [],
	};
	componentDidMount() {
		let filteredNotes = this.props.notes.filter(note => {
			return note.tags.includes(this.props.match.params.tag);
		});
		this.setState({ notes: filteredNotes });
	}
	render() {
		return (
			<div className="NotesWrapper FilteredNotesWrapper">
				<h1 className="Notes__header">Your Notes:</h1>
				{this.state.notes &&
					this.state.notes.map(note => <NoteCard note={note} />)}
			</div>
		);
	}
}

export default FilteredNotes;
