import React, { Component } from "react";
import { connect } from "react-redux";
import { getNotes, addNote, deleteNote, editNote } from "../actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NoteViewWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const NoteViewHeader = styled.header`
	align-self: flex-end;
`;

class NoteView extends Component {
	render() {
		if (!this.props.notes.length) {
			return <div>Loading note... </div>;
		}
		const note = this.props.notes.find(
			note => this.props.match.params.id === note._id
		);
		return (
			<NoteViewWrapper>
				<NoteViewHeader>
					<Link to={`/edit/${note._id}`}> EDIT</Link>
					<Link to=''>DELETE</Link>
				</NoteViewHeader>
				<section>
					<h1>HELLOO {note.title} </h1>
					<p>{note.textBody} </p>
				</section>
			</NoteViewWrapper>
		);
	}
}
export default connect(
	({ notes }) => ({ notes }),
	{
		getNotes,
		addNote,
		deleteNote,
		editNote
	}
)(NoteView);
