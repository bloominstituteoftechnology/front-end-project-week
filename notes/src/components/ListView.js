import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Note from "./Note";

export const ActiveTitle = styled.h2`
	margin-top: 70px;
	margin-left: 30px;
	margin-bottom: 30px;
`;

export const NoteBox = styled.div`
    margin-left: 30px;
    padding-right: 30px;
	display: flex;
	flex-wrap: wrap;
`;

const NoteListNote = styled.div`
	margin-right: 20px;
	width: 220px;
	height: 225px;
	margin-bottom: 30px;
	border: 1px solid darkgrey;
`;

class ListView extends Component {
	render() {
		if (!this.props.notes.map.length) {
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
	({ notes }) => ({ notes }),
	{}
)(ListView);
