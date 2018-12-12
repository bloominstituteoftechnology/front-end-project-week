import React from "react";
import ReactMarkdown from "react-markdown";

import EditNote from "./EditNote";
import DeleteModal from "./DeleteModal";

class Note extends React.Component {
	state = {
		editDisplay: false,
		deleteDisplay: false,
		id: this.props.match.params.id,
	};

	handleEditFlip = () => {
		this.setState(prevState => ({
			editDisplay: !prevState.editDisplay,
		}));
	};

	handleDeleteFlip = () => {
		this.setState(prevState => ({
			deleteDisplay: !prevState.deleteDisplay,
		}));
	};

	onSubmit = object => {
		this.props.onSubmit(this.state.id, object);
		this.handleEditFlip();
	};

	render() {
		const note = this.props.notes.find(
			note => note.id == this.props.match.params.id,
		);
		const noteId = this.props.match.params.id;

		return (
			<div className="NoteWrapper">
				{this.state.editDisplay ? (
					<EditNote note={note} onSubmit={this.onSubmit} />
				) : (
					<div>
						<div className="Note__editDelete">
							<span onClick={() => this.handleEditFlip()}>
								edit
							</span>
							<span onClick={() => this.handleDeleteFlip()}>
								delete
							</span>
						</div>
						<div className="Note__content">
							<h3 className="Note__content-header">
								{note.title}
							</h3>
							{note.tags.map(tag => (
								<span className="Notes__tag">{tag}</span>
							))}
							<ReactMarkdown
								source={note.textBody}
								className="Note__content-text"
							/>
						</div>
					</div>
				)}
				<DeleteModal
					deleteDisplay={this.state.deleteDisplay}
					onClose={() => this.handleDeleteFlip()}
					onDelete={() => this.props.onDelete(noteId)}
				/>
			</div>
		);
	}
}

export default Note;
