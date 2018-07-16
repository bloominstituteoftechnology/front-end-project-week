import React from 'react';
import styled from 'styled-components';

const StyledNoteCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    border: 2px solid grey;
    margin: 1%;
    padding: 1%;
`;

const StyledTitle = styled.h4`
    border-bottom: 1px solid grey;
    padding: 1%;
`;

const StyledText = styled.p`
    font: Raleway Medium;
`;
const NoteCard = props => {
    return(
        <StyledNoteCard>
            <StyledTitle>{props.note.title}</StyledTitle>
            <StyledText>{props.note.textBody}</StyledText>
        </StyledNoteCard>
    );
}

export default NoteCard;