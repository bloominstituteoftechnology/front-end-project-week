import React from "react";
import fuzzysearch from "fuzzysearch";

import NoteCard from "./NoteCard";
import Tags from "./Tags";

class Notes extends React.Component {
	state = {
		searchTerm: "",
		notes: this.props.notes,
	};

	onDragStart = (event, id) => {
		event.dataTransfer.setData("id", id);
	};

	onDragOver = event => {
		event.preventDefault();
	};

	onDrop = (ev, cat) => {
		let id = ev.dataTransfer.getData("id");
		let notes = this.props.notes.filter(note => {
			if (note.id == id) {
				note.category = cat;
			}
			return note;
		});
		this.setState({
			...this.state,
			notes,
		});
	};

	handleSearchInput = searchTerm => this.setState({ searchTerm });
	render() {
		let notes = {
			wip: [],
			complete: [],
		};

		this.props.notes.forEach(note => {
			if (note.category) {
				notes[note.category].push(
					<NoteCard onDragStart={this.onDragStart} note={note} />,
				);
			} else {
				notes.wip.push(note);
			}
		});

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
				<div
					onDragOver={e => this.onDragOver(e)}
					className="Notes__wip"
				>
					{this.props.notes
						.filter(note =>
							fuzzysearch(this.state.searchTerm, note.title),
						)
						.map(note => (
							<NoteCard
								onDragStart={this.onDragStart}
								note={note}
							/>
						))}
				</div>
				<div
					className="NotesWrapper"
					onDragOver={e => this.onDragOver(e)}
					onDrop={e => this.onDrop(e, "complete")}
				>
					<h1 className="Notes__header">Completed:</h1>
					{notes.complete}
				</div>
			</div>
		);
	}
}
export default Notes;
