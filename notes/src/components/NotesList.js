import React from 'react';
import styled from 'styled-components';

const CardSection = styled.div`
	width: 70%;
	background-color: rgb(252, 252, 252);
	display: flex;
	min-height: 100vh;
	flex-wrap: wrap;
	justify-content: space-around;
	padding-bottom: 100%;
	padding-left: 5%;
	padding-right: 5%;
`;

const SubCard = styled.div`
	width: 100%;
`;

const StyledCard = styled.div`
	width: 25%;
	background-color: white;
	height: 25vh;
	border: grey;
	padding: 1rem;
	font-size: 1.6rem;
	margin-bottom: 3vh;
	text-decoration: none;
	color: black;
	display: flex;
	text-wrap: wrap;
	-ms-word-break: break-all;
	word-break: break-all;
	word-break: break-word;
`;
const Heading = styled.h1`
	font-size: 2rem;
	display: flex;
	text-wrap: wrap;
	-ms-word-break: break-all;
	word-break: break-all;
	word-break: break-word;
`;
const ViewHeader = styled.h1`
	font-size: 2.5rem;
	margin-top: 1.6rem;
	width: 100%;
	padding-top: 2rem;
	width: 93%;
	color: rgb(43, 44, 45);
`;

const HeaderBar = styled.div`
	background-color: #e6eef0;
`;
const LinkWrapper = styled.a`
	text-decoration: none;
	color: black;
`;
const TextWrapper = styled.div`
	border-top: groove lightgray;
	width: 14vw;
	padding-top: 4px;
`;

const NotesList = props => {
	console.log(props.notes);
	return (
		<CardSection>
			<ViewHeader>Your Notes:</ViewHeader>

			{props.notes.map(note => {
				return (
					<StyledCard key={note._id}>
						<LinkWrapper href={`/${note._id}`}>
							<Heading>{note.title}</Heading>
							<TextWrapper>
								{note.textBody.slice(0, 80)}
								{note.textBody.length > 100 ? '-' : null}
							</TextWrapper>
						</LinkWrapper>
					</StyledCard>
				);
			})}
		</CardSection>
	);
};
export default NotesList;
