import React from "react";
import { Link } from "react-router-dom";

class FilteredNotes extends React.Component {
	state = {
		notes: [],
	};
	componentDidMount() {
		console.log(this.props.notes);
		console.log(typeof this.props.match.params.tag);
		if (this.props.notes.length > 0) {
			let filteredNotes = this.props.notes.filter(note => {
				return note.tags.includes(this.props.match.params.tag);
			});
			this.setState({ notes: filteredNotes });
		}
	}
	render() {
		return (
			<div className="NotesWrapper">
				<h1 className="Notes__header">Your Notes:</h1>
				{this.state.notes &&
					this.state.notes.map(note => (
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
										? note.textBody.substring(0, 170) +
										  "..."
										: note.textBody}
								</p>
							</div>
						</Link>
					))}
			</div>
		);
	}
}

export default FilteredNotes;
