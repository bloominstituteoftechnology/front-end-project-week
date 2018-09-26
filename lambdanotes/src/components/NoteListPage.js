// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
// Components
import Note from './Note';
// Actions
import { getNotes } from '../actions';
// Styles
import '../styles/NoteListPage.css';

const PageContainer = styled.div`
	padding: 56px 8px 0 28px;
`;

const PageTitle = styled.h2`
	font-size: 2rem;
	font-weight: bold;
	color: #4a494a;
	margin-bottom: 30px;
`;

const StatusMessage = styled.h4`
	font-size: 1.6rem;

	${props =>
		props.error &&
		css`
			color: red;
		`};
`;

const NoteList = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* justify-content: space-between; */
`;

class NoteListPage extends Component {
	componentDidMount() {
		this.props.getNotes();
	}

	render() {
		return (
			<PageContainer>
				<PageTitle>Your Notes:</PageTitle>
				{this.props.gettingNotes ? (
					<StatusMessage>Loading notes...</StatusMessage>
				) : this.props.notes.length ? (
					<NoteList>
						{this.props.notes.map(note => (
							<Note key={note._id} note={note} />
						))}
					</NoteList>
				) : !this.props.error ? (
					<StatusMessage>No notes to display.</StatusMessage>
				) : (
					<StatusMessage error>{this.props.error}</StatusMessage>
				)}
			</PageContainer>
		);
	}
}

const mapStateToProps = state => ({
	notes: state.notesReducer.notes,
	gettingNotes: state.notesReducer.gettingNotes,
	error: state.notesReducer.error
});

export default connect(
	mapStateToProps,
	{ getNotes }
)(NoteListPage);
