import React from "react";
import fuzzysearch from "fuzzysearch";

import NoteCard from "./NoteCard";
import Tags from "./Tags";

class Notes extends React.Component {
	state = { searchTerm: "" };

	handleSearchInput = searchTerm => this.setState({ searchTerm });
	render() {
		return (
			<div className="NotesWrapper">
				<h1 className="Notes__header">Your Notes:</h1>
				<input
					type="text"
					className="Notes__header-search"
					placeholder="Search"
					onChange={e => this.handleSearchInput(e.target.value)}
				/>
				<Tags notes={this.props.notes} />
				{this.props.notes
					.filter(note =>
						fuzzysearch(this.state.searchTerm, note.title),
					)
					.map(note => (
						<NoteCard note={note} />
					))}
			</div>
		);
	}
}
export default Notes;
