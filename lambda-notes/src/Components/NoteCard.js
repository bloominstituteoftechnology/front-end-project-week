import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const NoteCardContainerStyledDiv = styled.div`
    width:190px;
    height:200px;
    overflow:hidden;
    border:1px solid black;
    padding:5px;
    `
const NoteCardTitleStyledHeading = styled.h2`
    font-size:22px;
`
const NoteCardContentStyledP = styled.p`
    font-size:16px;
`

const NoteCard = props => {
    return (
        <div>
            <Link to={"/note"}>
                <NoteCardContainerStyledDiv>
                    <NoteCardTitleStyledHeading>
                        TITLE:{props.noteEntry.title}
                    </NoteCardTitleStyledHeading>
                    <br />
                    <NoteCardContentStyledP>
                        TEXT: {props.noteEntry.textBody}
                    </NoteCardContentStyledP>
                </NoteCardContainerStyledDiv>
            </Link>
        </div>
    );
}

export default NoteCard; 