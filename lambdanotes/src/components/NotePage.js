// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
// Components
import EditNote from './EditNote';
import DeleteNoteModal from './DeleteNoteModal';
// Actions
import { getNote, resetRedirect } from '../actions';
// Styles
import {
	PageContainer,
	PageTitle,
	StatusMessage
} from '../styles/SharedStyles';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 18px;
`;

const EditButton = styled.button`
	font-size: 1.4rem;
	font-weight: bold;
	text-decoration: underline;
	color: #4a494a;
	background: none;
	border: none;
	outline: none;
	cursor: pointer;
`;

const NoteBody = styled.p`
	overflow: hidden;
	white-space: pre-wrap;
	font-size: 1.3rem;
	line-height: 2.2rem;
	color: #4a494a;
`;

class NotePage extends Component {
	state = {};

	clickHandler = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: true
		});
	};

	returnToNote = action => {
		this.setState({
			[action]: undefined
		});
	};

	componentDidMount() {
		this.props.getNote(this.props.match.params.id);
	}

	componentWillUnmount() {
		if (this.props.redirect) this.props.resetRedirect();
	}

	render() {
		if (this.props.redirect) {
			return <Redirect to={this.props.redirect} />;
		}

		return (
			<PageContainer>
				{!this.state.edit ? (
					<React.Fragment>
						<ButtonContainer>
							<EditButton name="edit" onClick={this.clickHandler}>
								edit
							</EditButton>
							<EditButton name="delete" onClick={this.clickHandler}>
								delete
							</EditButton>
						</ButtonContainer>
						{this.props.gettingNote ? (
							<React.Fragment>
								<PageTitle note>Loading note...</PageTitle>
								<StatusMessage>Loading note...</StatusMessage>
							</React.Fragment>
						) : this.props.updatingNote ? (
							<React.Fragment>
								<PageTitle note>Loading note...</PageTitle>
								<StatusMessage>Updating note...</StatusMessage>
							</React.Fragment>
						) : !this.props.error ? (
							<React.Fragment>
								<PageTitle note>{this.props.note.title}</PageTitle>
								<NoteBody>{this.props.note.textBody}</NoteBody>
							</React.Fragment>
						) : (
							<React.Fragment>
								<PageTitle note>Failed to load note</PageTitle>
								<StatusMessage error>{this.props.error}</StatusMessage>
							</React.Fragment>
						)}
					</React.Fragment>
				) : (
					<EditNote note={this.props.note} returnToNote={this.returnToNote} />
				)}
				{this.state.delete && (
					<DeleteNoteModal
						id={this.props.note.id}
						returnToNote={this.returnToNote}
					/>
				)}
			</PageContainer>
		);
	}
}

const mapStateToProps = state => ({
	note: state.notesReducer.note,
	gettingNote: state.notesReducer.gettingNote,
	updatingNote: state.notesReducer.updatingNote,
	error: state.notesReducer.error,
	redirect: state.notesReducer.redirect
});

export default connect(
	mapStateToProps,
	{ getNote, resetRedirect }
)(NotePage);
