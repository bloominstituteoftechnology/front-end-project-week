import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Note from "./Note";

const NoteList = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const NoteListNote = styled.div`
	margin: 20px;
	width: 150px;
	height: 150px;
`;

class ListView extends Component {
	render() {
		if (!this.props.notes.map.length) {
			return <div> Loading Notes... </div>;
		}
		return (
			<>
				<h2>Your Notes</h2>
				<NoteList>
					{this.props.notes.map(note => (
						<NoteListNote key={note._id}>
							<Note note={note} />
						</NoteListNote>
					))}
				</NoteList>
			</>
		);
	}
}
export default connect(
	({ notes }) => ({ notes }),
	{}
)(ListView);
