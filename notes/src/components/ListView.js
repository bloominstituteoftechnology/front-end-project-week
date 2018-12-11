import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Note from "./Note";
import { getNotes } from "../actions";

export const ActiveTitle = styled.h2`
	margin-top: 70px;
	margin-left: 30px;
	margin-bottom: 30px;

	@media (max-width: 540px) {
		justify-content: center;
		text-align: center;
		margin-right: 30px;
	}
`;

export const NoteBox = styled.div`
	margin-left: 30px;
	display: flex;
    flex-wrap: wrap;

	@media (max-width: 540px) {
		justify-content: center;
		margin: 10px;
		padding: 10px;
	}
`;

const NoteListNote = styled.div`
	margin-right: 20px;
	width: 220px;
	height: 225px;
	margin-bottom: 30px;
    border: 1px solid darkgrey;
    background-color: white;

	@media (max-width: 540px) {
		margin: 10px;
	}
`;

class ListView extends Component {
	render() {
		if (this.props.deletingNote) {
			return <ActiveTitle> Deleting note... </ActiveTitle>;
		}

		if (!this.props.notes.length || this.props.fetchingNotes) {
			return <ActiveTitle> Loading Notes... </ActiveTitle>;
		}

		return (
			<>
				<ActiveTitle>Your Notes:</ActiveTitle>
				<NoteBox>
					{this.props.notes.map(note => (
						<NoteListNote key={note._id}>
							<Note note={note} />
						</NoteListNote>
					))}
				</NoteBox>
			</>
		);
	}
}
export default connect(
	({ deletingNote, fetchingNotes }) => ({
		deletingNote,
		fetchingNotes
	}),
	{ getNotes }
)(ListView);
