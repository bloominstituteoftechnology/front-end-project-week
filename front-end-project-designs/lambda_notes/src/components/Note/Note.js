import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const NoteCardContainer = styled.div`
	background-color: #ffffff;
	color: #20272d;
	/* width: 10%; */
	width: 600px;
	/* min-width: 150px; */
	min-height: 150px;
	margin: 20px;
	padding: 15px;
`;

const NoteCardHeader = styled.div`
	display: flex;
	justify-content: flex-end;

	.note-header-link {
		margin: 0 10px;
		color: #20272d;
		text-decoration: underline;
		font-weight: bold;
	}
`;

const NoteCardTitle = styled.h2`
	color: #20272d;
	/* border-bottom: 1px solid #20272d; */
	margin: 0 0 5px;
	overflow-wrap: break-word;
	word-wrap: break-word;
`;

const NoteCardContent = styled.div`
	white-space: pre-wrap;
`;

class Note extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: null,
		};
	}

	componentDidMount() {
		console.log("Note params", this.props);
		axios
			.get(
				`https://fe-notes.herokuapp.com/note/get/${
					this.props.match.params.noteId
				}`
			)
			.then(res => {
				console.log("Note > Server Response: ", res);
				this.setState({
					note: res.data,
				});
			})
			.catch(err => console.log("Note > Server Error: ", err));
	}

	render() {
		const note = this.state.note;
		if (!note) return <h2>Loading...</h2>;
		return (
			<>
				<NoteCardContainer
					history={this.props.history}
					notes={this.props.notes}
				>
					<NoteCardHeader>
						<Link
							to={`/notes/${note._id}/edit`}
							className="note-header-link"
						>
							edit
						</Link>
						<Link
							to={`/notes/${note._id}/delete`}
							className="note-header-link"
						>
							delete
						</Link>
					</NoteCardHeader>

					<NoteCardTitle>{this.state.note.title}</NoteCardTitle>
					<NoteCardContent>
						{this.state.note.textBody}
					</NoteCardContent>
				</NoteCardContainer>
			</>
		);
	}
}

export default Note;
