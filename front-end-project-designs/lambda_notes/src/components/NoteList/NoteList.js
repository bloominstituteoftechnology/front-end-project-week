import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";



import Note from "../Note/Note";
import SearchForm from "../SearchForm/SearchForm";

const NoteListHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: space-between;
	padding-right: 120px;

	h2 {
		width: 60%;
		color: #414242;
		font-weight: bold;
		text-align: left;
		/* order: 1; */
	}

	i {
		font-size: 24px;
		color: #414141;
		margin: 5px 10px;
		cursor: pointer;

		&:hover {
			color: #24b8bd;
		}
	}
`;

const NoteListContainer = styled.div`
	background-color: #f2f1f2;
	margin-left: 260px;
	width: 100%;
	min-height: 100vh;
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;

	.note-link {
		/* max-width: 25%; */
	}
`;

const NoteCardContainer = styled.div`
	display: ${props => (props.hidden ? "none" : "inline-block")};
	background-color: #ffffff;
	color: #20272d;
	/* width: 10%; */
	width: 220px;
	/* min-width: 120px; */
	overflow-wrap: break-word;
	word-wrap: break-word;
	white-space: pre-wrap;
	overflow: hidden;
	/* min-width: 150px; */
	height: 220px;
	margin: 5px;
	padding: 10px 15px 15px;
	border: 1px solid #dbdbdb;
	/* border: 2px solid red; */
	cursor: pointer;

	h4 {
		font-size: 18px;
		font-weight: bold;
		border-bottom: 1px solid #20272d;
		margin: 0;
	}
`;

// ============== END STYLES

class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			isStarred: false,
			dropdownOpen: false,
			searchQuery: this.props.searchQuery,
			themeColor: this.props.themeColor,
		};
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		this.props.getNotes();
		// console.log("Notelist searchQ", this.state.searchQuery);
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen,
		}));
	}

	searchNotes = data => {
		this.props.searchNotes(data);
	};

	sortNotesByAscendingLength = () => {
		let sortedNotes = this.props.notes.sort(function(a, b) {
			if (a.textBody.length < b.textBody.length) {
				return -1;
			}
			if (a.textBody.length > b.textBody.length) {
				return 1;
			}
			return 0;
		});
		this.setState({
			notes: sortedNotes,
		});
	};
	sortNotesByDescendingLength = () => {
		let sortedNotes = this.props.notes.sort(function(a, b) {
			if (a.textBody.length < b.textBody.length) {
				return 1;
			}
			if (a.textBody.length > b.textBody.length) {
				return -1;
			}
			return 0;
		});
		this.setState({
			notes: sortedNotes,
		});
	};
	sortNotesByOldestFirst = () => {
		this.props.getNotes();
	};
	sortNotesByNewestFirst = () => {
		let newestNotes = this.props.notes.reverse();
		this.setState({ notes: newestNotes });
	};



	// sortNotesByStarredFirst = () => {
	// 	if ()
	// }

	render() {
		console.log("Notelist props", this.props);
		if (!this.props.notes) {
			setTimeout( () => {
				return <h2>Loading...</h2>;
			}, 1000)
			
		}
		return (
			<NoteListContainer>
				<NoteListHeader>
					<h2 className="lamba-notes-header">Your Notes:</h2>
					<SearchForm
						{...this.props}
						searchNotes={this.searchNotes}
					/>
					<Dropdown
						isOpen={this.state.dropdownOpen}
						toggle={this.toggle}
					>
						<DropdownToggle color="red" caret>
							Sort by:
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem
								onClick={this.sortNotesByDescendingLength}
							>
								<i className="fas fa-sort-amount-down" />
								Longest First
							</DropdownItem>
							<DropdownItem
								onClick={this.sortNotesByAscendingLength}
							>
								<i className="fas fa-sort-amount-up" />
								Shortest First
							</DropdownItem>

							<DropdownItem divider />
							<DropdownItem onClick={this.sortNotesByNewestFirst}>
								<i className="far fa-clock" />
								Newest First
							</DropdownItem>
							<DropdownItem onClick={this.sortNotesByOldestFirst}>
								<i className="fas fa-clock" />
								Oldest First
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem
								onClick={this.sortNotesByStarredFirst}
							>
								<i class="fas fa-star" />
								Starred First
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
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
									{note.textBody.length > 140
										? note.textBody
												.slice(0, 140)
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
										isStarred={props.isStarred}
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
