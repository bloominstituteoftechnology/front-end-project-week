import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import Note from "../Note/Note";
import SearchForm from "../SearchForm/SearchForm";

const NoteListHeader = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;

	i {
		font-size: 24px;
		color: #414141;
		margin: 5px 10px;
		cursor: pointer;
	}
`;

const NoteListContainer = styled.div`
	background-color: #f2f1f2;
	width: 100%;
	min-height: 100vh;
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;

	h2 {
		width: 100%;
		color: #414242;
		/* order: 1; */
	}

	.note-link {
		/* max-width: 25%; */
	}
`;

const NoteCardContainer = styled.div`
	background-color: #ffffff;
	color: #20272d;
	/* width: 10%; */
	width: 180px;
	/* min-width: 120px; */
	overflow-wrap: break-word;
	word-wrap: break-word;
	white-space: pre-wrap;
	/* min-width: 150px; */
	min-height: 150px;
	margin: 5px;
	padding: 10px 15px 15px;
	border: 1px solid #dbdbdb;
	/* border: 2px solid red; */
	cursor: pointer;

	h4 {
		border-bottom: 1px solid #20272d;
		margin: 0;
	}
`;

class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			// id: "",
			// title: "",
			// tags: "",
			// textBody: "",
		};
	}

	componentDidMount() {
		this.props.getNotes();
	}

	// filterNotes = props => {
	// 	if ("a") {
	// 		return this.state.notes;
	// 	} else {
	// 		return this.state.notes
	// 			.filter
	// 			// note => note.title.includes(searchQuery)
	// 			();
	// 	}
	// };

	sortNotesByAscendingLength = () => {
		let sortedNotes = this.props.notes.sort( function (a,b) {
			if (a.textBody.length < b.textBody.length) {
				return -1
			}
			if (a.textBody.length > b.textBody.length) {
				return 1
			}
			return 0
		});
		this.setState({
			notes: sortedNotes
		})
		
		console.log('sortNotes', this.state.notes)
	};
	sortNotesByDescendingLength = () => {
		let sortedNotes = this.props.notes.sort( function (a,b) {
			if (a.textBody.length < b.textBody.length) {
				return 1
			}
			if (a.textBody.length > b.textBody.length) {
				return -1
			}
			return 0
		});
		this.setState({
			notes: sortedNotes
		})
		
		console.log('sortNotes', this.state.notes)
	};

	render(props) {
		console.log("Notelist props", this.props);
		if (!this.props.notes) {
			return <h2>Loading...</h2>;
		}
		return (
			<NoteListContainer>
				<NoteListHeader>
					<h2 className="lamba-notes-header">Your Notes:</h2>
					<SearchForm />
					<i class="fas fa-sort-alpha-up" onClick={this.sortNotesByLength} />
					<i class="fas fa-sort-alpha-down" />
					<i class="fas fa-sort-amount-up" onClick={this.sortNotesByAscendingLength}  />
					<i class="fas fa-sort-amount-down" onClick={this.sortNotesByDescendingLength}  />
				</NoteListHeader>

				{this.props.notes.map(note => {
					return (
						<>
							<NoteCardContainer
								onClick={() => {
									this.props.history.push(
										`/notes/${note._id}`
									);
								}}
								key={note._id}
								className="note-card"
							>
								<h4>
									{note.title.length > 30
										? note.title.slice(0, 30).concat("...")
										: note.title}
								</h4>
								<p>
									{note.textBody.length > 180
										? note.textBody
												.slice(0, 180)
												.concat("...")
										: note.textBody}
								</p>
							</NoteCardContainer>

							<Route
								path="/notes/:noteId"
								render={props => (
									<Note
										{...props}
										notes={this.state.notes}
										deleteNote={this.props.deleteNote}
									/>
								)}
							/>
						</>
					);
				})}
			</NoteListContainer>
		);
	}
}

export default NoteList;
