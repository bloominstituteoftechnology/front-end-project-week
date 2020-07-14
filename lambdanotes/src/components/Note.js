// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const NoteTags = styled.div`
	display: flex;
	height: 15px;
	width: 192px;
	text-overflow: ellipsis;
	color: white;
	padding: 0 3px 0 3px;
`;

const Tag = styled.span`
	display: inline-block;
	max-width: 100px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1.1rem;
	font-weight: bold;
	background: #24b8bd;
	padding: 2px 5px 1px;
	border-top: 1px solid #a5a5a5;
	border-right: 1px solid #a5a5a5;
	border-left: 1px solid #a5a5a5;
	border-radius: 3px 3px 0 0;
	margin-right: 2px;

	&:hover {
		overflow: visible;
		max-width: 100%;
		cursor: pointer;
	}
`;

const NoteLink = styled(Link)`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 192px;
	height: 197px;
	text-decoration: none;
	color: black;
	padding: 10px 20px 0 16px;
	background: white;
	border: 1px solid #a5a5a5;
	margin: 0 16px 24px 0;
`;

const NoteTitle = styled.h3`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1.8rem;
	font-weight: bold;
	padding-bottom: 6px;
	border-bottom: 1px solid #969696;
	margin-bottom: 6px;
`;

const NoteBody = styled.p`
	overflow: hidden;
	font-size: 1.3rem;
	line-height: 2.2rem;
`;

const truncate = (content, length) => {
	return content.length > length
		? `${content.slice(0, length - 3)} …`
		: content;
};

const Note = props => {
	return (
		<NoteContainer>
			<NoteTags>
				{props.note.tags.length
					? props.note.tags.map(tag => (
							<Tag
								key={`${props.note.id}-${tag.id}`}
								id={tag.id}
								title={tag.text}
							>
								{tag.text}
							</Tag>
					  ))
					: null}
			</NoteTags>
			<NoteLink to={`/note/${props.note.id}`}>
				<NoteTitle>{props.note.title}</NoteTitle>
				<NoteBody>{truncate(props.note.textBody, 140)}</NoteBody>
			</NoteLink>
		</NoteContainer>
	);
};

export default Note;
