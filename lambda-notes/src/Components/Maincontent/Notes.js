import React from 'react';
import styled from 'styled-components';

const Notes = (props) => {
	return (
		<StyledNoteWrapper>
			<StyledHeader>
				<h1>Your Notes:</h1>
			</StyledHeader>

			{props.notes.map((note) => {
				return (
					<StyledNoteContainer key={note.id}>
						<StyledH1>{note.title}</StyledH1>
						<p>{note.textBody}</p>
						<p>
							<StyledSpan>{note.tags}</StyledSpan>
						</p>
					</StyledNoteContainer>
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
	max-width: 75%;
	border: 1px solid red;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
`;

export const StyledNoteContainer = styled.div`
	max-height: 295px;
	display: flex;
	padding: 15px;
	flex-direction: column;
	text-align: start;
	width: 18%;
	margin: 10px;
	border: 1px solid rgba(80, 80, 80, 0.3);
`;

export const StyledH1 = styled.h1`
	margin: 0;
	font-size: 22px;
	border-bottom: 2px solid rgba(80, 80, 80, 0.3);
`;

export const StyledHeader = styled.h1`
	display: block;
	width: 100%;
	font-size: 14px;
	color: rgba(80, 80, 80, 0.7);
	margin: 0;
	margin-bottom: 15px;
	padding: 10px;
	text-align: start;
	height: 40px;
`;

export const StyledSpan = styled.span`
	color: rgba(80, 80, 80, 0.7);
	padding: 10px;
`;
