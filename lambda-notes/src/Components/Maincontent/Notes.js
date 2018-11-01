import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Notes = (props) => {
	return (
		<StyledNoteWrapper>
			<StyledDeleteAllTheThings htmlFor="Delete All The Things">
				<input name="isChecked" type="checkbox" checked={props.isChecked} onChange={props.toggleCheck} />Delete
				All The Things <button onClick={props.deleteALLNotes}>Delete</button>
			</StyledDeleteAllTheThings>
			<StyledHeader>Your Notes:</StyledHeader>
			{props.notes.map((note) => {
				return (
					<div key={note._id}>
						<StyledNoteContainer onClick={() => props.getNoteId(note._id)} to={`/${note._id}/note`}>
							<StyledH1>{note.title}</StyledH1>
							<p>{note.textBody}</p>
							<p>
								<StyledSpan>{note.tags}</StyledSpan>
							</p>
						</StyledNoteContainer>
					</div>
				);
			})}
		</StyledNoteWrapper>
	);
};

export default Notes;

export const StyledNoteWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 2280px;
	border: 2px solid rgba(80, 80, 80, 0.3);
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	margin-left: 261px;
	@media (max-width: 1680px) {
		max-width: 1680px;
	}
	@media (max-width: 1122px) {
		max-width: 1122px;
	}
	@media (max-width: 560px) {
		max-width: 560px;
	}
`;

export const StyledNoteContainer = styled(Link)`
	text-decoration: none;
	color: #000000;
	/* max-height: 200px; */
	display: flex;
	padding: 15px;
	flex-direction: column;
	background-color: #ffffff;
	text-align: start;
	overflow: hidden;
	width: 500px;
	margin: 10px;
	border: 1px solid rgba(80, 80, 80, 0.3);
	transition: 0.3s ease-in-out;
	${(props) => (props.isChecked === true ? 'opacity: 1' : 'opacity: 0.5')}
	&:hover {
		cursor: pointer;
		opacity: 1;
		transform: scale(1.025);
		/* background-color: rgba(200, 240, 200, 1); */
		box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.41);
	}

`;

export const StyledH1 = styled.h1`
	margin: 0;
	font-size: 22px;
	border-bottom: 2px solid rgba(80, 80, 80, 0.3);
`;

export const StyledHeader = styled.h1`
	display: block;
	width: 100%;
	font-size: 20px;
	color: rgba(80, 80, 80, 0.7);
	margin: 0;
	padding-left: 10px;
	padding-bottom: 0;
	text-align: start;
`;

export const StyledSpan = styled.span`
	color: rgba(80, 80, 80, 0.7);
	padding: 10px;
`;

export const StyledModal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 400px;
	z-index: 2;
`;

export const StyledDeleteAllTheThings = styled.label`
	padding: 0px;
	margin: 5px 0 10px 5px;
	border-bottom: slategray;
	width: 100%;
	color: #000000;
	font-size: 14px;
	font-style: italic;
	opacity: 0.5;
	transition: 0.5s ease-in-out;
	&:hover {
		opacity: 1;
		color: red;
	}
`;
