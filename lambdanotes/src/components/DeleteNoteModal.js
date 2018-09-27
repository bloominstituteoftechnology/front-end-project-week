// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Actions
import { deleteNote } from '../actions';
// Styles
import { StatusMessage, SubmitButton } from '../styles/SharedStyles';

const ModalShade = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(200, 200, 200, 0.85);
`;

const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 26%;
	left: 50%;
	width: 530px;
	height: 180px;
	background: white;
	padding: 43px 62px;
	border: 2px solid #9a9a9a;
	transform: translate(-50%, -50%);
`;

const ModalPrompt = styled.h4`
	font-size: 1.5rem;
	font-weight: bold;
	color: #4a494a;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const DeleteNoteModal = props => {
	const deleteHandler = event => {
		event.preventDefault();

		props.deleteNote(props.id);

		// route after !deletingNote
	};

	return (
		<ModalShade>
			<ModalBox>
				{props.deletingNote ? (
					<StatusMessage>Deleting note...</StatusMessage>
				) : !props.error ? (
					<React.Fragment>
						<ModalPrompt>Are you sure you want to delete this?</ModalPrompt>
						<ButtonContainer>
							<SubmitButton red onClick={deleteHandler}>
								Delete
							</SubmitButton>
							<SubmitButton onClick={() => props.returnToNote('delete')}>
								No
							</SubmitButton>
						</ButtonContainer>
					</React.Fragment>
				) : (
					<React.Fragment>
						<StatusMessage error>{props.error}</StatusMessage>
						<SubmitButton onClick={() => props.returnToNote('delete')}>
							Oops
						</SubmitButton>
					</React.Fragment>
				)}
			</ModalBox>
		</ModalShade>
	);
};

const mapStateToProps = state => ({
	deletingNote: state.notesReducer.deletingNote,
	error: state.notesReducer.error
});

export default connect(
	mapStateToProps,
	{ deleteNote }
)(DeleteNoteModal);
