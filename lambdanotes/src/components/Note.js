// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

// const NoteTags = styled.div`
// 	position: absolute;
// 	bottom: 0;
// 	left: 0;
// 	width: 184px;
// 	white-space: nowrap;
// 	overflow: hidden;
// 	/* text-overflow: ellipsis; */
// 	color: white;
// 	padding: 2px 8px 7px;
// 	/* margin-right: 8px; */

// 	&:hover {
// 		white-space: normal;
// 		&:after {
// 			display: none;
// 		}
// 	}

// 	&:after {
// 		content: '';
// 		text-align: right;
// 		position: absolute;
// 		bottom: 7px;
// 		right: 0px;
// 		width: 30px;
// 		height: 1.2em;
// 		background: linear-gradient(
// 			to right,
// 			rgba(255, 255, 255, 0),
// 			rgba(255, 255, 255, 1) 70%
// 		);
// 	}
// `;

// const Tag = styled.span`
// 	display: inline-block;
// 	max-width: 100px;
// 	white-space: nowrap;
// 	overflow: hidden;
// 	text-overflow: ellipsis;
// 	font-size: 1.1rem;
// 	font-weight: bold;
// 	background: #24b8bd;
// 	padding: 2px 5px;
// 	border-radius: 3px;
// 	margin-right: 5px;
// `;

// const NoteTags = styled.div`
// 	position: absolute;
// 	bottom: 0;
// 	left: 0;
// 	width: 100%;
// 	background: linear-gradient(
// 		to bottom,
// 		rgba(255, 255, 255, 0),
// 		rgba(255, 255, 255, 0.8) 5%,
// 		rgba(255, 255, 255, 1) 5%
// 	);
// 	padding: 6px 8px 7px;
// `;

// const Tag = styled.span`
// 	display: inline-block;
// 	max-width: 100%;
// 	white-space: nowrap;
// 	overflow: hidden;
// 	text-overflow: ellipsis;
// 	font-size: 1.1rem;
// 	font-weight: bold;
// 	color: white;
// 	background: #24b8bd;
// 	padding: 2px 5px;
// 	border-radius: 3px;
// 	margin-right: 5px;
// `;

const truncate = (content, length) => {
	return content.length > length
		? `${content.slice(0, length - 3)} …`
		: content;
};

const Note = props => {
	return (
		<NoteLink to={`/note/${props.note.id}`}>
			<NoteTitle>{props.note.title}</NoteTitle>
			<NoteBody>{truncate(props.note.textBody, 140)}</NoteBody>
			{/* {props.note.tags.length ? (
				<NoteTags>
					{props.note.tags.map(
						(tag, i) =>
							tag ? (
								<Tag key={props.note._id + i} title={tag}>
									{tag}
								</Tag>
							) : null
					)}
				</NoteTags>
			) : null} */}
		</NoteLink>
	);
};

export default Note;
