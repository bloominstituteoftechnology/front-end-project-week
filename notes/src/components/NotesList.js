import React from 'react';
import styled from 'styled-components';

const CardSection = styled.div`
	width: 80%;
	background-color: #e6eef0;
	display: flex;
	height: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-left: 10%;
	padding-right: 10%;
	padding-bottom: 100%;
`;

const StyledCard = styled.div`
	width: 25%;
	background-color: white;
	height: 25%;
	border: grey;
	padding: 1rem;
	font-size: 1.6rem;
`;
const Heading = styled.h1`
	font-size: 2rem;
`;
const ViewHeader = styled.h1`
	font-size: 2.5rem;
	margin-top: 1.6rem;
	width: 100%;
	background-color: #e6eef0;
	padding-top: 2rem;
	width: 80%;
	padding-left: 10%;
	padding-right: 10%;
`;

const HeaderBar = styled.div`
	background-color: #e6eef0;
`;

const NotesList = props => {
	return (
		<HeaderBar>
			<ViewHeader>Your Notes:</ViewHeader>
			<CardSection>
				{props.notes.map(note => {
					return (
						<StyledCard>
							<Heading>{note.title}</Heading>

							<hr />
							{note.textBody.slice(0, 80)}
							{note.textBody.length > 100 ? '-' : null}
						</StyledCard>
					);
				})}
			</CardSection>
		</HeaderBar>
	);
};
export default NotesList;
