import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledNoteCard = styled.div`
    display: flex;
    flex-flow: column;
    align-items: start;
    border: 2px solid grey;
    padding: 2%;
    box-shadow: 5px 10px 50px #888888;
    width: 190px;
    height: 190px;
    overflow: hidden;
    
`;

const StyledTitle = styled.h4`
    border-bottom: 1px solid grey;
    margin: 1%;
    padding: 1%;
    width: 100%;
`;

const StyledText = styled.p`
    font: Raleway Medium;
`;
const NoteCard = props => {
    return(

            <StyledNoteCard>
                <Link to={`/notes/${props.note._id}`}
                    style={{ textDecoration: 'none', color: 'black' }}>
                    <StyledTitle>{props.note.title}</StyledTitle>
                    <StyledText>{props.note.textBody}</StyledText>
                </Link>
            </StyledNoteCard>

    );
}

export default NoteCard;