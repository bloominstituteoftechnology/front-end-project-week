import React from "react";
import styled from "styled-components";

const NoteCardContainer = styled.div`
	background-color: #ffffff;
	color: #20272d;
	width: 10%;
	/* max-width: 200px; */
	min-width: 150px;
    min-height: 150px;
    margin: 20px;
	padding: 15px;
	border: 1px solid #dbdbdb;
`;

const NoteCardTitle = styled.h4`
	color: #20272d;
	border-bottom: 1px solid #20272d;
	margin: 0 0 5px;
`;

const NoteCardContent = styled.div``;

const Note = props => {
    
    console.log(props)
	return (
		<NoteCardContainer>
			<NoteCardTitle>{props.title}</NoteCardTitle>
			<NoteCardContent>{props.textBody}</NoteCardContent>
		</NoteCardContainer>
	);
};

Note.defaultProps = {
    title: '',
    tags: '',
    textBody: '',
}

export default Note;
