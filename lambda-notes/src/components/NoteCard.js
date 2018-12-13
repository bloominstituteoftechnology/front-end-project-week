import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteCardDiv = styled.div`
	color: #2f2f2f;
	margin: 2rem 2.25rem 2.5rem 2.25rem;
	width: 175px;
	height: 225px;
	border: 5px solid rgba(255,255,255,0.4);
	border-bottom: 22px solid #888888;
	border-right: 22px solid gray;
	display: flex;
	flex-direction: column;
	background-color: rgba(194, 241, 251, 0.5);
	padding: 0 1.8rem 1.3rem 1.8rem;
`;

const TitleDiv = styled.div`
	padding-top: 10px;
	width: 100%;
	height: 37px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	border-bottom: 1px solid #676767;
	font-weight: 500;
	line-height: 1.4;
    font-size: 1.7rem;
    color: #000;
`;

const NoteContent = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 7;
	-webkit-box-orient: vertical;
	height: 82%;
	white-space: pre-wrap;
	padding: 1rem 0;
	// font-size: 1.3rem;
	line-height: 1.6;
	// font-weight: 300;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export default function NoteCard(props) {
	return (
		<Link to={`/${props.note._id}`}>
			<NoteCardDiv>
				<TitleDiv>{props.note.title}</TitleDiv>
				<NoteContent>
					<ReactMarkdown source={props.note.textBody} />
				</NoteContent>
			</NoteCardDiv>
		</Link>
	);
}
